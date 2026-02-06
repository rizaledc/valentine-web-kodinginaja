"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BloomingFlowers() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use scroll progress of the entire page or a large section
  const { scrollYProgress } = useScroll();

  // Draw the path from 0.05 to 1 (always slightly visible)
  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0.05, 1]);
  // Fade in slightly as we scroll
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0.3, 1]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-20 overflow-hidden h-full w-full">
      {/* 
          Left Vine 
          Increased stroke width and added a drop shadow to make it visible against dark bg.
          Removed preserveAspectRatio="none" to prevent distortion, allowing it to flow naturally.
      */}
      <svg className="absolute left-0 top-0 h-full w-[100px] md:w-[200px]" viewBox="0 0 100 800" fill="none">
        <motion.path
          d="M 10 0 Q 60 100 10 200 T 10 400 T 10 600 T 10 800"
          stroke="#d4af37"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          style={{ pathLength, opacity }}
          filter="drop-shadow(0 0 2px #d4af37)"
        />
      </svg>

      {/* Right Vine - Mirrored */}
      <svg className="absolute right-0 top-0 h-full w-[100px] md:w-[200px]" viewBox="0 0 100 800" fill="none" style={{ transform: "scaleX(-1)" }}>
        <motion.path
          d="M 10 0 Q 60 100 10 200 T 10 400 T 10 600 T 10 800"
          stroke="#d4af37"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          style={{ pathLength, opacity }}
          filter="drop-shadow(0 0 2px #d4af37)"
        />
      </svg>
      
      {/* 
         Static deterministic particles to decorate the vines 
         Using fixed positions relative to known path points to simulate leaves/buds
      */}
      {Array.from({ length: 15 }).map((_, i) => {
         // Approximating positions along the 800 unit height
         const top = (i * 6 + 5) + "%"; 
         const left = (i % 2 === 0) ? "10px" : "40px"; // Oscillating slightly
         
         const scale = 0.5 + (i % 3) * 0.2; // Deterministic scale
         
         return (
            <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#d4af37] rounded-full shadow-[0_0_5px_#d4af37]"
                style={{ 
                    top, 
                    left,
                    scale: 0 // Start hidden
                }}
                // Animate appearance based on scroll-like delay effect
                animate={{ 
                    scale: [0, scale, scale], 
                    opacity: [0, 1, 1] 
                }}
                transition={{
                    duration: 1,
                    delay: i * 0.1, // Staggered appearance
                    times: [0, 1, 1]
                }}
            />
         )
      })}
       {/* Right side particles */}
       {Array.from({ length: 15 }).map((_, i) => {
         const top = (i * 6 + 5) + "%"; 
         const right = (i % 2 === 0) ? "10px" : "40px";
         
         const scale = 0.5 + ((i+1) % 3) * 0.2; 
         
         return (
            <motion.div
                key={`r-${i}`}
                className="absolute w-2 h-2 bg-[#d4af37] rounded-full shadow-[0_0_5px_#d4af37]"
                style={{ 
                    top, 
                    right,
                    scale: 0
                }}
                animate={{ 
                    scale: [0, scale, scale], 
                    opacity: [0, 1, 1] 
                }}
                transition={{
                    duration: 1,
                    delay: i * 0.1,
                }}
            />
         )
      })}
    </div>
  );
}
