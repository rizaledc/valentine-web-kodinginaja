"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Gift, X, Ticket } from "lucide-react";

const coupons = [
  "Dinner Date of Your Choice 🍝",
  "One Big Warm Hug 🫂",
  "Movie Night Selection 🎬",
  "10-Minute Massage 💆‍♀️",
  "Yes Day (I say Yes to everything) 🌟",
  "Late Night Drive 🚗",
  "Homemade Meal by Me 👨‍🍳",
];

export default function LoveCoupons() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCoupon, setCurrentCoupon] = useState<string | null>(null);

  const openGift = () => {
    setIsOpen(true);
    const randomCoupon = coupons[Math.floor(Math.random() * coupons.length)];
    setCurrentCoupon(randomCoupon);
  };

  const closeGift = () => {
    setIsOpen(false);
    setTimeout(() => setCurrentCoupon(null), 300);
  };

  return (
    <section className="py-24 flex flex-col items-center justify-center bg-[#050505] relative w-full">
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d4af37]/10 via-[#050505] to-[#050505]" />
        
      <motion.div className="z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-[#fdf5e6] mb-8">A Small Gift For You</h2>
        
        <motion.button
          onClick={openGift}
          whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 5, 0] }}
          whileTap={{ scale: 0.95 }}
          className="relative group p-8 inline-flex flex-col items-center"
        >
             {/* Glowing Effect */}
           <div className="absolute inset-0 bg-[#d4af37] opacity-20 blur-3xl rounded-full group-hover:opacity-40 transition-opacity" />
           <Gift className="w-24 h-24 text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
           <p className="mt-4 text-[#d4af37] text-sm tracking-widest uppercase">Click to Unwrap</p>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={closeGift}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="bg-[#fdf5e6] w-full max-w-md p-1 rounded-lg shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
                {/* Coupon Border Style */}
              <div className="border-4 border-dashed border-[#4a0404] p-8 rounded-md flex flex-col items-center text-center bg-[#fffcf5]">
                <button onClick={closeGift} className="absolute top-4 right-4 text-[#4a0404]/50 hover:text-[#4a0404]">
                  <X className="w-6 h-6" />
                </button>

                <div className="mb-4 text-[#d4af37]">
                    <Ticket className="w-12 h-12" />
                </div>

                <h3 className="text-2xl font-serif text-[#4a0404] mb-2 uppercase tracking-wide">Love Coupon</h3>
                <div className="w-full h-px bg-[#4a0404]/20 my-4" />
                
                <p className="text-3xl font-handwriting text-[#050505] py-4 romantic-accent">
                    {currentCoupon}
                </p>
                
                 <div className="w-full h-px bg-[#4a0404]/20 my-4" />
                <p className="text-xs text-[#4a0404]/60 uppercase tracking-widest">Valid Forever • Non-Transferable</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
