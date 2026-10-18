import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

function Contact() {
  return (
    <div className="section-container contact-section">

      <div className="section-label">
        07 / CONTACT
      </div>

      <motion.h2
        className="section-title contact-title"
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
        Let's build
        <span> something.</span>
      </motion.h2>

      <div className="glass-card contact-card">

        <p>
          I'm open to internships, engineering projects,
          software opportunities, AI projects and
          collaborations.
        </p>

        <div className="contact-links">

          <a href="mailto:YOUR_EMAIL@gmail.com">
            <Mail size={17} />
            Email
            <ArrowUpRight size={15} />
          </a>

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={17} />
            GitHub
            <ArrowUpRight size={15} />
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR_USERNAME/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={17} />
            LinkedIn
            <ArrowUpRight size={15} />
          </a>

        </div>

      </div>

    </div>
  );
}

export default Contact;