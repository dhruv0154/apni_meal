import { motion } from 'framer-motion';
import { Users, Heart, Award } from 'lucide-react';

export function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-6">
            Welcome to Apni Meal – Where Home-Cooked Love Meets Student Life
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Apni Meal, we believe that the comforting taste of a home-cooked meal can transform even the busiest hostel life into a warm, satisfying experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Our Story</h3>
            <p className="text-gray-600">
              Founded by passionate food enthusiasts who grew up cherishing family recipes, our journey began with the simple idea of bringing authentic, homemade food to students.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Our Mission</h3>
            <p className="text-gray-600">
              We are committed to delivering nutritious and delicious meals crafted by experienced home chefs, making every meal feel like a warm hug from home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Our Vision</h3>
            <p className="text-gray-600">
              We envision a future where every student can enjoy affordable, healthy, and comforting meals without compromising on taste or quality.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-display font-bold text-charcoal mb-6">Meet Our Team</h3>
          <p className="text-gray-600 mb-8">
            Our team is a blend of culinary experts, tech-savvy professionals, and customer care champions who work tirelessly to ensure every meal not only satisfies hunger but also nourishes the soul.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
            Join Our Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}