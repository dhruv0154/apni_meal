import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Monthly Plan",
    price: 1999,
    duration: "Monthly",
    description: "Perfect for regular meals",
    features: [
      "20 meals per month",
      "Free delivery",
      "Flexible delivery timing",
      "Basic meal customization",
      "24/7 support",
    ],
    isPopular: false,
  },
  {
    name: "Semester Plan",
    price: 8999,
    duration: "4 Months",
    description: "Best value for long term",
    features: [
      "60 meals per semester",
      "Free priority delivery",
      "Any time delivery",
      "Full meal customization",
      "24/7 priority support",
      "Special weekend menu",
      "Carry forward unused meals",
    ],
    isPopular: true,
  },
];

export function SubscriptionPlans() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
              Save More with Meal Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Subscribe to our meal plans and enjoy great savings on your daily meals.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.isPopular
                  ? 'bg-primary text-white shadow-xl'
                  : 'bg-white text-charcoal'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-green text-white px-4 py-1 rounded-full text-sm font-medium">
                  Best Value
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.isPopular ? 'text-white/90' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">₹{plan.price}</span>
                  <span className={`ml-2 ${plan.isPopular ? 'text-white/90' : 'text-gray-600'}`}>
                    /{plan.duration}
                  </span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className={`w-5 h-5 mr-3 ${plan.isPopular ? 'text-white' : 'text-primary'}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.isPopular
                    ? 'bg-white text-primary hover:bg-white/90'
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
              >
                Subscribe Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}