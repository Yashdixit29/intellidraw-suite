import { useState } from "react";
import { CheckCircle2, Linkedin, Mail, Phone, Send } from "lucide-react";
import { z } from "zod";
import { SectionHeading } from "./SectionHeading";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  subject: z.string().trim().min(3, "Please add a subject").max(150),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const FIELDS = [
  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
  { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
  { name: "subject", label: "Subject", type: "text", placeholder: "What is this about?" },
] as const;

const DETAILS = [
  {
    icon: Mail,
    label: "Email",
    value: "yashdixit2910@gmail.com",
    href: "mailto:yashdixit2910@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+91-9457642662", href: "tel:+919457642662" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/iamyashdixit",
    href: "https://linkedin.com/in/iamyashdixit",
  },
];

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const next: Errors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      });
      setErrors(next);
      return;
    }
    setErrors({});
    setSent(true);
    setValues({ name: "", email: "", subject: "", message: "" });
  };

  const inputClass =
    "w-full rounded-xl border border-input bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary";

  return (
    <section id="contact" className="relative py-24">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-accent-soft/60 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something intelligent"
          description="Open to internships and entry-level software and AI opportunities."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="reveal space-y-4">
            {DETAILS.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="flex min-w-0 items-center gap-4 rounded-2xl glass-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">{label}</span>
                  <span className="block truncate text-sm font-medium">{value}</span>
                </span>
              </a>
            ))}
          </div>

          <div className="reveal rounded-3xl glass-card p-7 sm:p-9">
            {sent ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-primary" />
                <h3 className="mt-5 text-xl font-semibold">Message ready to send</h3>
                <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                  Thanks for reaching out. Your details are validated — you can also email
                  yashdixit2910@gmail.com directly for a faster reply.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-7 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                {FIELDS.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="mb-2 block text-xs tracking-wide text-muted-foreground"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={values[field.name]}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, [field.name]: e.target.value }))
                      }
                      className={inputClass}
                    />
                    {errors[field.name] && (
                      <p className="mt-2 text-xs text-destructive">{errors[field.name]}</p>
                    )}
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs tracking-wide text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about the role or project..."
                    value={values.message}
                    onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-2 text-xs text-destructive">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01] sm:w-auto"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
