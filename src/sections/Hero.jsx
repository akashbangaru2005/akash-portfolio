import React from "react";
import { motion } from "framer-motion";

import {
  ArrowDown,
  Download,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

import BinaryPortrait from "../components/BinaryPortrait";
import CodeMatrixBackground from "../components/CodeMatrixBackground";

const Hero = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1k4tDIZDIJ9xObbEmtlkX_JVE-wjh43HX/view?usp=sharing";

  return (
    <section id="home" className="hero-section">

      {/* =====================================================
          DIGITAL CODE MATRIX BACKGROUND
          ===================================================== */}
      <CodeMatrixBackground />

      {/* =====================================================
          HERO CONTENT
          ===================================================== */}
      <div className="hero-container">

        {/* ================= LEFT SIDE ================= */}
        <div className="hero-content">

          {/* BADGE */}
          <motion.div
            className="hero-badge"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
          >
            <span className="status-dot" />
            ELECTRONICS & COMMUNICATION ENGINEER
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
          >
            Hi, I'm <span>B Akash.</span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.35,
              duration: 0.6,
            }}
          >
            Electronics & Communication
            <br />
            Engineering Student
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
          >
            I build software, AI systems, embedded solutions,
            intelligent applications and experimental engineering
            projects.
          </motion.p>

          {/* ================= BUTTONS ================= */}
          <motion.div
            className="hero-buttons"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.65,
              duration: 0.6,
            }}
          >

            {/* RESUME */}
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              <Download size={17} />
              <span>View Resume</span>
            </a>

            {/* CONTACT */}
            <a
              href="#contact"
              className="secondary-btn"
            >
              <Mail size={17} />
              <span>Contact Me</span>
            </a>

          </motion.div>

          {/* ================= SOCIAL LINKS ================= */}
          <motion.div
            className="hero-socials"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.5,
            }}
          >

            {/* GITHUB */}
            <a
              href="https://github.com/akashbangaru2005"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

          </motion.div>

          {/* ================= SCROLL INDICATOR ================= */}
          <motion.div
            className="hero-scroll"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 0.6,
            }}
          >
            <ArrowDown size={15} />
            SCROLL TO EXPLORE
          </motion.div>

        </div>

        {/* =====================================================
            RIGHT SIDE — DIGITAL PORTRAIT
            ===================================================== */}
        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: "easeOut",
          }}
        >

          {/* YOUR PHOTO + QR STYLE SCANNER */}
          <BinaryPortrait />

          {/* ORBIT EFFECTS */}
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          {/* BINARY LABELS */}
          <div className="binary-label label-one">
            01001
          </div>

          <div className="binary-label label-two">
            10110
          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;