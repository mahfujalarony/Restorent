'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      className="relative h-screen w-full bg-cover bg-center flex items-center px-4 sm:px-8 md:px-16 lg:px-20"
      style={{ backgroundImage: "url('/bg-5.jpg')" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="max-w-2xl text-white"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.p
          className='font-semibold text-sm md:text-base text-red-400 mb-2'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Discover Your Taste
        </motion.p>

        <motion.h3
          className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          We believe good food <br className="hidden sm:block" /> offers great smiles
        </motion.h3>

        <motion.p
          className='text-sm sm:text-base md:text-lg mb-6 opacity-90'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat is aute irure.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='px-5 py-2 sm:px-6 sm:py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm sm:text-base transition duration-300'
        >
          Reservation
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
