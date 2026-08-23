import { Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-[1fr_auto]">
        <div>
          <p className="font-display text-lg font-bold">Yash Dixit</p>
          <p className="mt-1 text-sm text-muted-foreground">AI &amp; Full-Stack Developer</p>
          <p className="mt-4 max-w-sm text-sm text-primary">
            Building intelligent, scalable and user-focused digital experiences.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:items-end">
          <a
            href="https://linkedin.com/in/iamyashdixit"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" /> linkedin.com/in/iamyashdixit
          </a>
          <a
            href="mailto:yashdixit2910@gmail.com"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" /> yashdixit2910@gmail.com
          </a>
          <a
            href="tel:+919457642662"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4" /> +91-9457642662
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-5">
        <p className="border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Yash Dixit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
