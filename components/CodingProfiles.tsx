"use client";

import { Code2, Trophy, Swords } from "lucide-react";
import { motion } from "framer-motion";
import Wiggle from "./Wiggle";

const profiles = [
  { label: "LeetCode", href: "https://leetcode.com/u/KashishhVerma/", icon: Code2,  color: "bg-yellow" },
  { label: "Codeforces", href: "https://codeforces.com/profile/Kashishh_Verma", icon: Swords, color: "bg-coral" },
  { label: "GeeksforGeeks", stat: "https://www.geeksforgeeks.org/profile/kashishhverma", icon: Trophy, href: "https://www.geeksforgeeks.org/profile/kashishhverma", color: "bg-teal" },
];

export default function CodingProfiles() {
  return (
    <div>
      <div className="flex flex-wrap gap-3 mt-2">
        {profiles.map((p, i) => (
          <motion.a
            key={p.label}
            href={p.href}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + i * 0.1 }}
            className="group flex items-center gap-2.5 px-4 py-2.5 bg-card border-2 border-ink rounded-xl shadow-brut-sm hover:-translate-y-1 active:translate-y-0 active:bg-coral transition-all"
          >
            <span className={`w-7 h-7 flex items-center justify-center rounded-md border-2 border-ink ${p.color}`}>
              <p.icon size={13} className="text-black" />
            </span>
            <Wiggle as="span" className="text-sm font-medium">{p.label}</Wiggle>
          </motion.a>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="font-hand text-lg text-coral mt-3"
      >
        500+ problems solved across all three platforms combined ✎
      </motion.p>
    </div>
  );
}
