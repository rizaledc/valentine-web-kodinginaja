"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#050505] text-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4a0404]/20 via-[#050505] to-[#050505]" />
      
      {/* Floating Particles/Stars */}
        <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: Math.random() * 1000 - 500, y: Math.random() * 1000 - 500 }}
            animate={{ 
              opacity: [0, 1, 0], 
              y: [0, -100], 
              scale: [0, 1.5, 0] 
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-[#d4af37] w-1 h-1 blur-[1px]"
            style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>


      <div className="relative z-10 px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="mb-4 text-sm tracking-[0.3em] text-[#d4af37] md:text-base font-light uppercase"
        >
          A Special Dedication
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-6xl font-serif text-[#fdf5e6] md:text-8xl lg:text-9xl"
        >
          Happy <br />
          <span className="bg-gradient-to-r from-[#d4af37] to-[#fdf5e6] bg-clip-text text-transparent italic romantic-accent">
            Valentine's Day
          </span>
        </motion.h1>

        <motion.p
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 2, delay: 1.5 }}
           className="mt-8 font-light text-[#fdf5e6]/80 text-lg md:text-xl tracking-wide"
        >
            Untuk seseorang yang selalu ada di hatiku.
        </motion.p>
      </div>

       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 animate-bounce text-[#d4af37]/50"
      >
        <span className="text-xs tracking-widest uppercase">Scroll Down</span>
      </motion.div>
    </section>
  );
}
