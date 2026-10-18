import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Java",
  "Python",
  "JavaScript",
  "React",
  "Node.js",
  "Spring Boot",
  "MongoDB",
  "MySQL",
  "HTML",
  "CSS",
  "MATLAB",
  "Arduino",
  "Git",
  "GitHub",
  "VS Code",
  "Verilog",
];

function Skills() {
  return (
    <div className="section-container">

      <div className="section-label">
        02 / SKILLS
      </div>

      <h2 className="section-title">
        Technologies I work with.
      </h2>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="glass-card skill-card"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.035,
            }}
          >
            <span className="skill-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <strong>{skill}</strong>

            <div className="skill-line">
              <div />
            </div>
          </motion.div>
        ))}

      </div>

    </div>
  );
}

export default Skills;