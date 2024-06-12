import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div 
      id="about"
      className="m-10 p-8 bg-black bg-opacity-40 text-white rounded-lg shadow-lg lg:mx-20 lg:px-16 lg:py-12 md:mx-16 md:px-12 md:py-8 sm:mx-8 sm:px-6 sm:py-4"
      initial={{ scale: 0.5, opacity: 0 }} // Start with a smaller scale and invisible
      animate={{ scale: 1, opacity: 1 }} // Animate to full size and fully visible
      transition={{ type: "spring", stiffness: 50, damping: 100 }} // Define the type and properties of the animation
    >
      As a Frontend Developer, I specialize in crafting seamless 
      and engaging user experiences. With a keen eye for design 
      and a deep understanding of web technologies, I bring 
      digital interfaces to life. My expertise spans HTML, CSS, 
      JavaScript, and modern frameworks like React and Vue.js. 
      I am passionate about responsive design, performance optimization, 
      and accessibility, ensuring that every user interaction is intuitive 
      and enjoyable. Explore my portfolio to see how I transform creative 
      concepts into functional, beautiful web applications.
    </motion.div>
  );
}

export default About;
