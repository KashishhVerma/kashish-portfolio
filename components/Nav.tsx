"use client";

import { useState } from "react";
import { TerminalSquare } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Terminal from "./Terminal";

export default function Nav() {
  const [showTerminal, setShowTerminal] = useState(false);
  const links = ["About", "Experience", "Projects", "Skills", "Contact"];

  return (
    <>
      <nav className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-5 py-3 bg-card border-2 border-ink rounded-xl shadow-brut-sm">
        <div className="w-9 h-9 flex items-center justify-center bg-yellow border-2 border-ink rounded-lg font-hand font-bold text-base">
          KV
        </div>
        <div className="hidden md:flex gap-7 text-sm font-medium">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-coral transition-colors">
              {l}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowTerminal(true)}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium bg-card border-2 border-ink rounded-lg shadow-brut-sm hover:-translate-y-0.5 active:translate-y-0 active:bg-teal transition-all"
          >
            <TerminalSquare size={15} /> Terminal
          </button>
          <ThemeToggle />
          <a
            href="#contact"
            className="px-4 py-1.5 text-sm font-medium bg-teal border-2 border-ink rounded-lg shadow-brut-sm hover:-translate-y-0.5 active:translate-y-0 active:bg-yellow transition-all"
          >
            Get in Touch
          </a>
        </div>
      </nav>
      {showTerminal && <Terminal onClose={() => setShowTerminal(false)} />}
    </>
  );
}
