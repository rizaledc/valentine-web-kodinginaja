"use client";

import { useState } from "react";
import OpeningModal from "@/components/OpeningModal";
import MusicPlayer from "@/components/MusicPlayer";
import Hero from "@/components/Hero";
import ReasonWhy from "@/components/ReasonWhy";
import Journey from "@/components/Journey";
import Gallery from "@/components/Gallery";
import Letter from "@/components/Letter";
import Footer from "@/components/Footer";
import BloomingFlowers from "@/components/BloomingFlowers";
import LoveCoupons from "@/components/LoveCoupons";
import ValentineQuestion from "@/components/ValentineQuestion";

export default function Home() {
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  };

  return (
    <main className="relative min-h-screen bg-[#050505]">
      <div className="fixed inset-0 z-0 pointer-events-none">
          <BloomingFlowers />
      </div>
      
      <OpeningModal onOpen={handleStart} />
      <MusicPlayer isPlaying={isStarted} />

      {/* Main Content - only visible/interactive after start, 
          though we render them behind modal they are hidden by it initially 
          or we can conditionally render if we want to save resources, 
          but for entrance animations it might be better to have them mounted 
          or mounted after start. Let's keep them mounted but interaction blocked by modal.
      */}
      {isStarted && (
        <div className="animate-fade-in transition-opacity duration-1000 ease-in opacity-100 relative z-10">
           <Hero />
           <ReasonWhy />
           <Journey />
           <Gallery />
           <LoveCoupons />
           <Letter />
           <ValentineQuestion />
           <Footer />
        </div>
      )}
    </main>
  );
}


