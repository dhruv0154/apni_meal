import { motion } from 'framer-motion';

import { useState, useEffect } from 'react';

const videos = [
  'https://player.vimeo.com/external/372567650.sd.mp4?s=ec06e26e8b30dd5694e437ccce577a76fae2d611&profile_id=164&oauth2_token_id=57447761',
  'https://player.vimeo.com/external/371843480.sd.mp4?s=b87bbce6f755a3f85e138d0e37ef927a93f8f2d2&profile_id=164&oauth2_token_id=57447761',
  'https://player.vimeo.com/external/371843467.sd.mp4?s=3c5a4937d0f4d01561c23b21d9dd9c4a40a0b5e7&profile_id=164&oauth2_token_id=57447761',
];

const heroLines = [
  "Craving a taste of home?",
  "Experience meals made with passion.",
  "Every dish tells a story.",
  "Welcome to Apni Meal – comfort delivered."
];

export function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLine = heroLines[currentLineIndex];
    const typeSpeed = isDeleting ? 30 : 50; // Faster deletion than typing

    if (!isDeleting && displayText === currentLine) {
      // Pause before starting to delete
      setTimeout(() => setIsDeleting(true), 1500);
      return;
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      // Move to next line
      setCurrentLineIndex((prev) => (prev + 1) % heroLines.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(prev => {
        if (isDeleting) {
          return prev.slice(0, -1);
        }
        return currentLine.slice(0, prev.length + 1);
      });
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentLineIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen bg-charcoal/90">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden bg-black/40">
        {videos.map((video, index) => (
          <video
            key={video}
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-24 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block bg-primary/90 text-white px-4 py-1 rounded-full text-sm font-medium mb-4"
            >
              First Order 50% OFF
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              <span className="min-h-[120px] block">
                {displayText}
                <span className="animate-pulse ml-1">|</span>
              </span>
              <span className="text-primary">Home-Cooked Magic</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Craving mom's cooking? Our expert home chefs bring authentic flavors right to your hostel doorstep. Hot, fresh, and made with love! 🍱
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-primary/90 transition-colors flex items-center justify-center group"
              >
                Order Now
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-3 rounded-full font-medium text-lg hover:bg-white/90 transition-colors"
              >
                Meet Our Chefs
              </motion.button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-3xl font-bold text-white mb-1"
                >
                  50+
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-white/80 text-sm"
                >
                  Home Chefs
                </motion.div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="text-3xl font-bold text-white mb-1"
                >
                  4.8
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="text-white/80 text-sm"
                >
                  Rating
                </motion.div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="text-3xl font-bold text-white mb-1"
                >
                  30min
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="text-white/80 text-sm"
                >
                  Avg. Delivery
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-white/80 text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}