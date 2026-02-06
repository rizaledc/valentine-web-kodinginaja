"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import FlyingHearts from "@/components/FlyingHearts";

const letterContent = `My Dearest,

From the moment our paths crossed, my world has been brighter. 
Your laughter is my favorite melody, and your happiness is my greatest goal.
Every day with you feels like a beautiful dream I never want to wake up from.

Thank you for being my partner, my best friend, and my love.

Forever yours,
[Your Name]`;

export default function Letter() {
  const [displayedText, setDisplayedText] = useState("");
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (startTyping && displayedText.length < letterContent.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(letterContent.slice(0, displayedText.length + 1));
      }, 50); // Typing speed
      return () => clearTimeout(timeout);
    }
  }, [startTyping, displayedText]);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-[#050505] py-24 px-4 overflow-hidden">
      <FlyingHearts />
      <motion.div
        onViewportEnter={() => setStartTyping(true)}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative max-w-2xl w-full bg-[#fdf5e6]/5 p-8 md:p-12 rounded-lg border border-[#d4af37]/20 backdrop-blur-sm z-10"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
        
        <h2 className="mb-8 text-center text-3xl font-serif text-[#d4af37]">My Vow to You</h2>
        
        <div className="font-serif text-lg leading-loose text-[#fdf5e6]/90 whitespace-pre-wrap min-h-[300px]">
          {displayedText}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-0.5 h-5 ml-1 bg-[#d4af37]"
          />
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: startTyping && displayedText.length === letterContent.length ? 1 : 0 }}
            transition={{ duration: 2 }}
            className="mt-8 flex justify-end"
        >
             {/* Signature or Seal could go here */}
             <div className="text-[#d4af37] text-4xl romantic-accent">❤️</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
