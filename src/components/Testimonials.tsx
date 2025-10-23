import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'Byron',
    rating: 5,
    text: 'Absolutely brilliant service! My iPhone screen was replaced in under an hour and looks brand new. The staff were friendly and professional, and the price was very reasonable.',
    repair: 'iPhone 14 Screen',
  },
  {
    name: 'James Chen',
    location: 'Masonville',
    rating: 5,
    text: 'I thought my phone was beyond repair after water damage, but SmartFix brought it back to life. They explained everything clearly and the warranty gave me peace of mind.',
    repair: 'Samsung Water Damage',
  },
  {
    name: 'Emma Thompson',
    location: 'Old North',
    rating: 5,
    text: 'Best phone repair shop in London! They fixed my battery issue the same day, and the phone works better than ever. Highly recommend to anyone needing phone repairs.',
    repair: 'Google Pixel Battery',
  },
  {
    name: 'Michael Roberts',
    location: 'Westmount',
    rating: 5,
    text: 'Professional, quick, and affordable. I\'ve used them twice now for different repairs and both times the service has been outstanding. Will definitely come back again.',
    repair: 'iPhone Camera Repair',
  },
  {
    name: 'Priya Sharma',
    location: 'Fox Hollow',
    rating: 5,
    text: 'The team went above and beyond to help me recover my data before repairing my phone. Excellent customer service and very fair pricing. Thank you so much!',
    repair: 'OnePlus Screen Repair',
  },
  {
    name: 'David Williams',
    location: 'Downtown London',
    rating: 5,
    text: 'I was impressed by how quickly they diagnosed the problem and provided a quote. The repair was done perfectly and the 90-day warranty shows they stand behind their work.',
    repair: 'Samsung Charging Port',
  },
];


export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Read reviews from our satisfied customers
          </p>
          <div className="flex items-center justify-center space-x-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.9/5</span>
            <span className="text-gray-600">(1,200+ reviews)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-emerald-100" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
              <div className="border-t-2 border-gray-100 pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
                <p className="text-sm text-emerald-600 font-semibold mt-1">{testimonial.repair}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Also find us on</p>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">Google</p>
              <div className="flex items-center space-x-1 mt-1">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="font-semibold">4.9</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">Trustpilot</p>
              <div className="flex items-center space-x-1 mt-1">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="font-semibold">4.8</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">Facebook</p>
              <div className="flex items-center space-x-1 mt-1">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="font-semibold">4.9</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
