import Reveal from "./Reveal";
import Wiggle from "./Wiggle";

export default function About() {
  return (
    <section id="about" className="max-w-[1200px] mx-auto px-6 py-14">
      <Reveal>
        <Wiggle as="span" className="inline-block px-4 py-1.5 bg-yellow border-2 border-ink rounded-lg font-bold text-sm mb-6 shadow-brut-sm">
          ABOUT
        </Wiggle>
        <div className="border-2 border-ink rounded-2xl bg-card p-8 md:p-10 shadow-brut space-y-5 text-[15.5px] leading-relaxed">
          <p>
            I&apos;m a <mark className="bg-yellow px-1.5 rounded text-black/90 font-medium">full-stack developer</mark> at heart —
            a 4th-year B.Tech CSE student at NIET, Greater Noida (CGPA 8.70), who likes turning
            rough ideas into real, working products across{" "}
            <mark className="bg-teal/60 px-1.5 rounded text-black/90 font-medium">internships, personal projects, and hackathons</mark>.
          </p>
          <p>
            Most of my time goes into{" "}
            <mark className="bg-coral/50 px-1.5 rounded text-black/90 font-medium">building scalable applications end-to-end</mark> —
            wiring up REST APIs with Node and Express, crafting clean React interfaces, and
            keeping my{" "}
            <mark className="bg-yellow px-1.5 rounded text-black/90 font-medium">Data Structures & Algorithms</mark> sharp — 500+
            problems solved across LeetCode, Codeforces, and GfG combined.
          </p>
          <p>
            I recently wrapped an SDE internship at{" "}
            <mark className="bg-teal/60 px-1.5 rounded text-black/90 font-medium">Hexaclimate Solutions</mark>, working close to
            production code, API validation, and QA on a large land-management platform. I bring
            a mix of technical depth, quiet persistence, and a genuine love for shipping things
            that actually work.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
