"use client";

import { motion } from "framer-motion";

export default function AvatarCard() {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -4, y: 20 }}
      animate={{ opacity: 1, rotate: -2, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: "backOut" }}
      className="relative w-full max-w-[320px] mx-auto"
    >
      <div className="relative border-4 border-ink rounded-2xl bg-[#ff8fc0] shadow-brut-lg overflow-hidden aspect-square">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <rect width="300" height="300" fill="#ff8fc0" />
          {/* hair back */}
          <path
            d="M78 250 Q68 130 100 90 Q130 50 150 50 Q170 50 200 90 Q232 130 222 250 Q222 190 200 175 Q205 130 150 125 Q95 130 100 175 Q78 190 78 250 Z"
            fill="#3b2a2f"
          />
          {/* face */}
          <circle cx="150" cy="150" r="66" fill="#ffd9b3" stroke="#141212" strokeWidth="4" />
          {/* hair front / fringe */}
          <path
            d="M86 128 Q95 82 150 78 Q205 82 214 128 Q195 100 150 100 Q105 100 86 128 Z"
            fill="#3b2a2f"
          />
          {/* two side buns */}
          <circle cx="82" cy="108" r="18" fill="#3b2a2f" />
          <circle cx="218" cy="108" r="18" fill="#3b2a2f" />
          {/* blush */}
          <circle cx="115" cy="168" r="9" fill="#ff6f9c" opacity="0.5" />
          <circle cx="185" cy="168" r="9" fill="#ff6f9c" opacity="0.5" />
          {/* eyes */}
          <circle cx="126" cy="152" r="5" fill="#141212" />
          <circle cx="174" cy="152" r="5" fill="#141212" />
          {/* eyelashes */}
          <path d="M118 144 L122 148" stroke="#141212" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M182 144 L178 148" stroke="#141212" strokeWidth="2.5" strokeLinecap="round" />
          {/* smile */}
          <path d="M132 182 Q150 196 168 182" fill="none" stroke="#141212" strokeWidth="4" strokeLinecap="round" />
          {/* top / hoodie */}
          <path d="M64 300 Q84 224 150 224 Q216 224 236 300 Z" fill="#c94fb0" />
          <circle cx="150" cy="236" r="10" fill="#ffd9b3" opacity="0" />
        </svg>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center bg-yellow border-2 border-ink rounded-lg shadow-brut-sm font-mono text-sm font-bold"
        >
          {"</>"}
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute bottom-16 left-3 w-10 h-10 flex items-center justify-center bg-teal border-2 border-ink rounded-lg shadow-brut-sm font-mono text-sm font-bold text-ink"
        >
          {">_"}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.4, ease: "backOut" }}
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-ink text-cream text-xs font-medium rounded-full border-2 border-ink whitespace-nowrap"
      >
        Full-Stack Builder
      </motion.div>
    </motion.div>
  );
}
