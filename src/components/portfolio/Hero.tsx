import { ArrowRight, Mail, Sparkles } from "lucide-react";
import portraitAsset from "@/assets/yash-portrait.png.asset.json";

const portrait = portraitAsset.url;

export function Hero() {
  return (
    <section id="home" className="px-4 pt-24 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-primary px-6 py-16 sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-40" />
        <span className="pointer-events-none absolute top-14 right-28 hidden h-44 w-44 rounded-full bg-accent lg:block" />
        <span className="pointer-events-none absolute -right-16 -bottom-10 hidden h-64 w-64 rounded-full bg-accent lg:block" />
        <span className="pointer-events-none absolute top-8 left-1/2 hidden h-3 w-3 rounded-full bg-accent lg:block" />

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs text-primary-foreground">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              MCA (Integrated) Student · Open to internships
            </span>

            <h1 className="mt-6 text-4xl leading-[1.12] text-primary-foreground sm:text-5xl">
              Hello, I'm Yash Dixit An
              <span className="mt-1 block text-accent">AI &amp; Full-Stack Developer</span>
            </h1>

            <p className="mt-4 font-mono text-sm tracking-wide text-primary-foreground/80">
              RAG Pipeline • AI • Prompt Engineering
            </p>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
              MCA (Integrated) student with practical experience building full-stack web
              applications and AI-powered solutions, including responsive interfaces, backend
              systems, REST APIs, databases, AI chatbots, and OpenAI API integrations.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </div>
          </div>

          <div className="reveal relative mx-auto w-full max-w-sm">
            <span className="pointer-events-none absolute -top-6 -left-8 h-32 w-32 rounded-full bg-accent" />
            <div className="relative overflow-hidden rounded-[2rem] border border-primary-foreground/20 bg-primary-foreground/10 float-slow">
              <img
                src={portrait}
                alt="Portrait of Yash Dixit"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-4 rounded-2xl bg-background px-4 py-3 shadow-[var(--shadow-lift)]">
              <p className="font-display text-lg text-primary">2</p>
              <p className="text-[11px] text-muted-foreground">Full-stack AI projects</p>
            </div>
            <div className="absolute top-6 -right-3 rounded-2xl bg-background px-4 py-2.5 shadow-[var(--shadow-lift)]">
              <p className="text-xs font-semibold text-foreground">AI &amp; Full-Stack</p>
              <p className="text-[11px] text-muted-foreground">Open to internships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
