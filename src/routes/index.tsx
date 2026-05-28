import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Code2,
  Palette,
  Rocket,
  Sparkles,
  Mail,
  ArrowUpRight,
  Globe,
  Layers,
  Smartphone,
  Wrench,
  GraduationCap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohammed Munjid P — Web Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Mohammed Munjid P, an 8th-class student passionate about professional web development. Skills, projects, services & contact.",
      },
      { property: "og:title", content: "Mohammed Munjid P — Web Developer Portfolio" },
      {
        property: "og:description",
        content:
          "8th-class student building professional web experiences. Explore my skills, projects and services.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

const X_URL = "https://x.com/pmohd_munjid";

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-bold tracking-tight text-lg">
          munjid<span className="text-primary">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#skills" className="hover:text-foreground transition">Skills</a>
          <a href="#projects" className="hover:text-foreground transition">Projects</a>
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a
          href={X_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
        >
          Follow on X
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-bg relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Available for small web projects
        </div>
        <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
          Hi, I'm <span className="text-gradient">Mohammed Munjid P</span>.
          <br />I build the web.
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          An 8th-class student with a serious passion for professional web development.
          I design and code clean, modern websites — and I'm just getting started.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold shadow-glow hover:scale-[1.02] transition"
          >
            View my work <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 font-semibold hover:bg-card transition"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-6 max-w-lg">
          {[
            { k: "8th", v: "Class student" },
            { k: "5+", v: "Mini projects" },
            { k: "∞", v: "Curiosity" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{s.k}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    { icon: Code2, title: "HTML & CSS", desc: "Semantic markup, responsive layouts, Flexbox & Grid." },
    { icon: Sparkles, title: "JavaScript", desc: "Interactive UI, DOM, ES6+ fundamentals." },
    { icon: Layers, title: "React", desc: "Component-based UIs with hooks and routing." },
    { icon: Palette, title: "Tailwind CSS", desc: "Utility-first styling with custom design systems." },
    { icon: Smartphone, title: "Responsive Design", desc: "Mobile-first, accessible across devices." },
    { icon: Wrench, title: "Git & Tools", desc: "Version control, VS Code, modern dev workflow." },
  ];
  return (
    <section id="skills" className="py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="What I know" title="Skills & Expertise" />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-card hover:border-primary/50 transition"
            >
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      tag: "Design + Code",
      desc: "A modern, animated portfolio site built with React and Tailwind.",
    },
    {
      title: "School Event Page",
      tag: "Web Page",
      desc: "A landing page for a school event with countdown and registration UI.",
    },
    {
      title: "Mini Notes App",
      tag: "JavaScript",
      desc: "Lightweight note-taking app with localStorage persistence.",
    },
    {
      title: "Quiz Game",
      tag: "Interactive",
      desc: "A topic-based quiz game with scoring and timer.",
    },
  ];
  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Selected work" title="Projects" />
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card hover:shadow-glow hover:-translate-y-1 transition"
            >
              <div className="text-xs text-primary font-mono">0{i + 1} · {p.tag}</div>
              <h3 className="mt-3 font-display text-2xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
              <ArrowUpRight className="absolute top-6 right-6 h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Globe, title: "Website Design", desc: "Clinical Web, Institute Web and services, etc" },
    { icon: Rocket, title: "Portfolio Sites", desc: "Personal & student portfolios with modern design." },
    { icon: GraduationCap, title: "School Projects", desc: "Help with web-based school assignments & demos." },
    { icon: Palette, title: "App building", desc: "Android and ios" },
  ];
  return (
    <section id="services" className="py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="How I can help" title="Services" />
        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex gap-5 rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition"
            >
              <div className="shrink-0 h-12 w-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center">
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeading eyebrow="Let's talk" title="Contact me" center />
        <p className="mt-4 text-muted-foreground">
          Got a project, idea, or just want to say hi? Drop a message or reach me on X.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mt-10 grid gap-4 text-left"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required
              placeholder="Your name"
              className="rounded-xl border border-input bg-card px-4 py-3 outline-none focus:border-primary transition"
            />
            <input
              required
              type="email"
              placeholder="Email address"
              className="rounded-xl border border-input bg-card px-4 py-3 outline-none focus:border-primary transition"
            />
          </div>
          <textarea
            required
            rows={5}
            placeholder="Your message..."
            className="rounded-xl border border-input bg-card px-4 py-3 outline-none focus:border-primary transition resize-none"
          />
          <div className="flex flex-wrap items-center gap-4 justify-between">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold shadow-glow hover:scale-[1.02] transition"
            >
              <Mail className="h-4 w-4" />
              Send message
            </button>
            <a
              href={X_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
            >
              or DM me on X
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          {sent && (
            <p className="text-sm text-primary mt-2">
              Thanks! Your message is ready — I'll wire this up to email soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Mohammed Munjid P.</div>
        <a
          href={X_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 hover:text-foreground transition"
        >
          <XIcon className="h-4 w-4" />
          @pmohd_munjid
        </a>
      </div>
    </footer>
  );
}

function SectionHeading({
  eyebrow,
  title,
  center,
}: {
  eyebrow: string;
  title: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <div className="text-xs uppercase tracking-[0.2em] text-primary font-mono">{eyebrow}</div>
      <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">{title}</h2>
    </div>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2H21l-6.52 7.45L22 22h-6.79l-4.73-6.18L4.8 22H2l7.02-8.02L2 2h6.91l4.28 5.66L18.244 2Zm-1.19 18h1.88L7.04 4H5.04l12.014 16Z" />
    </svg>
  );
}
