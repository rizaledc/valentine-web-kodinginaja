"use client";

import { motion } from "framer-motion";
import FlyingHearts from "@/components/FlyingHearts";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] py-8 border-t border-[#d4af37]/10 text-center relative overflow-hidden">
      <FlyingHearts />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center gap-2 relative z-10"
      >
        <p className="text-[#fdf5e6]/60 font-light text-sm tracking-widest">
            Made with <span className="text-red-500 animate-pulse">❤️</span> by [Your Name]
        </p>
        <p className="text-[#d4af37]/40 text-xs uppercase tracking-[0.2em]">
            Valentine's Day 2026
        </p>
      </motion.div>
    </footer>
  );
}
