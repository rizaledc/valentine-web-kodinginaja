"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    id: 1,
    title: "Your Smile",
    description: "It lights up my darkest days and makes everything feel okay.",
  },
  {
    id: 2,
    title: "Your Kindness",
    description: "The way you care for others inspires me to be a better person.",
  },
  {
    id: 3,
    title: "Our Memories",
    description: "Every moment spent with you is a treasure I keep safe in my heart.",
  },
];

export default function ReasonWhy() {
  return (
    <section className="relative min-h-screen w-full bg-[#050505] py-24 px-6 md:px-12 flex flex-col items-center">
        {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-20 text-center text-4xl font-serif text-[#d4af37] md:text-6xl"
      >
        Why I Love You
      </motion.h2>

      <div className="grid gap-12 md:grid-cols-3 max-w-6xl w-full">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative flex flex-col items-center justify-center p-8 text-center"
          >
             {/* Card Background gradient border/glow */}
            <div className="absolute inset-0 rounded-2xl border border-[#d4af37]/20 bg-[#4a0404]/5 transition-all duration-500 group-hover:border-[#d4af37]/50 group-hover:bg-[#4a0404]/10 group-hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.15)]" />
            
            <h3 className="mb-4 text-2xl font-serif text-[#fdf5e6] group-hover:text-[#d4af37] transition-colors">
              {reason.title}
            </h3>
            <p className="font-light leading-relaxed text-[#fdf5e6]/70">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
