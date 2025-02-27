import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { Star } from 'lucide-react';

const chefs = [
  {
    name: 'Priya Sharma',
    image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&q=80',
    specialty: 'North Indian',
    rating: 4.9,
    reviews: 128,
    featured: 'Butter Chicken',
  },
  {
    name: 'Rajesh Kumar',
    image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80',
    specialty: 'South Indian',
    rating: 4.8,
    reviews: 156,
    featured: 'Masala Dosa',
  },
  {
    name: 'Anjali Patel',
    image: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&q=80',
    specialty: 'Gujarati',
    rating: 4.9,
    reviews: 142,
    featured: 'Thepla',
  },
];

export function ChefPreview() {
  return (
    <Parallax
      blur={0}
      bgImage="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80"
      strength={200}
      className="!bg-fixed"
    >
      <section className="py-24 bg-black/60 relative overflow-hidden">
        {/* Animated Background Blobs */}
        <motion.div
          className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-orange-500 opacity-40 rounded-full filter blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-50px] right-[-50px] w-40 h-40 bg-orange-500 opacity-40 rounded-full filter blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
            >
              Meet Our Expert Home Chefs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Passionate cooks bringing authentic flavors and years of experience to your plate.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {},
            }}
          >
            {chefs.map((chef) => (
              <motion.div
                key={chef.name}
                className="bg-white rounded-2xl p-6 shadow-lg text-center relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -3 }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.div className="relative overflow-hidden rounded-t-2xl">
                  <motion.img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                  {/* Featured Badge */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 text-xs rounded-full"
                  >
                    {chef.featured}
                  </motion.div>
                </motion.div>

                <motion.div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800">{chef.name}</h3>
                  <p className="text-gray-500">{chef.specialty}</p>
                </motion.div>

                {/* Star Rating */}
                <motion.div className="flex justify-center mt-2">
                  {[...Array(Math.round(chef.rating))].map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-yellow-500" />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.p className="text-gray-600 mt-2">{chef.reviews} reviews</motion.p>

                {/* Always Visible View Profile Button with Additional Hover Effects */}
                <div className="mt-4">
                  <motion.button
                    whileHover={{ scale: 1.1, boxShadow: "0px 4px 12px rgba(0,0,0,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-orange-600"
                  >
                    View Profile
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Parallax>
  );
}
