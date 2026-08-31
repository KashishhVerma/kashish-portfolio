"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import Wiggle from "./Wiggle";

const projects = [
  {
    name: "CollabBoard",
    tag: "Real-time Collaborative Whiteboard",
    desc: "Scalable multi-user whiteboard with live cursors, chat and canvas sync. Fixed a WebSocket race condition via a custom history-request event, with multi-provider AI diagram generation and automatic fallback.",
    stack: ["React", "Socket.io", "Node", "MongoDB"],
    color: "bg-yellow",
    link: "https://collaborative-whiteboard-bay.vercel.app/",
  },
    {
    name: "SplitPay",
    tag: "Secure Expense Splitting Platform",
    desc: "Full-stack payment settlement app with multi-person expense splitting, Stripe integration, and JWT authentication. Built a security layer with bcrypt hashing, rate limiting (100 req/15min), audit logging, and idempotency keys to prevent duplicate payments — deployed with PostgreSQL, dark mode, and webhook verification.",
    stack: ["Next.js 14", "TypeScript", "Stripe", "PostgreSQL"],
    color: "bg-mauve",
    link: "https://split-pay-6jrj.onrender.com/",
  },
  {
    name: "AlgoPrep",
    tag: "Interview Preparation Platform",
    desc: "Full-stack MERN platform with JWT + bcrypt auth and role-based routing. Topic-wise DSA dashboard tracking 100+ problems with a streak algorithm built on ISO date logic.",
    stack: ["Redux Toolkit", "Express", "MongoDB"],
    color: "bg-teal",
    link: "https://algoprep-fullstack.vercel.app/",
  },
  {
    name: "WriteFlow",
    tag: "Full-Stack Blog Platform",
    desc: "Feature-rich blog platform with full CRUD and role-based access using Appwrite as BaaS. Global state via Redux paired with React Hook Form validation to cut re-renders.",
    stack: ["React", "Appwrite", "RHF"],
    color: "bg-coral",
    link: "https://github.com/KashishhVerma/appwriteBlog",
  },
];

function TiltCard({ p }: { p: (typeof projects)[number] }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [style, setStyle] = useState({ rotateX: 0, rotateY: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({ rotateX: py * -8, rotateY: px * 8 });
  };
  const reset = () => setStyle({ rotateX: 0, rotateY: 0 });

  return (
    <motion.a
      ref={ref}
      href={p.link}
      onMouseMove={onMove}
      onMouseLeave={reset}
      animate={{ rotateX: style.rotateX, rotateY: style.rotateY }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      style={{ transformStyle: "preserve-3d", perspective: 800 }}
      className="group block border-2 border-ink rounded-2xl bg-card shadow-brut-sm hover:shadow-brut transition-shadow h-full overflow-hidden"
    >
      <div className={`h-2.5 ${p.color} border-b-2 border-ink`} />
      <div className="p-7">
        <div className="font-display font-bold text-xl mb-1"><Wiggle as="h3" className="inline-block">{p.name}</Wiggle></div>
        <div className="text-sm text-coral font-medium mb-3">{p.tag}</div>
        <p className="text-[14px] text-muted leading-relaxed mb-5">{p.desc}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {p.stack.map((s) => (
            <span key={s} className="text-[11px] px-3 py-1 border-2 border-ink rounded-full font-medium">
              {s}
            </span>
          ))}
        </div>
        <div className="inline-flex items-center gap-1.5 text-sm font-medium group-hover:gap-2.5 transition-all">
          View Project <ArrowUpRight size={14} />
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-[1200px] mx-auto px-6 py-14">
      <Reveal className="mb-8">
        <Wiggle as="span" className="inline-block px-4 py-1.5 bg-teal border-2 border-ink rounded-lg font-bold text-sm shadow-brut-sm">
          PROJECTS
        </Wiggle>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <TiltCard p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
