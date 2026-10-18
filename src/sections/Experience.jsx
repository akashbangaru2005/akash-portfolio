import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2026",
    title: "Silicon Meta Systems",
    role: "VLSI Internship",
    description:
      "Worked on an internship project related to an effective VLSI architecture for extensible in-place computation of RFFT.",
  },
  {
    year: "2025",
    title: "Google for Developers Agentathon",
    role: "Participant",
    description:
      "Participated in a developer-focused event exploring AI agents and modern application development.",
  },
  {
    year: "2025",
    title: "Hacktronics 2.0",
    role: "Hackathon Participant",
    description:
      "Participated in a national-level hackathon focused on technology and problem solving.",
  },
];

function Experience() {
  return (
    <div className="section-container">

      <div className="section-label">
        04 / EXPERIENCE
      </div>

      <h2 className="section-title">
        Experience & learning.
      </h2>

      <div className="timeline">

        {experiences.map((item, index) => (
          <motion.div
            key={`${item.year}-${item.title}`}
            className="timeline-item"
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.12,
            }}
          >

            <div className="timeline-dot" />

            <div className="glass-card timeline-card">

              <span className="timeline-year">
                {item.year}
              </span>

              <h3>{item.title}</h3>

              <h4>{item.role}</h4>

              <p>
                {item.description}
              </p>

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
}

export default Experience;