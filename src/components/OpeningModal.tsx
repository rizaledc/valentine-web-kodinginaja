"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Play } from "lucide-react";

interface OpeningModalProps {
  onOpen: () => void;
}

export default function OpeningModal({ onOpen }: OpeningModalProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleOpen = () => {
    setIsVisible(false);
    // Add a slight delay to ensure smooth transition
    setTimeout(onOpen, 500);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="relative flex flex-col items-center justify-center p-8 text-center">
            {/* Pulsing Glow Effect */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-64 w-64 rounded-full bg-red-900/30 blur-3xl"
            />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-8 text-4xl font-serif text-[#fdf5e6] md:text-5xl"
            >
              For You
            </motion.h1>

            <motion.button
              onClick={handleOpen}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="group relative flex items-center gap-3 rounded-full border border-[#d4af37]/30 bg-black/50 px-8 py-4 text-[#d4af37] backdrop-blur-sm transition-colors hover:border-[#d4af37] hover:bg-[#d4af37]/10"
            >
              <span className="text-lg font-light tracking-widest uppercase">Open</span>
              <Play className="h-4 w-4 fill-current" />
              
              {/* Button Glow for Hover */}
              <div className="absolute inset-0 -z-10 rounded-full bg-[#d4af37]/0 transition-colors duration-500 group-hover:bg-[#d4af37]/5" />
            </motion.button>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mt-6 text-xs text-[#fdf5e6]/60 font-light tracking-[0.2em]"
            >
              USE HEADPHONES FOR BEST EXPERIENCE
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
