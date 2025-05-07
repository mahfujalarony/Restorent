import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div 
      className="relative h-screen w-full bg-cover bg-center flex items-center px-4 sm:px-8 md:px-16 lg:px-20"
      style={{ backgroundImage: "url('/bg-5.jpg')" }}
    >
      <div className="max-w-2xl text-white">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='font-semibold text-sm md:text-base text-red-400 mb-2'
        >
          Discover Your Taste
        </motion.p>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight'
        >
          We believe good food <br className="hidden sm:block" /> offers great smiles
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='text-sm sm:text-base md:text-lg mb-6 opacity-90'
        >
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat is aute irure.
        </motion.p>
        
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='px-5 py-2 sm:px-6 sm:py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm sm:text-base transition duration-300'
        >
          Reservation
        </motion.button>
      </div>
    </div>
  );
};

export default Hero; 