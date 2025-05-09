import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import student3 from "../assets/student3.avif";
import facilities3 from "../assets/facilities3.avif";
import administration1 from "../assets/administration1.jpg";

const slides = [
  {
    text: "STUDENTS",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, culpa.",
    image: student3,
  },
  {
    text: "FACILITIES",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, culpa.",
    image: facilities3,
  },
  {
    text: "ADMINISTRATION",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, culpa.",
    image: administration1,
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Overlay */}
      <div className="overlay absolute inset-0 bg-black opacity-50 z-5"></div>

      {/* Background Images */}
      <AnimatePresence>
        {prevIndex !== index && (
          <motion.div
            key={slides[prevIndex].image + "-prev"}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[prevIndex].image})` }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      <motion.div
        key={slides[index].image}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slides[index].image})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* Content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-8 md:px-12 lg:px-16 z-10"
        style={{ background: "rgba(0,0,0,0.3)" }}
      >
        <AnimatePresence mode="wait">
          <motion.h1
            key={slides[index].text}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold lg:tracking-[1.5rem] xxs:tracking-[0.5rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            {slides[index].text}
          </motion.h1>
          <motion.p
            key={slides[index].paragraph}
            className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl lg:tracking-[0.5rem] xxs:tracking-[0.2rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            {slides[index].paragraph}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
