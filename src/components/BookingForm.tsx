import { useState, FormEvent } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase, Booking } from '../lib/supabase';

interface BookingFormProps {
  onClose: () => void;
}

const brands = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Huawei', 'Xiaomi', 'Other'];
const repairTypes = [
  'Screen Replacement',
  'Battery Replacement',
  'Water Damage',
  'Camera Repair',
  'Speaker/Mic Repair',
  'Charging Port',
  'Other',
];

export default function BookingForm({ onClose }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    device_brand: '',
    device_model: '',
    repair_type: '',
    preferred_date: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setStatus('submitting');
  setErrorMessage('');

  try {
    const booking: Booking = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      device_brand: formData.device_brand,
      device_model: formData.device_model,
      repair_type: formData.repair_type,
      preferred_date: formData.preferred_date,
      message: formData.message,
    };

    // 1️⃣ Save to Supabase (this keeps working as before)
    const { error } = await supabase.from('bookings').insert([booking]);
    if (error) throw error;

    // 2️⃣ Send email through Formspree (add this block)
    await fetch('https://formspree.io/f/xnngeqzn', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...booking,
        _subject: `New Repair Booking: ${booking.device_brand} ${booking.device_model}`,
        replyto: booking.email,
      }),
    });

    // 3️⃣ Success feedback
    setStatus('success');
    setTimeout(() => {
      onClose();
    }, 2000);
  } catch (error) {
    console.error('Error submitting booking:', error);
    setStatus('error');
    setErrorMessage('Failed to submit booking. Please try again or call us directly.');
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-2xl font-bold">Book Your Repair</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {status === 'success' ? (
          <div className="p-12 text-center">
            <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
            <p className="text-gray-600">We'll contact you shortly to confirm your appointment.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {status === 'error' && (
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                <p className="text-red-800">{errorMessage}</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition"
                  placeholder="020 1234 5678"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Device Brand *</label>
                <select
                  name="device_brand"
                  required
                  value={formData.device_brand}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition"
                >
                  <option value="">Select brand</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Device Model *</label>
                <input
                  type="text"
                  name="device_model"
                  required
                  value={formData.device_model}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition"
                  placeholder="e.g., iPhone 15 Pro"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Repair Type *</label>
                <select
                  name="repair_type"
                  required
                  value={formData.repair_type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition"
                >
                  <option value="">Select repair type</option>
                  {repairTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Preferred Date *</label>
                <input
                  type="date"
                  name="preferred_date"
                  required
                  value={formData.preferred_date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Additional Details (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition resize-none"
                placeholder="Tell us more about the issue..."
              />
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex-1 bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Submitting...' : 'Book Repair'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
