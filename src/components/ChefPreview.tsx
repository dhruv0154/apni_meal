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
      <section className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
            >
              Meet Our Expert Home Chefs
            </motion.h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Passionate cooks bringing authentic flavors and years of experience to your plate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chefs.map((chef) => (
              <motion.div
                key={chef.name}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <img src={chef.image} alt={chef.name} className="w-full h-48 object-cover rounded-t-2xl" />
                <h3 className="text-xl font-semibold text-charcoal mt-4">{chef.name}</h3>
                <div className="flex justify-center mt-2">
                  {[...Array(Math.round(chef.rating))].map((_, index) => (
                    <Star key={index} className="w-5 h-5 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600">{chef.reviews} reviews</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Parallax>
  );
}