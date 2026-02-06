"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function FlyingHearts() {
  const [hearts, setHearts] = useState<number[]>([]);

  useEffect(() => {
    // Generate a static array of random numbers for hearts based on screen size
    // to avoid hydration mismatch, we'll just use a fixed count and randomize in render with a seed or useEffect
    // For simplicity with framer-motion, we can map a fixed array and use random durations.
    setHearts(Array.from({ length: 15 }, (_, i) => i));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            y: "100%",
            x: Math.random() * 100 // We can't use random efficiently in SSR without hydration issues, 
                                   // but inside mapping it runs on client after mount if we suppress hydration warning 
                                   // or use formatted randoms. 
                                   // Better approach: use `useEffect` to set random values, or just let it be random on client.
          }}
          animate={{
            opacity: [0, 0.8, 0],
            y: "-100%",
          }}
          transition={{
            duration: Math.random() * 5 + 5, // 5-10s duration
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 0.5,
          }}
          className="absolute bottom-0"
        >
          <Heart 
            className="text-red-500/20 fill-red-500/10" 
            size={Math.random() * 20 + 10} 
          />
        </motion.div>
      ))}
    </div>
  );
}
