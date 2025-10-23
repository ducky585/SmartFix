import { Shield, Zap, Award, Clock, CheckCircle, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Most repairs completed within 1-2 hours. Same-day service available for urgent repairs.',
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Premium parts and expert technicians ensure lasting repairs. 90-day warranty included.',
  },
  {
    icon: Award,
    title: 'Certified Experts',
    description: 'Our team has over 10 years of experience repairing all major smartphone brands.',
  },
  {
    icon: Clock,
    title: 'Convenient Hours',
    description: 'Open 7 days a week with extended hours to fit your schedule. Walk-ins welcome.',
  },
  {
    icon: CheckCircle,
    title: 'Free Diagnostics',
    description: 'Not sure what\'s wrong? We offer free diagnostic testing and no-obligation quotes.',
  },
  {
    icon: ThumbsUp,
    title: 'Customer Focused',
    description: 'Over 5000 satisfied customers with 4.9-star ratings across all review platforms.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
             Why SmartFix London?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best phone repair experience in London
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur-xl" />
                <div className="relative bg-white border-2 border-gray-100 rounded-xl p-8 group-hover:border-transparent transition duration-300">
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
                    <Icon className="h-7 w-7 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-br from-gray-50 to-emerald-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Walk-In or Book Ahead
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                No appointment needed for most repairs. Simply walk into our  London location
                or book online to guarantee your preferred time slot. We're here to make phone repair
                as convenient as possible.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">Located in London, Ontario</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">Easy Directions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">Free WiFi while you wait</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Repair shop interior"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
