import { Award, GraduationCap, Languages } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const COURSEWORK = [
  "Modern Web Development",
  "Database Design",
  "AI API Integration",
  "Cloud Technologies",
  "Responsive UI/UX Development",
];

const CERTS = [
  {
    title: "Work Smarter with Microsoft Excel",
    issuer: "Microsoft | Coursera",
    date: "May 2023",
  },
  {
    title: "SEO Analytics Strategies - Content Marketing Tools",
    issuer: "Infosys Springboard",
    date: "Feb 2026",
  },
  { title: "Data Analytics with Generative AI", issuer: "Simplilearn", date: "Jan 2026" },
  {
    title: "Software Project Management Training (PMP)",
    issuer: "Infosys Springboard",
    date: "Feb 2026",
  },
];

export function Education() {
  return (
    <>
      <section id="education" className="relative py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="Education" title="Academic background" align="left" />

          <div className="mt-12 border-l border-border pl-6 sm:pl-10">
            <div className="reveal relative rounded-3xl glass-card p-7">
              <span className="absolute top-9 -left-[1.9rem] grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-primary-foreground sm:-left-[3.15rem]">
                <GraduationCap className="h-5 w-5" />
              </span>
              <p className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
                Sep 2022 – Jun 2027
              </p>
              <h3 className="mt-3 text-xl font-bold sm:text-2xl">
                MCA (Integrated) — Master of Computer Applications
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Noida Institute of Engineering and Technology (NIET) · Greater Noida, Uttar
                Pradesh
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {COURSEWORK.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs text-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="relative py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="Certifications"
            title="Continuous learning"
            description="Coursework and certifications across Generative AI, analytics and project management."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {CERTS.map((cert) => (
              <article
                key={cert.title}
                className="reveal flex min-w-0 gap-4 rounded-3xl glass-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                  <Award className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base leading-snug font-semibold">{cert.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="mt-1 font-mono text-xs text-primary">{cert.date}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 reveal rounded-3xl glass-card p-7">
            <div className="flex items-center gap-2 text-xs tracking-[0.2em] text-primary uppercase">
              <Languages className="h-4 w-4" />
              Languages
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {["English", "Hindi"].map((lang) => (
                <span
                  key={lang}
                  className="rounded-2xl border border-border bg-secondary px-6 py-3 text-sm font-medium"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
