import {
  Bot,
  Cloud,
  Code2,
  Database,
  Layout,
  Sparkles,
  Users,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const GROUPS = [
  { icon: Code2, title: "Programming", items: ["JavaScript"] },
  { icon: Layout, title: "Web Development", items: ["HTML5", "CSS3", "React", "Node.js"] },
  { icon: Database, title: "Database", items: ["SQL", "DBMS"] },
  {
    icon: Bot,
    title: "Artificial Intelligence",
    items: [
      "Generative AI",
      "Prompt Engineering",
      "AI Chatbot Development",
      "OpenAI API Integration",
    ],
  },
  { icon: Cloud, title: "Cloud & Development Tools", items: ["Git", "VS Code"] },
  {
    icon: Sparkles,
    title: "AI Tools",
    items: ["Claude AI", "ChatGPT", "AI-assisted development workflows"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    items: ["Communication", "Team Collaboration", "Event Organization"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 h-64 bg-primary-soft/70 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Technical Skills"
          title="The stack I build with"
          description="A toolkit spanning modern web engineering, data, and applied Generative AI."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map(({ icon: Icon, title, items }) => (
            <article
              key={title}
              className="reveal group rounded-3xl glass-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground transition-transform group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="truncate text-base font-semibold">{title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
