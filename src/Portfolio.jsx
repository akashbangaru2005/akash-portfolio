import React, { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowUp,
  Cpu,
  Code2,
  GitFork as Github,
  GraduationCap,
  Layers3,
  Menu,
  X,
  Pause,
  Play,
  Orbit,
  FileText,
  Award,
  Camera as Instagram,
} from "lucide-react";
import CircuitBoardHero from "./components/CircuitBoardHero";
import {
  RESUME_LINK,
  projects,
  skills,
  certificates,
  journey,
} from "./data/portfolio";

const navigation = [
  ["about", "About"],
  ["projects", "Work"],
  ["skills", "Stack"],
  ["experience", "Journey"],
  ["certificates", "Credentials"],
];

function Tilt({ children, className = "", as: Tag = "div", ...props }) {
  const node = useRef(null);
  const move = (event) => {
    if (
      event.pointerType !== "mouse" ||
      document.documentElement.dataset.motion === "off"
    )
      return;
    const bounds = node.current.getBoundingClientRect();
    node.current.style.setProperty(
      "--tilt-x",
      `${((event.clientY - bounds.top) / bounds.height - 0.5) * -7}deg`,
    );
    node.current.style.setProperty(
      "--tilt-y",
      `${((event.clientX - bounds.left) / bounds.width - 0.5) * 9}deg`,
    );
  };
  const reset = () => {
    node.current.style.setProperty("--tilt-x", "0deg");
    node.current.style.setProperty("--tilt-y", "0deg");
  };
  return (
    <Tag
      ref={node}
      className={`tilt ${className}`}
      onPointerMove={move}
      onPointerLeave={reset}
      {...props}
    >
      {children}
    </Tag>
  );
}

function SectionHeading({ number, label, title, accent, children }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> / {label}
        </p>
        <h2>
          {title}
          <br />
          <span>{accent}</span>
        </h2>
      </div>
      {children && <p className="section-intro">{children}</p>}
    </div>
  );
}

function ProjectArt({ index }) {
  return (
    <div className={`project-art art-${index}`} aria-hidden="true">
      <span className="art-grid" />
      {index === 0 && (
        <>
          <div className="planet">
            <span />
          </div>
          <div className="planet-orbit" />
          <span className="star star-one" />
          <span className="star star-two" />
          <span className="art-label">MISSION_01 · EXPLORATION</span>
        </>
      )}
      {index === 1 && (
        <>
          <div className="document-sheet back-sheet" />
          <div className="document-sheet">
            <span className="doc-icon">✳</span>
            <i />
            <i />
            <i />
            <b>Understand more.</b>
          </div>
          <span className="ai-token">AI</span>
        </>
      )}
      {index === 2 && (
        <>
          <div className="weather-sun" />
          <div className="weather-cloud" />
          <div className="weather-panel">
            <span>WEATHER / LIVE</span>
            <strong>24°</strong>
            <span>Clear perspective.</span>
          </div>
        </>
      )}
      {index === 3 && (
        <>
          <div className="map-plane">
            <i />
            <i />
            <i />
          </div>
          <div className="map-pin">
            <span />
          </div>
          <span className="art-label">A SAFER WAY HOME</span>
        </>
      )}
      {index === 4 && (
        <>
          <div className="qr-object">
            {Array.from({ length: 49 }, (_, i) => (
              <i
                key={i}
                className={(i * 13 + (i % 3)) % 5 > 1 ? "filled" : ""}
              />
            ))}
          </div>
          <span className="art-label">SCAN. SHARE. CONNECT.</span>
        </>
      )}
    </div>
  );
}

export default function Portfolio() {
  const menuButton = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [filter, setFilter] = useState("All projects");
  const motion = !paused && !reducedMotion;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.motion = motion ? "on" : "off";
    return () => {
      delete document.documentElement.dataset.motion;
    };
  }, [motion]);

  useEffect(() => {
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const sections = [...document.querySelectorAll("main > section[id]")];
        const current = sections
          .filter(
            (section) =>
              section.getBoundingClientRect().top <= window.innerHeight * 0.4,
          )
          .at(-1);
        setActive(current?.id || "home");
        const progress =
          window.scrollY /
          Math.max(
            1,
            document.documentElement.scrollHeight - window.innerHeight,
          );
        document.documentElement.style.setProperty(
          "--scroll-progress",
          progress,
        );
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);

  const visibleProjects = projects.filter(
    (_, index) =>
      filter === "All projects" ||
      (filter === "Web & apps" ? index > 1 : index < 2),
  );

  return (
    <div className="portfolio">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="scroll-progress" />
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Akash home">
          a<span>k</span>
          <i>✳</i>
        </a>
        <nav
          id="navigation"
          aria-label="Main navigation"
          className={menuOpen ? "navigation is-open" : "navigation"}
        >
          {navigation.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
              <span />
            </a>
          ))}
          <a
            href="#contact"
            className="mobile-contact"
            onClick={() => setMenuOpen(false)}
          >
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </nav>
        <a href="#contact" className="nav-contact">
          Let’s talk <ArrowUpRight size={16} />
        </a>
        <button
          className="menu-toggle"
          ref={menuButton}
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-topline">
            <span className="availability">
              <i /> Open to opportunities
            </span>
            <span className="mono">PORTFOLIO / 2026</span>
          </div>
          <div className="hero-content">
            <p className="eyebrow">HELLO, WORLD. I’M AKASH.</p>
            <h1 id="hero-title">
              A little code.
              <br />A little circuit.
              <br />
              <span>Infinite possibilities.</span>
            </h1>
            <p className="hero-description">
              Exploring the space between hardware and software.
              <br className="desktop-break" /> ECE student. Developer. Always
              building.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowUpRight size={18} />
              </a>
              <a
                className="text-link"
                href={RESUME_LINK}
                target="_blank"
                rel="noreferrer"
              >
                View résumé <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-disciplines">
              <span>
                <Cpu size={15} /> Electronics
              </span>
              <span>
                <Code2 size={15} /> Development
              </span>
              <span>
                <Orbit size={15} /> AI & beyond
              </span>
            </div>
          </div>
          <CircuitBoardHero active={motion} />
          <div className="hero-bottom">
            <a href="#about">
              <span className="scroll-icon">
                <ArrowDown size={16} />
              </span>{" "}
              SCROLL TO EXPLORE
            </a>
            <span>BUILT WITH CURIOSITY. POWERED BY CODE.</span>
            <span className="coordinate">HARDWARE × SOFTWARE</span>
          </div>
        </section>

        <div className="discipline-strip" aria-hidden="true">
          <span>HARDWARE</span>
          <i>✳</i>
          <span>SOFTWARE</span>
          <i>✳</i>
          <span>INTELLIGENCE</span>
          <i>✳</i>
          <span>EXPERIMENTATION</span>
          <i>✳</i>
        </div>

        <section id="about" className="section about-section">
          <SectionHeading
            number="01"
            label="THE PERSON BEHIND THE PROJECTS"
            title="Curiosity is"
            accent="my operating system."
          />
          <div className="about-layout">
            <Tilt className="portrait-card">
              <img src="/assets/profile.jpg" alt="Akash" loading="lazy" />
              <div className="portrait-caption">
                <span>B. AKASH</span>
                <span>
                  ENGINEER IN PROGRESS <i />
                </span>
              </div>
              <span className="portrait-corner">+</span>
            </Tilt>
            <div className="about-copy">
              <span className="small-label">HARDWARE MIND. SOFTWARE SOUL.</span>
              <h3>
                I like figuring out how things work.
                <br />
                Then making them work better.
              </h3>
              <p>
                I’m an Electronics & Communication Engineering student at Anurag
                University, exploring what happens when circuits meet code.
              </p>
              <p>
                From web applications and AI experiments to embedded systems and
                VLSI, I turn ideas into practical projects. Every build is
                another opportunity to learn, question, and connect the dots.
              </p>
              <div className="about-facts">
                <div>
                  <GraduationCap size={21} />
                  <span>
                    B.Tech · ECE<small>Anurag University</small>
                  </span>
                </div>
                <div>
                  <Cpu size={21} />
                  <span>
                    Hardware × software<small>One connected perspective</small>
                  </span>
                </div>
              </div>
              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                A little more about me <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="section work-section">
          <SectionHeading
            number="02"
            label="SELECTED WORK"
            title="Ideas out of my head."
            accent="Into the real world."
          >
            A collection of experiments in software, AI, and everyday
            problem-solving. Built to learn. Made to be used.
          </SectionHeading>
          <div
            className="project-filter"
            role="group"
            aria-label="Filter projects"
          >
            {["All projects", "Web & apps", "AI & experiments"].map((item) => (
              <button
                key={item}
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {item}
                {filter === item && (
                  <span>
                    {visibleProjects.length.toString().padStart(2, "0")}
                  </span>
                )}
              </button>
            ))}
          </div>
          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <Tilt as="article" className="work-card" key={project.number}>
                <a
                  className="project-art-link"
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}
                >
                  <ProjectArt index={projects.indexOf(project)} />
                  <span className="project-open">
                    <ArrowUpRight size={22} />
                  </span>
                </a>
                <div className="work-content">
                  <p className="project-category">
                    <span>
                      {project.number} / {project.category}
                    </span>
                    <span>↗</span>
                  </p>
                  <h3>
                    <a href={project.live} target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                  </h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tech-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
          <a
            className="all-work text-link"
            href="https://github.com/akashbangaru2005"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} /> More experiments on GitHub{" "}
            <ArrowUpRight size={17} />
          </a>
        </section>

        <section id="skills" className="section skills-section">
          <SectionHeading
            number="03"
            label="MY TOOLKIT"
            title="Different tools."
            accent="Connected thinking."
          >
            The languages, frameworks, and engineering tools I use to move from
            “what if” to “it works.”
          </SectionHeading>
          <div className="stack-layout">
            <div className="stack-sculpture" aria-hidden="true">
              <div className="stack-orbit" />
              <div className="stack-platform platform-3">
                <span>BUILD</span>
              </div>
              <div className="stack-platform platform-2">
                <span>EXPLORE</span>
              </div>
              <div className="stack-platform platform-1">
                <Cpu size={64} />
              </div>
              <span className="stack-note">ALWAYS ADDING TO THE STACK.</span>
            </div>
            <div className="skills-grid">
              {skills.map((skill, i) => (
                <Tilt className="skill-tile" key={skill.name}>
                  <span className="skill-symbol">
                    {
                      [
                        "Jv",
                        "Py",
                        "Js",
                        "Re",
                        "Nd",
                        "Sb",
                        "Mg",
                        "Sq",
                        "Mt",
                        "Vr",
                        "Gt",
                        "Ar",
                      ][i]
                    }
                  </span>
                  <div>
                    <h3>{skill.name}</h3>
                    <span>{skill.type}</span>
                  </div>
                  <span
                    className={`skill-state ${skill.level === "Learning" ? "learning" : ""}`}
                    title={skill.level}
                    aria-label={skill.level}
                  />
                </Tilt>
              ))}
            </div>
          </div>
          <p className="stack-legend">
            <i /> Intermediate <i className="learning" /> Currently learning
          </p>
        </section>

        <section id="experience" className="section journey-section">
          <SectionHeading
            number="04"
            label="THE JOURNEY"
            title="Learning by doing."
            accent="One step at a time."
          >
            Classrooms, production floors, hackathons, and everything in
            between.
          </SectionHeading>
          <div className="journey-list">
            {[...journey].reverse().map((item, index) => (
              <article className="journey-item" key={item.id}>
                <div className="journey-date">
                  <span>{item.year}</span>
                  <small>
                    {item.type === "education" ? "EDUCATION" : "EXPERIENCE"}
                  </small>
                </div>
                <div className="journey-node">
                  {item.type === "education" ? (
                    <GraduationCap size={18} />
                  ) : (
                    <Layers3 size={18} />
                  )}
                </div>
                <div className="journey-body">
                  <span className="small-label">{item.organization}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="journey-meta">
                    <span>{item.meta}</span>
                    {item.certificate && (
                      <a
                        href={item.certificate}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Certificate <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
                <span className="journey-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section id="certificates" className="section credentials-section">
          <SectionHeading
            number="05"
            label="MILESTONES ALONG THE WAY"
            title="A few things"
            accent="picked up along the way."
          />
          <div className="credentials-grid">
            {certificates.map((certificate, index) => (
              <a
                className="credential"
                key={certificate.name}
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
              >
                <span className="credential-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Award size={23} />
                <div>
                  <h3>{certificate.name.trim()}</h3>
                  <p>{certificate.organization}</p>
                </div>
                <ArrowUpRight size={19} />
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-orb" aria-hidden="true">
            <div />
            <div />
            <div />
          </div>
          <p className="eyebrow">
            <span>06</span> / WHAT’S NEXT?
          </p>
          <span className="availability">
            <i /> Open to internships & collaborations
          </span>
          <h2>
            Great things start
            <br />
            with a <em>connection.</em>
            <ArrowUpRight className="contact-arrow" />
          </h2>
          <div className="contact-bottom">
            <p>
              Have an idea, an opportunity, or a shared curiosity?
              <br />
              Let’s connect and build something meaningful.
            </p>
            <a
              className="button button-primary"
              href="https://www.instagram.com/akash_bangaru._.05/"
              target="_blank"
              rel="noreferrer"
            >
              Say hello <ArrowUpRight size={19} />
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/akashbangaru2005"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} /> GitHub <ArrowUpRight size={15} />
            </a>
            <a
              href="https://www.instagram.com/akash_bangaru._.05/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={17} /> Instagram <ArrowUpRight size={15} />
            </a>
            <a
              href="https://www.reddit.com/r/Kepler21e/"
              target="_blank"
              rel="noreferrer"
            >
              Reddit · Kepler21e <ArrowUpRight size={15} />
            </a>
            <a href={RESUME_LINK} target="_blank" rel="noreferrer">
              <FileText size={17} /> Résumé <ArrowUpRight size={15} />
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <a href="#home" className="wordmark">
          a<span>k</span>
          <i>✳</i>
        </a>
        <span>© {new Date().getFullYear()} AKASH. BUILT WITH CURIOSITY.</span>
        <a href="#home">
          Back to top <ArrowUp size={16} />
        </a>
      </footer>
      <button
        className="motion-control"
        onClick={() => setPaused(!paused)}
        disabled={reducedMotion}
        aria-pressed={!motion}
        aria-label={
          reducedMotion
            ? "Reduced motion enabled"
            : motion
              ? "Pause animations"
              : "Resume animations"
        }
      >
        {motion ? <Pause size={13} /> : <Play size={13} />}
        <span>
          {reducedMotion
            ? "Motion reduced"
            : motion
              ? "Motion on"
              : "Motion off"}
        </span>
      </button>
    </div>
  );
}
