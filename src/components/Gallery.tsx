"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import confetti from "canvas-confetti";

// Generate array of 10 photos
const photos = Array.from({ length: 10 }, (_, i) => ({
  src: `/images/photo${i + 1}.webp`,
  alt: `Our Memory ${i + 1}`,
  id: i + 1,
}));

export default function Gallery() {
  // Duplicate photos for seamless infinite scroll
  const marqueePhotos = [...photos, ...photos];

  const triggerRandomEffect = (x: number, y: number) => {
    const effects = ["hearts", "fireworks", "balloons"];
    const selectedEffect = effects[Math.floor(Math.random() * effects.length)];

    const defaults = { 
        origin: { x: x / window.innerWidth, y: y / window.innerHeight },
        zIndex: 100 
    };

    if (selectedEffect === "hearts") {
        const heartSettings = {
            ...defaults,
            shapes: ["heart"],
            colors: ["#d4af37", "#ff0000", "#ff69b4", "#fdf5e6"],
            scalar: 2,
            drift: 0,
            gravity: 1,
            ticks: 100,
            spread: 60,
            startVelocity: 30,
            particleCount: 20
        };
         // @ts-ignore - canvas-confetti types might not include 'heart' shape explicitly in old versions but it works
        confetti(heartSettings);
    } 
    else if (selectedEffect === "fireworks") {
        confetti({ ...defaults, particleCount: 50, spread: 360, startVelocity: 30, colors: ["#d4af37", "#fdf5e6"] });
        setTimeout(() => confetti({ ...defaults, particleCount: 50, spread: 360, startVelocity: 30, colors: ["#d4af37", "#fdf5e6"] }), 200);
    } 
    else if (selectedEffect === "balloons") {
         // Simulating balloons with slow gravity and circles
        confetti({
            ...defaults,
            shapes: ["circle"],
            colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#d4af37"],
            scalar: 1.5,
            gravity: 0.5,
            drift: 0.5,
            ticks: 200,
            startVelocity: 40,
            spread: 90,
            particleCount: 15
        });
    }
  };

  const handlePhotoClick = (e: React.MouseEvent) => {
      triggerRandomEffect(e.clientX, e.clientY);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] py-24 flex flex-col justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4a0404]/10 via-[#050505] to-[#050505]" />

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-12 text-center text-4xl font-serif text-[#d4af37] md:text-6xl relative z-10"
      >
        Captured Moments
      </motion.h2>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden py-10 z-10">
        <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
                duration: 40, // Adjust speed here (higher = slower)
                ease: "linear",
                repeat: Infinity,
            }}
        >
          {marqueePhotos.map((photo, index) => (
            <div
              key={`${photo.id}-${index}`}
              className="relative w-64 md:w-80 aspect-[3/4] flex-shrink-0 cursor-pointer group"
              onClick={handlePhotoClick}
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg bg-gray-900 border border-[#d4af37]/20 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#d4af37]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                />
                 {/* Hover Hint */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
       <div className="text-center mt-8 text-[#fdf5e6]/40 text-sm tracking-widest uppercase relative z-10">
            Click any photo for a surprise
       </div>
    </section>
  );
}
