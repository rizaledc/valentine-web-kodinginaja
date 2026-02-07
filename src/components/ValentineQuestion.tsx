"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Heart } from "lucide-react";
import GoldBalloons from "./GoldBalloons";

export default function ValentineQuestion() {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [isAccepted, setIsAccepted] = useState(false);
  const [risingHearts, setRisingHearts] = useState<{ id: number; left: number; size: number; duration: number }[]>([]);

  const moveNoButton = () => {
    // Random position within a constrained area
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    setNoButtonPos({ x, y });
  };

  const handleAccept = () => {
    setIsAccepted(true);
    triggerHeartBurst();
  };

  const triggerHeartBurst = () => {
    const hearts = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal start
      size: Math.random() * 40 + 10, // Size from 10px to 50px
      duration: Math.random() * 2 + 3, // Duration 3-5s (Faster)
    }));
    setRisingHearts(hearts);
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center bg-[#050505] p-4 text-center relative overflow-hidden">
      
      {/* Rising Hearts Animation Layer */}
      <AnimatePresence>
        {risingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 1, y: "10%", x: 0 }}
            animate={{ 
                opacity: 0, 
                y: "-120vh",
                x: Math.random() * 50 - 25 // Slight horizontal drift
            }}
            transition={{ 
                duration: heart.duration, 
                ease: "easeOut"
            }}
            style={{
                position: "absolute",
                left: `${heart.left}%`,
                bottom: 0,
                zIndex: 50
            }}
          >
            <Heart 
                fill="#d4af37" 
                color="#d4af37" 
                size={heart.size} 
                className="drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Gold Balloons Background Layer */}
      <AnimatePresence>
        {isAccepted && <GoldBalloons />}
      </AnimatePresence>

      {!isAccepted ? (
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           className="z-10 bg-[#fdf5e6]/5 p-12 rounded-2xl border border-[#d4af37]/20 backdrop-blur-md max-w-2xl w-full"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-[#d4af37] mb-12 leading-tight">
            Will you be my <br />
            <span className="italic romantic-accent text-[#fdf5e6]">Valentine?</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAccept}
              className="px-12 py-4 bg-[#d4af37] text-black font-serif text-xl rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all"
            >
              YES
            </motion.button>

            <motion.button
              onHoverStart={moveNoButton}
              onClick={moveNoButton}
              animate={{ x: noButtonPos.x, y: noButtonPos.y }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="px-12 py-4 bg-transparent border border-[#fdf5e6]/30 text-[#fdf5e6]/50 font-serif text-xl rounded-full hover:bg-[#fdf5e6]/10 transition-colors cursor-pointer"
            >
              No
            </motion.button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="z-10 text-center relative"
        >
          <h2 className="text-5xl md:text-7xl font-serif text-[#d4af37] mb-6">
            Yayy!
          </h2>
          <p className="text-[#fdf5e6] text-xl md:text-2xl font-light tracking-wide">
            See you on February 14th!
          </p>
        </motion.div>
      )}
    </section>
  );
}
