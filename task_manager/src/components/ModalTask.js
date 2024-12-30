import React from "react";
import { motion } from "framer-motion"; // Importar para la animación

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          ✖
        </button>
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
