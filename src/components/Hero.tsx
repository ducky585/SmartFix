import { Clock, Award, MapPin } from 'lucide-react';

interface HeroProps {
  onBookNow: () => void;
}

export default function Hero({ onBookNow }: HeroProps) {
  return (
    <div className="pt-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Expert Phone Repairs in{' '}
              <span className="text-emerald-600">London</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional repairs for all major brands. Same-day service available.
              90-day warranty on all repairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={onBookNow}
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition transform hover:scale-105"
              >
                Book Your Repair
              </button>
              <a
                onClick={() => (window.location.href = 'tel:+16476190835')}
                className="bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-50 transition text-center"
              >
                Call Now
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Same Day</p>
                  <p className="text-sm text-gray-600">Quick Service</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">90-Day</p>
                  <p className="text-sm text-gray-600">Warranty</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">London</p>
                  <p className="text-sm text-gray-600">,Ontario</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition duration-300">
              <img
                src="https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Phone repair technician"
                className="rounded-lg shadow-lg transform -rotate-3 hover:rotate-0 transition duration-300"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <p className="text-3xl font-bold text-emerald-600 mb-1">5000+</p>
              <p className="text-gray-700 font-medium">Successful Repairs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
