import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface PricingProps {
  onBookNow: () => void;
}

const brands = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Huawei', 'Xiaomi'];

const repairs = {
  Apple: [
    { model: 'iPhone 15 Pro Max', screen: '$479', battery: '$139', water: '$169' },
    { model: 'iPhone 15 Pro', screen: '$449', battery: '$139', water: '$169' },
    { model: 'iPhone 14 Pro Max', screen: '$429', battery: '$125', water: '$155' },
    { model: 'iPhone 14 Pro', screen: '$399', battery: '$125', water: '$155' },
    { model: 'iPhone 13', screen: '$319', battery: '$109', water: '$139' },
    { model: 'iPhone 12', screen: '$269', battery: '$95', water: '$125' },
  ],
  Samsung: [
    { model: 'Galaxy S24 Ultra', screen: '$449', battery: '$125', water: '$149' },
    { model: 'Galaxy S24+', screen: '$399', battery: '$125', water: '$149' },
    { model: 'Galaxy S23 Ultra', screen: '$419', battery: '$115', water: '$145' },
    { model: 'Galaxy S23', screen: '$339', battery: '$109', water: '$135' },
    { model: 'Galaxy S22', screen: '$299', battery: '$99', water: '$129' },
    { model: 'Galaxy A54', screen: '$209', battery: '$89', water: '$115' },
  ],
  Google: [
    { model: 'Pixel 8 Pro', screen: '$339', battery: '$115', water: '$139' },
    { model: 'Pixel 8', screen: '$309', battery: '$105', water: '$129' },
    { model: 'Pixel 7 Pro', screen: '$329', battery: '$105', water: '$129' },
    { model: 'Pixel 7', screen: '$279', battery: '$99', water: '$119' },
  ],
  OnePlus: [
    { model: 'OnePlus 12', screen: '$309', battery: '$105', water: '$129' },
    { model: 'OnePlus 11', screen: '$279', battery: '$95', water: '$119' },
    { model: 'OnePlus 10 Pro', screen: '$259', battery: '$89', water: '$109' },
  ],
  Huawei: [
    { model: 'P60 Pro', screen: '$289', battery: '$99', water: '$119' },
    { model: 'P50 Pro', screen: '$259', battery: '$95', water: '$115' },
    { model: 'Mate 50 Pro', screen: '$269', battery: '$99', water: '$119' },
  ],
  Xiaomi: [
    { model: 'Xiaomi 14 Pro', screen: '$289', battery: '$99', water: '$119' },
    { model: 'Xiaomi 13 Pro', screen: '$259', battery: '$95', water: '$115' },
    { model: 'Redmi Note 13 Pro', screen: '$169', battery: '$79', water: '$99' },
  ],
};


export default function Pricing({ onBookNow }: PricingProps) {
  const [selectedBrand, setSelectedBrand] = useState('Apple');

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No hidden fees. All prices include parts and labor with our 90-day warranty
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedBrand === brand
                  ? 'bg-emerald-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-semibold">Model</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold">Screen Repair</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold">Battery</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold">Water Damage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {repairs[selectedBrand as keyof typeof repairs].map((item, index) => (
                  <tr key={index} className="hover:bg-emerald-50 transition">
                    <td className="px-6 py-4 font-semibold text-gray-900">{item.model}</td>
                    <td className="px-6 py-4 text-emerald-600 font-bold">{item.screen}</td>
                    <td className="px-6 py-4 text-emerald-600 font-bold">{item.battery}</td>
                    <td className="px-6 py-4 text-emerald-600 font-bold">{item.water}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-emerald-100">
            <CheckCircle className="h-8 w-8 text-emerald-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Parts</h3>
            <p className="text-gray-600">We use premium quality parts that meet or exceed original specifications</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-emerald-100">
            <CheckCircle className="h-8 w-8 text-emerald-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">90-Day Warranty</h3>
            <p className="text-gray-600">All repairs come with a comprehensive 90-day warranty for your peace of mind</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-emerald-100">
            <CheckCircle className="h-8 w-8 text-emerald-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Price Match</h3>
            <p className="text-gray-600">Found a better price? We'll match it while maintaining our quality standards</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onBookNow}
            className="bg-emerald-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition transform hover:scale-105 shadow-lg"
          >
            Book Your Repair Now
          </button>
        </div>
      </div>
    </section>
  );
}
