"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutRestorent = () => {
  // Refs for scroll-based animation triggers
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  // Check if elements are in view
  const imageInView = useInView(imageRef, { once: true, margin: "-50px" });
  const textInView = useInView(textRef, { once: true, margin: "-50px" });
  const buttonInView = useInView(buttonRef, { once: true, margin: "-50px" });

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      {/* Image Section */}
      <motion.div
        ref={imageRef}
        className="w-full lg:w-1/2 h-full flex justify-center"
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
        variants={imageVariants}
      >
        <motion.img
          src="/images/about2.png.webp"
          alt="about"
          className="w-full max-w-[600px] max-h-[500px] rounded-lg shadow-lg object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        ref={textRef}
        className="w-full lg:w-1/2 space-y-4"
        initial="hidden"
        animate={textInView ? "visible" : "hidden"}
        variants={textVariants}
      >
        <motion.h3
          className="text-red-500 font-semibold text-lg"
          variants={textVariants}
        >
          About Our Restaurant
        </motion.h3>
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight"
          variants={textVariants}
        >
          We Provide Good Food For Your Family!
        </motion.h1>

        <div className="space-y-4 text-gray-600">
          <motion.p
            className="text-base md:text-lg"
            variants={textVariants}
            transition={{ delay: 0.2 }}
          >
            Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco laboris
            nisi ufsit aliquip ex ea commodo consequat is aute irure m, quis
            nostrud exer
          </motion.p>
          <motion.p
            className="text-base md:text-lg"
            variants={textVariants}
            transition={{ delay: 0.4 }}
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected our,
            or randomised words which don't look even slightly believab If you are
            going to use a passage.
          </motion.p>
        </div>

        {/* Button */}
        <motion.button
          ref={buttonRef}
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-full transition duration-300 mt-4"
          initial="hidden"
          animate={buttonInView ? "visible" : "hidden"}
          variants={buttonVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AboutRestorent;