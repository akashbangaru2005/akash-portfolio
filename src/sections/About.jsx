import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="section-container">

      <div className="section-label">
        01 / ABOUT
      </div>

      <motion.h2
        className="section-title"
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
      >
        Engineering ideas
        <span> into reality.</span>
      </motion.h2>

      <div className="about-grid">

        <div className="glass-card about-main">
          <div className="card-code">
            ABOUT_ME_001
          </div>

          <p>
            I am an Electronics & Communication Engineering
            student with an interest in software development,
            artificial intelligence, embedded systems, VLSI,
            automation and modern web technologies.
          </p>

          <p>
            My goal is to combine electronics and software
            engineering to create practical systems that solve
            real-world problems.
          </p>
        </div>

        <div className="about-stats">

          <div className="glass-card stat-card">
            <strong>ECE</strong>
            <span>Engineering</span>
          </div>

          <div className="glass-card stat-card">
            <strong>AI</strong>
            <span>Systems</span>
          </div>

          <div className="glass-card stat-card">
            <strong>VLSI</strong>
            <span>Architecture</span>
          </div>

          <div className="glass-card stat-card">
            <strong>IoT</strong>
            <span>Embedded</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default About;