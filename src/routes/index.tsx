import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import munjidPortrait from "@/assets/munjid-portrait.png";
import {
  Code2,
  Palette,
  Rocket,
  Sparkles,
  Mail,
  Phone,
  ArrowUpRight,
  Globe,
  Layers,
  Smartphone,
  Wrench,
  GraduationCap,
  Github,
  Instagram,
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
const GITHUB_URL = "https://github.com/pmohdmunjidkdy";
const INSTAGRAM_URL = "https://www.instagram.com/p.mohdmunjidkdy1/";

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
        <div className="flex items-center gap-3">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card transition"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card transition"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/918547394227"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card transition"
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>
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
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-bg relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Available for small web projects
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-7xl font-bold leading-[0.95]">
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

            <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
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

          <div className="relative mx-auto lg:mx-0 w-full max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-2xl" />
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-border bg-card shadow-glow">
              <img
                src={munjidPortrait}
                alt="Portrait of Mohammed Munjid P"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
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
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+918547394227"
            className="inline-flex items-center gap-2 font-display text-lg font-semibold text-primary hover:opacity-80 transition"
          >
            <Phone className="h-4 w-4" />
            +91 85473 94227
          </a>
          <a
            href="https://wa.me/918547394227"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm font-semibold hover:bg-card transition"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

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
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground transition"
          >
            <Instagram className="h-4 w-4" />
            Instagram
          </a>
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
        <div className="flex items-center gap-5">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground transition"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={X_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground transition"
          >
            <XIcon className="h-4 w-4" />
            @pmohd_munjid
          </a>
          <a
            href="https://wa.me/918547394227"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground transition"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.134 1.585 5.934L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
