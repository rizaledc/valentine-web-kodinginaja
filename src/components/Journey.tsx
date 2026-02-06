"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Heart, Calendar, Clock } from "lucide-react";

export default function Journey() {
  const [timeTogether, setTimeTogether] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const startDate = new Date("2025-09-30T00:00:00+07:00"); // 30 Sept 2025 WIB

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeTogether({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timelineEvents = [
    {
      date: "18 February 2025",
      title: "The First Meeting",
      description: "The day our paths crossed and destiny began its work.",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      date: "20 June 2025",
      title: "Falling in Love",
      description: "When I realized you were the one I had been waiting for.",
      icon: <Heart className="w-5 h-5" />
    },
    {
      date: "30 September 2025",
      title: "Officially Us",
      description: "The beginning of our beautiful chapter together.",
      icon: <Clock className="w-5 h-5" />
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#050505] py-24 px-4 flex flex-col items-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#4a0404]/20 via-[#050505] to-[#050505]" />

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-serif text-[#d4af37] mb-16 relative z-10 text-center"
      >
        Our Love Story
      </motion.h2>

      {/* Timeline Section */}
      <div className="relative z-10 max-w-4xl w-full mb-24">
        <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-[#d4af37]/20 transform -translate-x-1/2" />
        
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center mb-12 relative ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className={`w-full md:w-1/2 p-4 ${index % 2 === 0 ? "md:text-left text-left pl-12 md:pl-4" : "md:text-right text-left pl-12 md:pr-4"}`}>
              <div className="bg-[#1a1a1a]/50 p-6 rounded-xl border border-[#d4af37]/10 hover:border-[#d4af37]/30 transition-colors backdrop-blur-sm">
                <span className="text-[#d4af37] text-sm tracking-widest uppercase font-semibold block mb-2">
                  {event.date}
                </span>
                <h3 className="text-xl text-[#fdf5e6] font-serif mb-2">{event.title}</h3>
                <p className="text-[#fdf5e6]/60 font-light text-sm">{event.description}</p>
              </div>
            </div>

            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#050505] border border-[#d4af37] text-[#d4af37] z-20">
              {event.icon}
            </div>

            <div className="w-full md:w-1/2" />
          </motion.div>
        ))}
      </div>

      {/* Live Counter Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-4xl bg-[#4a0404]/10 rounded-3xl p-8 md:p-12 border border-[#d4af37]/20 backdrop-blur-md text-center"
      >
        <h3 className="text-2xl md:text-3xl font-serif text-[#fdf5e6] mb-8">
          Time Since We Said "Yes"
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Days", value: timeTogether.days },
            { label: "Hours", value: timeTogether.hours },
            { label: "Minutes", value: timeTogether.minutes },
            { label: "Seconds", value: timeTogether.seconds }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-light text-[#d4af37] font-mono">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-xs md:text-sm uppercase tracking-widest text-[#fdf5e6]/50 mt-2">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        
        <p className="mt-8 text-[#fdf5e6]/60 text-sm italic">
          ...and counting every beautiful second.
        </p>
      </motion.div>
    </section>
  );
}
