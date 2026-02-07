"use client";

import { motion } from "framer-motion";

export default function GoldBalloons() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[5]">
      {/* 2 Balloons on Left, 2 Balloons on Right */}
      {[
        { id: 1, left: "10%", delay: 0, scale: 1 },
        { id: 2, left: "20%", delay: 2, scale: 0.8 },
        { id: 3, left: "80%", delay: 1, scale: 0.9 },
        { id: 4, left: "90%", delay: 3, scale: 1.1 },
      ].map((balloon) => (
        <motion.div
          key={balloon.id}
          initial={{ y: "120vh", opacity: 0 }}
          animate={{ 
            y: "-120vh", 
            opacity: [0, 0.7, 0.7, 0, 0] // Fade in, stay visible (max 0.7), fade out smoothly
          }}
          transition={{
            duration: 15, // Slow float
            delay: balloon.delay,
            ease: "linear",
            repeat: Infinity,
            times: [0, 0.1, 0.75, 1] // Visible until 75% (11.25s), then fade out over ~3.75s
          }}
          style={{
            left: balloon.left,
            scale: balloon.scale,
          }}
          className="absolute bottom-0"
        >
          {/* Balloon Shape */}
          <div className="relative">
             <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_10px_20px_rgba(212,175,55,0.3)]">
                {/* Balloon Body */}
                <path d="M30 0C13.4315 0 0 16.1178 0 36C0 55.8822 13.4315 72 30 72C46.5685 72 60 55.8822 60 36C60 16.1178 46.5685 0 30 0Z" fill="url(#goldGradient)" />
                {/* Highlight */}
                <ellipse cx="18" cy="18" rx="8" ry="12" fill="white" fillOpacity="0.3" transform="rotate(-30 18 18)"/>
                {/* String */}
                <path d="M30 72L30 120" stroke="#fdf5e6" strokeWidth="1" strokeOpacity="0.6"/>
                
                <defs>
                    <radialGradient id="goldGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 20) rotate(51.3402) scale(64.0312)">
                        <stop stopColor="#FDF5E6"/>
                        <stop offset="0.432292" stopColor="#D4AF37"/>
                        <stop offset="1" stopColor="#996515"/>
                    </radialGradient>
                </defs>
             </svg>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
