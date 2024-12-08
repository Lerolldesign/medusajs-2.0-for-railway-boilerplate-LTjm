"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-[9vw] md:rounded-[7vw] lg:rounded-[10vw] mb-4  noise">
      <button
        onClick={toggleAccordion}
        className={`w-full py-5 px-5 lg:py-8  2xl:py-10 md:px-10 text-center text-lg  focus:outline-none flex justify-between items-center transition-colors ${
          isOpen ? "bg-creamy/0" : "bg-creamy/0"
        }`}
      >
        {/* Ici, vous pouvez personnaliser le titre en ajoutant des styles CSS directement ou en utilisant une classe */}
        <span className="md:text-browny text-gray-600 font-lune text-[1.10rem] font-semibold md:font-light md:text-[1.5rem] 2xl:text-[3rem] md:ml-20">{title}</span>
        {isOpen ? <FiMinus /> : <FiPlus />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0, scaleY: 0 }}
            animate={{ opacity: 1, height: "auto", scaleY: 1 }}
            exit={{ opacity: 0, height: 0, scaleY: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="p-6"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;






