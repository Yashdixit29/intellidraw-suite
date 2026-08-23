import { CalendarDays, GraduationCap, MapPin, School, Target } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const INFO = [
  { icon: GraduationCap, label: "Education", value: "MCA (Integrated)" },
  { icon: School, label: "Institution", value: "Noida Institute of Engineering and Technology" },
  { icon: MapPin, label: "Location", value: "Greater Noida, Uttar Pradesh" },
  { icon: CalendarDays, label: "Duration", value: "Sep 2022 – Jun 2027" },
];

const FOCUS = [
  "Web Development",
  "Database Design",
  "AI API Integration",
  "Cloud Technologies",
  "Responsive UI/UX Development",
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering software, powered by Generative AI"
          align="left"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              I'm a motivated MCA (Integrated) student at Noida Institute of Engineering and
              Technology, Greater Noida, pursuing my degree from September 2022 to June 2027,
              with practical experience in full-stack web development and modern software
              engineering practices.
            </p>
            <p>
              My technical focus spans scalable end-to-end applications, responsive front-end
              interfaces, robust backend systems, databases, and AI-powered APIs — building
              software that is reliable in production, not just in a demo.
            </p>
            <p>
              What drives me is the intersection of software engineering and Generative AI:
              using RAG pipelines, prompt engineering and AI chatbots to turn language models
              into practical, everyday applications.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {FOCUS.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-border bg-secondary/40 px-3.5 py-1.5 text-xs text-foreground"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal rounded-3xl glass-card p-6">
            <div className="flex items-center gap-2 text-xs tracking-[0.2em] text-primary uppercase">
              <Target className="h-4 w-4" />
              Quick facts
            </div>
            <ul className="mt-6 space-y-5">
              {INFO.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex min-w-0 items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary/70 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">{label}</span>
                    <span className="block text-sm font-medium text-foreground">{value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
