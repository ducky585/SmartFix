import { Smartphone, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Smartphone className="h-8 w-8 text-emerald-400" />
              <span className="text-2xl font-bold">SmartFix</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              London's trusted phone repair experts. Professional repairs with quality parts and 90-day warranty.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-emerald-400 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-emerald-400 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-emerald-400 transition">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>123 Oxford Street<br />London, W1D 2HG</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <a href="tel:+442012345678" className="hover:text-emerald-400 transition">
                  020 1234 5678
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <a href="mailto:info@smartfixlondon.com" className="hover:text-emerald-400 transition">
                  info@smartfixlondon.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Monday - Friday</p>
                  <p>9:00 AM - 7:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Saturday - Sunday</p>
                  <p>10:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 SmartFix London. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-emerald-400 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-400 transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-emerald-400 transition">
                Warranty Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
