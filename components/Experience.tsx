import { MapPin } from "lucide-react";
import Reveal from "./Reveal";
import Wiggle from "./Wiggle";

const milestones = [
  {
    year: "2023",
    title: "Started B.Tech CSE",
    sub: "NIET, Greater Noida",
    desc: "Began Computer Science journey — currently at CGPA 8.70, diving deep into DSA, OOP, DBMS and Operating Systems.",
    color: "bg-yellow",
  },
  {
    year: "2024–26",
    title: "500+ DSA Problems",
    sub: "LeetCode , GeeksforGeeks & Codeforces",
    desc: "Consistent daily practice in Java across Arrays, Trees, Graphs and Dynamic Programming.",
    color: "bg-teal",
  },
  {
    year: "Feb–Apr 2026",
    title: "SDE Intern",
    sub: "Hexaclimate Solutions, Gurugram",
    desc: "Authored 22-page technical docs for a Land Management System, validated APIs via Postman, and drove QA across 4+ core modules.",
    color: "bg-coral",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-[1200px] mx-auto px-6 py-14">
      <Reveal>
        <div className="border-2 border-ink rounded-2xl bg-card shadow-brut p-8 md:p-10 relative overflow-hidden">
          {/* decorative route path in the background — swap for a real map screenshot here if you want */}
          <svg
            className="absolute right-0 top-0 h-full w-1/2 opacity-[0.12] pointer-events-none hidden md:block"
            viewBox="0 0 300 400"
            fill="none"
          >
            <path
              d="M40 380 C 90 320, 60 260, 110 220 S 200 140, 170 90 S 230 40, 260 20"
              stroke="#f7eef2"
              strokeWidth="3"
              strokeDasharray="2 12"
              strokeLinecap="round"
            />
            <circle cx="260" cy="20" r="6" fill="#ff4f9c" />
          </svg>

          <div className="flex items-center gap-2 justify-center mb-10">
            <Wiggle as="h2" className="font-display text-3xl">My Journey</Wiggle>
            <span className="inline-flex items-center gap-1 text-xs font-medium bg-yellow text-black/90 border-2 border-ink rounded-full px-2.5 py-1">
              <MapPin size={12} /> India
            </span>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-[7px] top-2 bottom-2 w-[3px] border-l-[3px] border-dashed border-ink/40" />
            {milestones.map((m) => (
              <div key={m.title} className="relative mb-9 last:mb-0">
                <div
                  className={`absolute -left-8 top-1 w-4 h-4 rounded-full border-2 border-ink ${m.color}`}
                />
                <div className="font-hand text-coral text-lg mb-0.5">{m.year}</div>
                <div className="font-display text-2xl">{m.title}</div>
                <div className="text-sm text-muted mb-1.5">{m.sub}</div>
                <p className="text-[14.5px] leading-relaxed text-ink/80">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
