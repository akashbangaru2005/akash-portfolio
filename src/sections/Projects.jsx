import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "EDA Copilot",
    description:
      "AI-powered assistant concept designed to support electronic design automation workflows.",
    tags: ["AI", "EDA", "React", "FastAPI"],
  },
  {
    number: "02",
    title: "INDU AI Assistant",
    description:
      "Multilingual AI voice assistant concept with speech recognition, text-to-speech and LLM integration.",
    tags: ["Python", "AI", "Whisper", "LLM"],
  },
  {
    number: "03",
    title: "Smart Municipal Portal",
    description:
      "IoT-oriented platform concept for intelligent municipal services and citizen interaction.",
    tags: ["Node.js", "React", "IoT", "PostgreSQL"],
  },
  {
    number: "04",
    title: "Weather Information App",
    description:
      "Modern weather application with location-based weather information and a responsive interface.",
    tags: ["React", "Spring Boot", "MySQL"],
  },
  {
    number: "05",
    title: "SafeWalk Portal",
    description:
      "Safety-focused web application with user and administrator interfaces.",
    tags: ["React", "Spring Boot", "MySQL"],
  },
  {
    number: "06",
    title: "NEON-FLOW",
    description:
      "Futuristic interactive infinite game concept using a neon visual system.",
    tags: ["JavaScript", "Game", "UI"],
  },
];

function Projects() {
  return (
    <div className="section-container">

      <div className="section-label">
        03 / PROJECTS
      </div>

      <h2 className="section-title">
        Things I've built.
      </h2>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="glass-card project-card"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.08,
            }}
          >

            <div className="project-top">
              <span>
                {project.number}
              </span>

              <ArrowUpRight size={20} />
            </div>

            <h3>{project.title}</h3>

            <p>
              {project.description}
            </p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>
                  {tag}
                </span>
              ))}
            </div>

          </motion.article>
        ))}

      </div>

    </div>
  );
}

export default Projects;