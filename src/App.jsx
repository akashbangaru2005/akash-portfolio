import React, { useEffect, useState } from "react";
import "./App.css";
import "./ProjectsAndHeroFix.css";
import CodeMatrixBackground from "./components/CodeMatrixBackground";
/* =========================================================
   RESUME LINK
   ========================================================= */

const RESUME_LINK =
  "https://drive.google.com/file/d/1k4tDIZDIJ9xObbEmtlkX_JVE-wjh43HX/view?usp=sharing";

/* =========================================================
   DATA
   ========================================================= */

const projects = [
  {
    number: "01",
    category: "GAME DEVELOPMENT",
    title: "Space Battle Game",
    description:
      "An interactive space battle game featuring real-time gameplay, futuristic visuals and responsive controls designed for an engaging browser experience.",
    technologies: ["JavaScript", "HTML", "CSS", "Web Game"],
    live: "https://space-battle-game-d0453.web.app/",
    github: null,
  },

  {
    number: "02",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "AI Document Explainer",
    description:
      "An AI-powered application that helps users understand and interact with documents through intelligent analysis and simplified explanations.",
    technologies: ["Python", "AI", "Streamlit", "NLP"],
    live: "https://aidocumentexplainer-lsysaslxlkak3hvqcjzbq5.streamlit.app/",
    github: null,
  },

  {
    number: "03",
    category: "WEATHER / FULL STACK",
    title: "Weather Information App",
    description:
      "A modern weather application providing weather conditions, temperature, humidity, wind speed and other environmental information through a responsive interface.",
    technologies: ["React", "Spring Boot", "MySQL", "API"],
    live: "https://weather-information-app-six.vercel.app/",
    github: null,
  },

  {
    number: "04",
    category: "SAFETY / WEB APPLICATION",
    title: "SafeWalk Portal",
    description:
      "A mobile-friendly safety portal designed for user authentication, administrator access and location-based safety functionality.",
    technologies: ["React", "Spring Boot", "MySQL", "Maps"],
    live: "https://safe-walk-portal.vercel.app/",
    github: null,
  },

  {
    number: "05",
    category: "UTILITY / WEB APPLICATION",
    title: "QR File Generator",
    description:
      "A web application that generates QR codes for files and digital content, making it easy to share information through a simple QR-based interface.",
    technologies: ["Flask", "Python", "QR", "Web"],
    live: "https://qr-file-generator.onrender.com/",
    github: null,
  },
];
/* =========================================================
   SKILLS
   ========================================================= */

const skills = [
  {
    name: "Java",
    level: "Intermediate",
    type: "Programming",
  },

  {
    name: "Python",
    level: "Intermediate",
    type: "Programming",
  },

  {
    name: "JavaScript",
    level: "Intermediate",
    type: "Web",
  },

  {
    name: "React",
    level: "Intermediate",
    type: "Frontend",
  },

  {
    name: "Node.js",
    level: "Intermediate",
    type: "Backend",
  },

  {
    name: "Spring Boot",
    level: "Learning",
    type: "Backend",
  },

  {
    name: "MongoDB",
    level: "Intermediate",
    type: "Database",
  },

  {
    name: "MySQL",
    level: "Intermediate",
    type: "Database",
  },

  {
    name: "MATLAB",
    level: "Intermediate",
    type: "Engineering",
  },

  {
    name: "Verilog",
    level: "Learning",
    type: "VLSI",
  },

  {
    name: "Git & GitHub",
    level: "Intermediate",
    type: "Tools",
  },

  {
    name: "Arduino",
    level: "Intermediate",
    type: "Embedded",
  },
];

/* =========================================================
   CERTIFICATES
   ========================================================= */

/*
   IMPORTANT:
   Add your real Google Drive / external certificate links
   in the "link" field.

   Do NOT use /assets/certificates/*.pdf anymore.
*/

const certificates = [
  {
    name: "MATLAB Onramp",
    organization: "MathWorks",
    // Paste the certificate's public Google Drive, Credly, or official URL here.
    link: "https://drive.google.com/file/d/163eJ96CR6y1mS4kDY-lxDCVnSHZC9Hmz/view",
  },
  {
    name: "Google for Developers Agentathon",
    organization: "Google for Developers",
    link: "https://drive.google.com/file/d/1FpIpImDaXXvj9sK8tFyqgpQ-JG0g7C7K/view",
  },
  {
    name: "Agentic AI Hackathon",
    organization: "Hackathon",
    link: "https://drive.google.com/file/d/15sIIwDAFVjiON4qsJUOJJ2sBS6fQUVhF/view",
  },
  {
    name: "Hacktronics 2.0",
    organization: "National Level Hackathon",
    link: "https://drive.google.com/file/d/1qCBcvRLePAEIJLke9EsmDiBxZnzx--3m/view",
  },
  {
    name: "Digithon",
    organization: "Technical Event",
    link: "https://drive.google.com/file/d/109mugK4H9a8BJPXKYBd0PH-E9_BNNZ-i/view",
  },
  {
    name: "Industrial Training",
    organization: "Technical Training",
    link: "https://drive.google.com/file/d/1zDTv9tL72_0OHEbYAk6a0XTFrYRdqOIm/view",
  },
  {
    name: "Thiranex",
    organization: "Technical Event",
    link: "https://drive.google.com/file/d/1rBtl5zP8lr0Z9MuEQB1SNhXU49vSxRla/view",
  },
  {
  name: "VLSI / RFFT Internship Certificate",
  organization: "Silicon Meta Systems",
  link: "https://drive.google.com/file/d/18Z-Vet8RVZbepd-yGLIhbd6haT1_QPEL/view?usp=sharing",
  },
   {
  name: " Music Night Edition",
  organization: "Certificate Of participation",
  link: "https://drive.google.com/file/d/1FXiPUMIIRzAuPIPua18wOT0vNdX2bmCS/view?usp=sharing",
  },
];

/* =========================================================
   EXPERIENCE
   ========================================================= */

const experience = [
  {
    year: "2026",
    title: "VLSI / RFFT Internship",
    company: "Silicon Meta Systems",
    description:
      "Worked on an extensible in-place architecture for RFFT as part of an 8-week VLSI-oriented internship.",
  },

  {
    year: "2025",
    title: "Google for Developers Agentathon",
    company: "Technical Event",
    description:
      "Participated in an AI-focused developer event and explored agent-based application development.",
  },

  {
    year: "2025",
    title: "Hacktronics 2.0",
    company: "National Level Hackathon",
    description:
      "Participated in a national-level technical hackathon focused on solving real-world engineering problems.",
  },
];

/* =========================================================
   EDUCATION
   ========================================================= */

const education = [
  {
    year: "2024 - Present",
    title: "B.Tech in Electronics & Communication Engineering",
    place: "Anurag University",
  },

  {
    year: "Diploma",
    title: "Diploma in Engineering",
    place: "Siddhartha Institute of Technology & Sciences",
  },
];

/* =========================================================
   BINARY GENERATOR
   ========================================================= */

function generateBinary(length = 90) {
  return Array.from({ length }, () =>
    Math.random() > 0.5 ? "1" : "0"
  ).join("");
}

/* =========================================================
   BINARY PORTRAIT
   ========================================================= */

function BinaryPortrait() {
  const [binary, setBinary] = useState("");

  useEffect(() => {
    setBinary(generateBinary(150));

    const interval = setInterval(() => {
      setBinary(generateBinary(150));
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="portrait-wrapper">
      <div className="binary-orbit orbit-one"></div>
      <div className="binary-orbit orbit-two"></div>

      <div className="binary-photo">
        <img
          src="/assets/profile.jpg"
          alt="Akash profile"
        />

        <div className="photo-gradient"></div>

        <div className="scan-line"></div>

        <div className="corner corner-tl"></div>
        <div className="corner corner-tr"></div>
        <div className="corner corner-bl"></div>
        <div className="corner corner-br"></div>

        <div className="binary-overlay">
          {binary}
        </div>

        <div className="binary-label label-top">
          01001011 01000001
        </div>

        <div className="binary-label label-bottom">
          01000001 01010011 01001000
        </div>

        <div className="portrait-status">
          <span className="status-dot"></span>
          SYSTEM ONLINE
        </div>
      </div>

      <div className="binary-side-text side-left">
        01010100
      </div>

      <div className="binary-side-text side-right">
        01001001
      </div>
    </div>
  );
}

/* =========================================================
   NAVBAR
   ========================================================= */

function Navbar({ activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    ["home", "Home"],
    ["about", "About"],
    ["skills", "Skills"],
    ["projects", "Projects"],
    ["experience", "Experience"],
    ["certificates", "Certificates"],
    ["contact", "Contact"],
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMobileOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-inner">

        <button
          className="logo"
          onClick={() => scrollTo("home")}
        >
          <span className="logo-bracket">&lt;</span>
          AKASH
          <span className="logo-bracket">/&gt;</span>
        </button>

        <nav
          className={
            mobileOpen
              ? "nav-links open"
              : "nav-links"
          }
        >
          {links.map(([id, label]) => (
            <button
              key={id}
              className={
                activeSection === id
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <button
          className="mobile-menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

/* =========================================================
   SECTION TITLE
   ========================================================= */

function SectionTitle({
  number,
  title,
  subtitle,
}) {
  return (
    <div className="section-heading">

      <div className="section-number">
        {number}
      </div>

      <h2>{title}</h2>

      {subtitle && <p>{subtitle}</p>}

      <div className="heading-line">
        <span></span>
      </div>

    </div>
  );
}

/* =========================================================
   SKILLS
   ========================================================= */

function Skills() {
  return (
    <section id="skills" className="section">

      <div className="container">

        <SectionTitle
          number="03"
          title="Technical Skills"
          subtitle="Technologies and tools I use to build, experiment and solve engineering problems."
        />

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={skill.name}
              style={{
                animationDelay:
                  `${index * 0.05}s`,
              }}
            >

              <div className="skill-top">

                <span className="skill-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="skill-type">
                  {skill.type}
                </span>

              </div>

              <h3>{skill.name}</h3>

              <div className="skill-progress">
                <span></span>
              </div>

              <div className="skill-level">
                {skill.level}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   PROJECTS
   ========================================================= */

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <span className="projects-label">04 / PROJECTS</span>

          <h2>
            Things I've <span>Built.</span>
          </h2>

          <p>
            A collection of engineering, AI, software and web projects
            developed through experimentation and real-world problem solving.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>

              <div className="project-category">
                {project.category}
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`Open ${project.title} live project in a new tab`}
                  >
                    LIVE ↗
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`Open ${project.title} GitHub repository in a new tab`}
                  >
                    GITHUB ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   EXPERIENCE + EDUCATION
   RAILWAY JOURNEY TIMELINE
   ========================================================= */

function Experience() {
  return (
    <section
      id="experience"
      className="journey-section"
    >
      <div className="journey-container">

        {/* HEADER */}
        <div className="journey-header">

          <span className="journey-eyebrow">
            05 / JOURNEY
          </span>

          <h2>
            Experience <span>&</span> Education
          </h2>

          <p>
            The engineering journey that shaped the person
            I am building today.
          </p>

          <div className="journey-line" />

        </div>

        {/* RAILWAY TRACK */}
        <div className="railway">

          {/* Main rail */}
          <div className="rail-line" />

          {/* Journey Items */}
          {journey.map((item, index) => {

            const isLeft = index % 2 === 0;

            return (
              <div
                className={`rail-station ${
                  isLeft
                    ? "station-left"
                    : "station-right"
                }`}
                key={item.id}
              >

                {/* CARD */}
                <article className="journey-card">

                  <div className="journey-card-top">

                    <span
                      className={`journey-type ${
                        item.type
                      }`}
                    >
                      {item.type === "experience"
                        ? "EXPERIENCE"
                        : "EDUCATION"}
                    </span>

                    <span className="journey-year">
                      {item.year}
                    </span>

                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <h4>
                    {item.organization}
                  </h4>

                  <p>
                    {item.description}
                  </p>

                  <div className="journey-card-bottom">

                    <span className="journey-meta">
                      {item.meta}
                    </span>

                    {item.certificate && (
                      <a
                        href={item.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="journey-certificate"
                      >
                        VIEW CERTIFICATE ↗
                      </a>
                    )}

                  </div>

                </article>

                {/* STATION */}
                <div className="rail-station-node">

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                {/* CONNECTOR */}
                <div className="rail-connector" />

              </div>
            );
          })}

          {/* TRAIN */}
          <div className="journey-train">

            <div className="train-light" />

            <div className="train-body">
              <span className="train-window" />
              <span className="train-window" />
              <span className="train-window" />
            </div>

            <div className="train-wheel train-wheel-one" />
            <div className="train-wheel train-wheel-two" />

          </div>

        </div>

        {/* END OF JOURNEY */}
        <div className="journey-end">

          <span className="journey-end-dot" />

          <span>
            CURRENTLY BUILDING THE NEXT STATION
          </span>

        </div>

      </div>
    </section>
  );
}
const journey = [
  {
    id: 1,
    type: "education",
    year: "2022",
    title: "Secondary School Certificate",
    organization: "Zilla Parishad High School, Pulimamidi",
    description:
      "Completed secondary education and built a strong academic foundation for engineering.",
    meta: "SSC • 8.30 / 10",
  },
  {
    id: 2,
    type: "education",
    year: "2022 – 2025",
    title: "Diploma in Electronics & Communication Engineering",
    organization: "Siddhartha Institute of Technology & Sciences",
    description:
      "Developed practical engineering knowledge in electronics, communication systems and technical fundamentals.",
    meta: "DIPLOMA • 7.67 / 10",
  },
  {
    id: 3,
    type: "experience",
    year: "NOV 2024 – MAY 2025",
    title: "Industrial Trainee",
    organization: "Accord Power Conversion Pvt. Ltd.",
    description:
      "Completed six months of industrial training in EV charger manufacturing, gaining exposure to production processes, quality control, testing procedures and electronics systems.",
    meta: "EV CHARGER MANUFACTURING • 87% ATTENDANCE",
    certificate:
      "https://drive.google.com/file/d/1zDTv9tL72_0OHEbYAk6a0XTFrYRdqOIm/view",
  },
  {
    id: 4,
    type: "experience",
    year: "2025",
    title: "Google for Developers Agentathon",
    organization: "Google for Developers",
    description:
      "Participated in an AI-focused developer event exploring agent-based application development.",
    meta: "AI • DEVELOPER EVENT",
  },
  {
    id: 5,
    type: "experience",
    year: "2025",
    title: "Hacktronics 2.0",
    organization: "National Level Hackathon",
    description:
      "Participated in a technical hackathon focused on engineering problem-solving and innovative technology solutions.",
    meta: "HACKATHON • TECHNICAL EVENT",
  },
  {
    id: 6,
    type: "experience",
    year: "2026",
    title: "VLSI / RFFT Internship",
    organization: "Silicon Meta Systems",
    description:
      "Completed an eight-week VLSI-oriented internship focused on an extensible in-place architecture for RFFT.",
    meta: "VLSI • RFFT • 8 WEEKS",
  },
  {
    id: 7,
    type: "education",
    year: "2024 – PRESENT",
    title: "B.Tech in Electronics & Communication Engineering",
    organization: "School of Engineering, Anurag University",
    description:
      "Pursuing B.Tech while developing projects in software, AI, embedded systems and VLSI.",
    meta: "B.TECH • ECE • EXPECTED 2028",
  },
];
/* =========================================================
   CERTIFICATES
   ========================================================= */

function Certificates() {
  return (
    <section id="certificates" className="section section-dark">
      <div className="container">
        <SectionTitle
          number="06"
          title="Certificates"
          subtitle="Training, technical events, and certifications. Open a certificate to view its document."
        />

        <div className="certificates-grid">
          {certificates.map((certificate, index) => {
            const hasCertificateLink =
              typeof certificate.link === "string" &&
              certificate.link.trim() !== "" &&
              certificate.link.trim() !== "#";

            return (
              <article className="certificate-card" key={certificate.name}>
                <div className="certificate-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {hasCertificateLink ? (
                  <a
                    className="certificate-icon"
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${certificate.name}`}
                    title={`Open ${certificate.name}`}
                  >
                    LINK
                  </a>
                ) : (
                  <span
                    className="certificate-icon certificate-icon-disabled"
                    aria-label="Certificate link not added"
                    title="Add this certificate's URL in App.jsx"
                  >
                    LINK
                  </span>
                )}

                <div className="certificate-details">
                  <h3>{certificate.name}</h3>
                  <p>{certificate.organization}</p>
                </div>

                {hasCertificateLink ? (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-button"
                  >
                    VIEW CERTIFICATE ↗
                  </a>
                ) : (
                  <span
                    className="certificate-button certificate-button-pending"
                    aria-disabled="true"
                    title="Add a certificate URL in the certificates array in App.jsx"
                  >
                    LINK PENDING
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ABOUT
   ========================================================= */

function About() {
  return (
    <section id="about" className="section">

      <div className="container">

        <SectionTitle
          number="02"
          title="About Me"
          subtitle="Electronics & Communication Engineering student building at the intersection of hardware and software."
        />

        <div className="about-grid">

          <div className="about-main glass-panel">

            <div className="terminal-header">

              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>

              <span className="terminal-title">
                akash@portfolio:~
              </span>

            </div>

            <div className="terminal-body">

              <p>
                <span className="terminal-green">
                  $
                </span>{" "}
                whoami
              </p>

              <h3>
                Electronics & Communication
                Engineering Student
              </h3>

              <p className="terminal-description">
                I am an ECE engineering student interested
                in software development, artificial
                intelligence, VLSI, embedded systems and
                building practical technology projects.
              </p>

              <p>
                <span className="terminal-green">
                  $
                </span>{" "}
                current_focus
              </p>

              <div className="focus-tags">
                <span>AI</span>
                <span>VLSI</span>
                <span>Web Development</span>
                <span>Embedded Systems</span>
                <span>Automation</span>
              </div>

            </div>

          </div>

          <div className="about-stats">

            <div className="stat-card">
              <strong>ECE</strong>
              <span>Engineering</span>
            </div>

            <div className="stat-card">
              <strong>AI</strong>
              <span>Exploration</span>
            </div>

            <div className="stat-card">
              <strong>VLSI</strong>
              <span>Research</span>
            </div>

            <div className="stat-card">
              <strong>∞</strong>
              <span>Learning</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   HERO
   ========================================================= */

function Hero() {

  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section id="home" className="hero">

      <CodeMatrixBackground />

      <div className="hero-grid-background"></div>

      <div className="binary-rain">

        {Array.from({ length: 16 }).map(
          (_, index) => (
            <div
              className="binary-rain-column"
              key={index}
              style={{
                left: `${index * 6.7}%`,
                animationDelay:
                  `${index * -0.8}s`,
                animationDuration:
                  `${7 + (index % 5)}s`,
              }}
            >
              {generateBinary(65)}
            </div>
          )
        )}

      </div>

      <div className="container hero-container">

        <div className="hero-content">

          <div className="hero-label">
            <span className="live-dot"></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="hero-kicker">
            ECE ENGINEER × DEVELOPER × BUILDER
          </p>

          <h1>
            Hi, I'm{" "}
            <span className="hero-name">
              B Akash
            </span>

            <br />

            <span className="hero-outline">
              I BUILD
            </span>{" "}

            <span className="gradient-text">
              DIGITAL
            </span>

            <br />

            EXPERIENCES.
          </h1>

          <p className="hero-description">
            Electronics & Communication Engineering
            student passionate about AI, software,
            VLSI, embedded systems and turning ideas
            into working technology.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={scrollToProjects}
            >
              EXPLORE MY WORK
              <span>↗</span>
            </button>

            <button
              className="secondary-button"
              onClick={scrollToContact}
            >
              CONTACT ME
            </button>

            {/* =================================================
                RESUME — EXTERNAL GOOGLE DRIVE LINK
                ================================================= */}

            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              VIEW RESUME ↗
            </a>

          </div>

          <div className="hero-meta">

            <div>
              <span>LOCATION</span>
              <strong>HYDERABAD, INDIA</strong>
            </div>

            <div>
              <span>FIELD</span>
              <strong>
                ELECTRONICS & COMMUNICATION
              </strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong>BUILDING</strong>
            </div>

          </div>

        </div>

        <div className="hero-visual">
          <BinaryPortrait />
        </div>

      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line"></div>
      </div>

    </section>
  );
}

/* =========================================================
   CONTACT
   ========================================================= */

function Contact() {
  return (
    <section
      id="contact"
      className="section contact-section"
    >

      <div className="container">

        <SectionTitle
          number="07"
          title="Let's Connect"
          subtitle="Interested in working together, discussing a project or exploring an opportunity?"
        />

        <div className="contact-card">

          <div className="contact-main">

            <span className="contact-label">
              START A CONVERSATION
            </span>

            <h2>
              HAVE A PROJECT
              <br />

              <span className="gradient-text">
                IN MIND?
              </span>
            </h2>

            <p>
              I'm always interested in meaningful
              technical projects, internships,
              engineering opportunities and
              collaborations.
            </p>

          </div>

          <div className="contact-links">

            <a
              href="mailto:your-email@example.com"
              className="contact-link"
            >
              <span>EMAIL</span>
              <strong>→</strong>
            </a>

            <a
              href="https://github.com/akashbangaru2005"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>GITHUB</span>
              <strong>↗</strong>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>LINKEDIN</span>
              <strong>↗</strong>
            </a>
            
<a
  href="https://www.instagram.com/akash_bangaru._.05/"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-link"
>
  <span>INSTAGRAM</span>
  <strong>↗</strong>
</a>

<a
  href="https://www.reddit.com/r/Kepler21e/"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-link"
>
  <span>REDDIT · KEPLER21E</span>
  <strong>↗</strong>
</a>


          </div>

        </div>

        <div className="footer">

          <span>
            © {new Date().getFullYear()} AKASH
          </span>

          <span>
            DESIGNED & BUILT WITH CODE
          </span>

          <span>
            01001001 01001110 01000110 01001001
          </span>

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   APP
   ========================================================= */

export default function App() {

  const [activeSection, setActiveSection] =
    useState("home");

  const [showTop, setShowTop] =
    useState(false);

  useEffect(() => {

    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "experience",
      "certificates",
      "contact",
    ];

    const handleScroll = () => {

      setShowTop(window.scrollY > 500);

      let current = "home";

      sections.forEach((id) => {

        const element =
          document.getElementById(id);

        if (!element) return;

        const top =
          element.getBoundingClientRect().top;

        if (top <= 180) {
          current = id;
        }

      });

      setActiveSection(current);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (
    <div className="portfolio">

      <Navbar
        activeSection={activeSection}
      />

      <main>

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Certificates />

        <Contact />

      </main>

      {showTop && (
        <button
          className="back-to-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

    </div>
  );
}