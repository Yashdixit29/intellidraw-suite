import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useReveal } from "@/hooks/use-reveal";

const TITLE = "Yash Dixit — AI & Full-Stack Developer";
const DESCRIPTION =
  "Portfolio of Yash Dixit, MCA (Integrated) student and AI & full-stack developer building RAG pipelines, AI chatbots, REST APIs and responsive web applications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Yash Dixit",
          jobTitle: "AI & Full-Stack Developer",
          email: "mailto:yashdixit2910@gmail.com",
          telephone: "+91-9457642662",
          sameAs: ["https://linkedin.com/in/iamyashdixit"],
          alumniOf: "Noida Institute of Engineering and Technology",
          knowsAbout: [
            "Generative AI",
            "Prompt Engineering",
            "RAG Pipelines",
            "React",
            "Node.js",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
