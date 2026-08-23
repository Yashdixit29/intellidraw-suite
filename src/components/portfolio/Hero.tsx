import { ArrowRight, Mail, Sparkles } from "lucide-react";
import portrait from "@/assets/yash-portrait.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-60" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/18 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 right-0 h-72 w-72 rounded-full bg-violet/20 blur-[110px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs tracking-wide text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            MCA (Integrated) Student · Open to internships
          </span>

          <h1 className="mt-6 text-4xl leading-[1.05] font-bold sm:text-6xl">
            Yash Dixit
            <span className="mt-2 block text-gradient">AI &amp; Full-Stack Developer</span>
          </h1>

          <p className="mt-5 font-mono text-sm tracking-wide text-primary">
            RAG Pipeline • AI • Prompt Engineering
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            MCA (Integrated) student with practical experience building full-stack web
            applications and AI-powered solutions, including responsive interfaces, backend
            systems, REST APIs, databases, AI chatbots, and OpenAI API integrations.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3.5 text-sm font-semibold text-primary-foreground glow-ring transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-sm">
          <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-accent opacity-25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] glass-card float-slow">
            <img
              src={portrait}
              alt="Portrait of Yash Dixit — placeholder profile image"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/60 to-transparent p-5">
              <p className="font-display text-sm font-semibold">Yash Dixit</p>
              <p className="text-xs text-muted-foreground">
                Placeholder profile image — replace with a real photo
              </p>
            </div>
          </div>
          <div className="absolute -top-5 -left-5 rounded-2xl glass-card px-4 py-3">
            <p className="font-display text-lg font-bold text-primary">2</p>
            <p className="text-[11px] text-muted-foreground">Full-stack AI projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
