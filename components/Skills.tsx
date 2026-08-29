import {
  Coffee,
  Braces,
  Database,
  Atom,
  Layers,
  Wind,
  Zap,
  Server,
  Route,
  Share2,
  KeyRound,
  GitBranch,
  CircleEllipsis,
  Send,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import Wiggle from "./Wiggle";

type Skill = { name: string; icon: LucideIcon };

const groups: { title: string; color: string; items: Skill[] }[] = [
  {
    title: "Languages",
    color: "bg-yellow",
    items: [
      { name: "Java", icon: Coffee },
      { name: "JavaScript", icon: Braces },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "Frontend",
    color: "bg-teal",
    items: [
      { name: "React.js", icon: Atom },
      { name: "Redux Toolkit", icon: Layers },
      { name: "Tailwind CSS", icon: Wind },
      { name: "Vite", icon: Zap },
    ],
  },
  {
    title: "Backend",
    color: "bg-coral",
    items: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Route },
      { name: "Socket.io", icon: Share2 },
      { name: "JWT Auth", icon: KeyRound },
    ],
  },
  {
    title: "Tools & DB",
    color: "bg-yellow",
    items: [
      { name: "MongoDB", icon: Database },
      { name: "Appwrite", icon: Server },
      { name: "Git / GitHub", icon: GitBranch },
      { name: "Postman", icon: Send },
      { name:  "Linear", icon: CircleEllipsis}
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-[1200px] mx-auto px-6 py-14">
      <Reveal className="mb-8">
        <Wiggle as="span" className="inline-block px-4 py-1.5 bg-coral border-2 border-ink rounded-lg font-bold text-sm shadow-brut-sm">
          SKILLS
        </Wiggle>
      </Reveal>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.08}>
            <div className="border-2 border-ink rounded-2xl bg-card shadow-brut-sm p-6 h-full">
              <div className={`inline-block px-3 py-1 rounded-md text-xs font-bold border-2 border-ink mb-4 ${g.color}`}>
                {g.title}
              </div>
              <ul className="space-y-3">
                {g.items.map((it) => (
                  <li key={it.name} className="flex items-center gap-2.5 text-[14px]">
                    <it.icon size={16} />
                    {it.name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
