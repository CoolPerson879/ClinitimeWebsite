// app/components/HeroSection.tsx
import React from "react";
import * as motion from "framer-motion/client";

const HeroSection = () => {
  return (
    <section className="h-screen bg-black flex flex-col justify-center items-center text-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-6xl font-bold mb-4"
      >
        Introducing Clinitime
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-2xl mb-6"
      >
        Revolutionize your clinic experience.
      </motion.p>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100"
      >
        Learn More
      </motion.button>
    </section>
  );
};

export default HeroSection;
