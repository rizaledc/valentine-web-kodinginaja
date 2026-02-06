"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Disc } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
}

export default function MusicPlayer({ isPlaying }: MusicPlayerProps) {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.error("Audio playback failed:", err);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/background.mp3"
        loop
        preload="auto"
      />

      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <button
              onClick={toggleMute}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/30 bg-black/60 text-[#d4af37] backdrop-blur-md transition-all hover:scale-110 hover:border-[#d4af37] hover:bg-[#d4af37]/10"
              aria-label={isMuted ? "Unmute music" : "Mute music"}
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5" />
              ) : (
                <div className="relative flex items-center justify-center">
                   {/* Spinning Vinyl Effect */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Disc className="h-6 w-6" />
                  </motion.div>
                  {/* Floating Music Note or Waves can be added here */}
                </div>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
