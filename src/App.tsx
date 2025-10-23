import { useState } from 'react';
import { Smartphone, Clock, Award, MapPin, Phone, Mail, Star, CheckCircle, Wrench, Shield, Zap } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Smartphone className="h-8 w-8 text-emerald-600" />
              <span className="text-2xl font-bold text--900">SmartFix London</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-emerald-600 transition">Services</a>
              <a href="#pricing" className="text-gray-700 hover:text-emerald-600 transition">Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-emerald-600 transition">Reviews</a>
              <button
                onClick={() => setShowBooking(true)}
                className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition"
              >
                Book Repair
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Hero onBookNow={() => setShowBooking(true)} />
      <Services />
      <Pricing onBookNow={() => setShowBooking(true)} />
      <Features />
      <Testimonials />
      <Footer />

      {showBooking && <BookingForm onClose={() => setShowBooking(false)} />}
    </div>
  );
}

export default App;
