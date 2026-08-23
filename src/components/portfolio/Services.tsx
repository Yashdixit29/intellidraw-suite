import {
  Bot,
  Layers,
  MessageSquareCode,
  ShoppingBag,
  Terminal,
  Wand2,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const SERVICES = [
  {
    icon: Layers,
    title: "AI Integration",
    body: "Integration of AI capabilities and APIs into modern web applications.",
  },
  {
    icon: Bot,
    title: "AI Chatbot Development",
    body: "Development of AI-powered conversational interfaces and chatbot applications.",
  },
  {
    icon: Wand2,
    title: "Prompt Engineering",
    body: "Design and optimization of prompts for Generative AI and AI-assisted workflows.",
  },
  {
    icon: MessageSquareCode,
    title: "Full-Stack Web Development",
    body: "Responsive front-end interfaces, backend systems, REST APIs, and database-driven applications.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Development",
    body: "Modern e-commerce functionality including authentication, products, carts, orders, APIs, and responsive UI.",
  },
  {
    icon: Terminal,
    title: "AI-Assisted Development",
    body: "Using modern AI tools such as ChatGPT and Claude AI to support software development workflows.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="What I Do"
          title="Where I add technical value"
          description="Areas I actively build in, based on hands-on project work."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="reveal group relative overflow-hidden rounded-3xl glass-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              <Icon className="h-7 w-7 text-primary" />
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
