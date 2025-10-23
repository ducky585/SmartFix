import { Smartphone, Battery, Droplets, Camera, Speaker, Wrench } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Screen Replacement',
    description: 'Cracked or damaged screen? We replace LCD and OLED screens with genuine quality parts.',
    price: 'from £49',
  },
  {
    icon: Battery,
    title: 'Battery Replacement',
    description: 'Restore your phone\'s battery life with our quick and efficient battery replacement service.',
    price: 'from £39',
  },
  {
    icon: Droplets,
    title: 'Water Damage Repair',
    description: 'Dropped your phone in water? Our specialists can diagnose and repair water damage.',
    price: 'from £59',
  },
  {
    icon: Camera,
    title: 'Camera Repair',
    description: 'Front or rear camera not working? We fix all camera-related issues quickly.',
    price: 'from £45',
  },
  {
    icon: Speaker,
    title: 'Speaker & Mic',
    description: 'Audio issues? We repair or replace faulty speakers and microphones.',
    price: 'from £35',
  },
  {
    icon: Wrench,
    title: 'Other Repairs',
    description: 'Charging port, buttons, back glass, and more. We handle all phone issues.',
    price: 'Quote',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Repair Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We fix all major smartphone brands including Apple, Samsung, Google, OnePlus, and more
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-emerald-500 hover:shadow-xl transition duration-300"
              >
                <div className="bg-emerald-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition">
                  <Icon className="h-8 w-8 text-emerald-600 group-hover:text-white transition" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <p className="text-emerald-600 font-bold text-lg">{service.price}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Don't See Your Issue?</h3>
          <p className="text-xl mb-6 opacity-90">
            We handle all types of phone repairs. Contact us for a free diagnostic and quote.
          </p>
          <a
            href="tel:+442012345678"
            className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Call for Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
