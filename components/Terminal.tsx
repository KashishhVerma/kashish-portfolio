"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const HELP = `Available commands:
  help        show this list
  about       who am I
  skills      tech stack
  experience  work history
  education   my degree
  projects    things I've built
  leetcode    today's DSA challenge
  contact     how to reach me
  clear       clear the screen`;

const RESPONSES: Record<string, string> = {
  help: HELP,
  about:
    "Kashish Verma — 4th-year CSE student at NIET, Greater Noida (CGPA 8.70).\nFull-stack MERN developer, 450+ DSA problems solved in Java.",
  skills:
    "Languages: Java, JavaScript, SQL\nFrontend: React.js, Redux Toolkit, Tailwind CSS, Vite\nBackend: Node.js, Express.js, Socket.io, JWT\nDB: MongoDB, Appwrite",
  experience:
    "SDE Intern @ Hexaclimate Solutions (Feb–Apr 2026)\n→ Docs, API validation, QA across Tracker/GIS/Dashboard modules.",
  education: "B.Tech CSE, NIET, Greater Noida (2023–Present) — CGPA 8.70",
  projects:
    "1. CollabBoard — real-time collaborative whiteboard\n2. AlgoPrep — DSA interview-prep platform\n3. WriteFlow — full-stack blog platform\ntype a project name for more (e.g. 'collabboard')",
  collabboard:
    "CollabBoard: real-time whiteboard, live cursors, chat, canvas sync.\nStack: React, Socket.io, Node, MongoDB.",
  algoprep:
    "AlgoPrep: JWT-auth MERN platform with a topic-wise DSA tracker\nand a streak algorithm using ISO date logic.",
  writeflow:
    "WriteFlow: full-stack blog with CRUD + RBAC, Appwrite as BaaS,\nRedux + React Hook Form for state & validation.",
  contact: "Email: kashishverma2304@gmail.com — scroll to Contact section for socials.",
  leetcode:
    "Today's LeetCode Daily Challenge →\nhttps://leetcode.com/problemset/ (opens the daily problem page)\nType 'leetcode open' to go there now.",
};

export default function Terminal({ onClose }: { onClose: () => void }) {
  const [lines, setLines] = useState<string[]>([
    "kashish@portfolio ~ % welcome. type 'help' to see available commands.",
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    const newLines = [...lines, `kashish@portfolio ~ % ${raw}`];

    if (cmd === "clear") {
      setLines(["kashish@portfolio ~ % welcome. type 'help' to see available commands."]);
      setInput("");
      return;
    }
    if (cmd === "leetcode open") {
      window.open("https://leetcode.com/problemset/", "_blank");
      newLines.push("opening leetcode.com/problemset in a new tab...");
    } else if (RESPONSES[cmd]) {
      newLines.push(RESPONSES[cmd]);
    } else {
      newLines.push(`command not found: ${cmd} — type 'help'`);
    }
    setLines(newLines);
    setInput("");
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9998] bg-black/70 flex items-center justify-center p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-2xl h-[70vh] bg-[#0c0c0f] border-2 border-ink rounded-xl shadow-brut-lg overflow-hidden flex flex-col font-mono text-sm"
        >
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#17171c] border-b border-white/10">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-white/50 text-xs">kashish@portfolio: ~/resume</span>
            <button onClick={onClose} className="text-white/50 hover:text-white">
              <X size={16} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 text-[#7fffb0] whitespace-pre-wrap leading-relaxed">
            {lines.map((l, i) => (
              <div key={i} className={l.startsWith("kashish@portfolio ~ %") ? "text-white" : ""}>
                {l}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 px-4 py-3 border-t border-white/10 text-white">
            <span className="text-[#7fffb0]">➜</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && run(input)}
              className="flex-1 bg-transparent outline-none"
              placeholder="type a command..."
              autoFocus
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
