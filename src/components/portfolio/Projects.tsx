import { ArrowUpRight, Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import curiosity from "@/assets/project-curiosity.jpg";
import nior from "@/assets/project-nior.jpg";

const PROJECTS = [
  {
    name: "Curiosity AI",
    year: "2026",
    category: "Full-Stack Web Development / AI Chatbot",
    image: curiosity,
    description:
      "An independently engineered, AI-powered web application built end to end — from a responsive conversational interface to the backend services, database layer and production deployment behind it.",
    tech: ["React", "Node.js", "REST APIs", "SQL", "OpenAI API", "Prompt Engineering"],
    features: [
      "Responsive user interface with a focus on user experience",
      "Client-server communication through backend APIs",
      "Database management and considered system design",
      "Built for scalability and reliability",
      "Deployment and production-level AI integration",
    ],
  },
  {
    name: "Nior",
    year: "2024",
    category: "AI-Integrated E-Commerce Web Platform / Clothing Brand",
    image: nior,
    description:
      "A modern, product-focused e-commerce platform for a clothing brand, covering the full shopping journey with an elegant responsive storefront and an optimized backend.",
    tech: ["React", "Node.js", "REST APIs", "SQL", "Authentication"],
    features: [
      "Product management and user authentication",
      "Shopping cart functionality and order processing",
      "Responsive UI/UX with fast performance",
      "REST APIs and database optimization",
      "Secure transactions and reliable client-server communication",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-primary/8 blur-[130px]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Projects"
          title="Academic & project experience"
          description="Independently developed full-stack applications — full-stack implementation, AI integration, backend APIs, databases and deployment."
        />

        <div className="mt-14 space-y-8">
          {PROJECTS.map((project, i) => (
            <article
              key={project.name}
              className="reveal group grid gap-0 overflow-hidden rounded-[2rem] glass-card transition-all duration-300 hover:border-primary/40 lg:grid-cols-2"
            >
              <div
                className={`relative overflow-hidden bg-secondary/40 ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <img
                  src={project.image}
                  alt={`${project.name} project mockup placeholder`}
                  loading="lazy"
                  width={1280}
                  height={864}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute top-4 left-4 rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-[11px] tracking-wide backdrop-blur">
                  {project.year}
                </span>
              </div>

              <div className="p-7 sm:p-9">
                <p className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
                  {project.category}
                </p>
                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{project.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-border bg-secondary/40 px-3 py-1.5 font-mono text-xs text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-accent px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  View Project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
