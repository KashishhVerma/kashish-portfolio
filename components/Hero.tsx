"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Download } from "lucide-react";
import dynamic from "next/dynamic";
import AvatarCard from "./AvatarCard";
import CodingProfiles from "./CodingProfiles";
import Wiggle from "./Wiggle";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

const stack = ["Node.js", "React", "MongoDB", "JavaScript", "Java", "Express", "Tailwind"];

export default function Hero() {
  return (
    <section id="hero" className="relative max-w-[1200px] mx-auto px-6 pt-32 pb-20 overflow-hidden">
      <div className="absolute -top-10 right-0 w-[380px] h-[380px] opacity-70 pointer-events-none hidden lg:block">
        <Hero3D />
      </div>

      <div className="relative grid md:grid-cols-[1.3fr_1fr] gap-14 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-hand text-2xl text-coral mb-2"
          >
            Hi there! 👋
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <Wiggle as="h1" className="font-display font-bold text-[clamp(38px,6vw,58px)] leading-[1.05] mb-5">
              I&apos;m Kashish Verma.
            </Wiggle>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted text-[16px] leading-relaxed max-w-lg mb-7"
          >
            I&apos;m a full-stack developer and 4th-year CS student at NIET,
            Greater Noida — I like turning ideas into clean, working products,
            with a good dose of DSA on the side. Recently wrapped an SDE
            internship at Hexaclimate Solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-teal border-2 border-ink rounded-xl font-medium shadow-brut-sm hover:-translate-y-1 hover:shadow-brut active:translate-y-0 active:bg-yellow transition-all"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-yellow border-2 border-ink rounded-xl font-medium shadow-brut-sm hover:-translate-y-1 hover:shadow-brut active:translate-y-0 active:bg-teal transition-all"
            >
              <Download size={16} /> Resume
            </a>
            <a
              href="https://github.com/KashishhVerma"
              className="w-11 h-11 flex items-center justify-center bg-card border-2 border-ink rounded-xl shadow-brut-sm hover:-translate-y-1 hover:shadow-brut active:translate-y-0 active:bg-coral transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/kashishhverma/"
              className="w-11 h-11 flex items-center justify-center bg-card border-2 border-ink rounded-xl shadow-brut-sm hover:-translate-y-1 hover:shadow-brut active:translate-y-0 active:bg-coral transition-all"
            >
              <Linkedin size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
          >
            <CodingProfiles />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-2.5 mt-7"
          >
            {stack.map((s) => (
              <Wiggle
                key={s}
                as="span"
                className="px-3.5 py-1.5 text-xs font-medium bg-card border-2 border-ink rounded-full shadow-brut-sm"
              >
                {s}
              </Wiggle>
            ))}
          </motion.div>
        </div>

        <AvatarCard />
      </div>
    </section>
  );
}
