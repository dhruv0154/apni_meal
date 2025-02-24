import { motion } from 'framer-motion';
import { Clock, Flame, Star } from 'lucide-react';
import { useState } from 'react';
import { QuickOrderModal } from './QuickOrderModal';

const menuItems = [
  {
    name: "Maa's Special Thali",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80",
    price: 149,
    chef: "Priya Sharma",
    prepTime: "30 min",
    isPopular: true,
    rating: 4.8,
    reviews: 128,
    description: "A complete meal with 3 rotis, dal, rice, 2 sabzi, raita, and dessert",
    tags: ["Bestseller", "Must Try"],
  },
  {
    name: "South Indian Combo",
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e3?auto=format&fit=crop&q=80",
    price: 129,
    chef: "Rajesh Kumar",
    prepTime: "25 min",
    isPopular: true,
    rating: 4.7,
    reviews: 156,
    description: "2 masala dosas with sambar, coconut chutney, and filter coffee",
    tags: ["Trending"],
  },
  {
    name: "Gujarati Delight",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80",
    price: 139,
    chef: "Anjali Patel",
    prepTime: "35 min",
    isPopular: false,
    rating: 4.6,
    reviews: 92,
    description: "Thepla with curry, dal, rice, and kadhi",
    tags: ["New"],
  },
  {
    name: "Protein Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80",
    price: 169,
    chef: "Priya Sharma",
    prepTime: "20 min",
    isPopular: true,
    rating: 4.9,
    reviews: 78,
    description: "Quinoa, grilled chicken, roasted vegetables, and hummus",
    tags: ["Healthy", "High Protein"],
  },
];

export function FeaturedMenu() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <section className="py-24 bg-charcoal" style={{ backgroundImage: "url('https://source.unsplash.com/featured/?meal')", backgroundSize: 'cover' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Today's Special Menu
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Delicious home-cooked meals prepared with love and delivered fresh to your doorstep.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {item.tags.map((tag, i) => (
                  <div
                    key={tag}
                    className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center"
                    style={{ transform: `translateY(${i * 40}px)` }}
                  >
                    {tag === "Bestseller" && <Flame className="w-4 h-4 mr-1" />}
                    {tag}
                  </div>
                ))}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-charcoal">{item.name}</h3>
                  <div className="flex items-center text-primary">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 font-medium">{item.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.prepTime}
                  </div>
                  <span className="text-sm text-gray-500">{item.reviews} reviews</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">From</span>
                    <span className="text-2xl font-semibold text-charcoal">₹{item.price}</span>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOrderModalOpen(true)}
                    className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Order Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOrderModalOpen(true)}
            className="bg-white text-primary px-8 py-3 rounded-full font-medium text-lg hover:bg-white/90 transition-colors"
          >
            View Full Menu
          </motion.button>
        </motion.div>
      </div>

      <QuickOrderModal 
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </section>
  );
}