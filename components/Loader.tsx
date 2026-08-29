"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const finish = () => setTimeout(() => setLoading(false), 500);
    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
      return () => window.removeEventListener("load", finish);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] bg-cream flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ rotate: -8, scale: 0.8, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="w-20 h-20 rounded-2xl border-4 border-ink bg-yellow shadow-brut flex items-center justify-center font-hand font-bold text-3xl mb-6"
          >
            KV
          </motion.div>
          <div className="w-44 h-3 border-2 border-ink rounded-full overflow-hidden bg-card">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full bg-coral"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
