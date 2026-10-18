import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

const certificates = [
  {
    number: "01",
    title: "MATLAB Onramp",
    type: "Certificate",
    link: "PASTE_YOUR_MATLAB_CERTIFICATE_LINK_HERE",
  },
  {
    number: "02",
    title: "Google for Developers Agentathon",
    type: "Certificate",
    link: "PASTE_YOUR_AGENTATHON_LINK_HERE",
  },
  {
    number: "03",
    title: "Agentic AI Hackathon",
    type: "Certificate",
    link: "PASTE_YOUR_AGENTIC_AI_LINK_HERE",
  },
  {
    number: "04",
    title: "Hacktronics 2.0",
    type: "Certificate",
    link: "PASTE_YOUR_HACKTRONICS_LINK_HERE",
  },
  {
    number: "05",
    title: "Digithon",
    type: "Certificate",
    link: "PASTE_YOUR_DIGITHON_LINK_HERE",
  },
  {
    number: "06",
    title: "Industrial Training",
    type: "Certificate",
    link: "PASTE_YOUR_INDUSTRIAL_TRAINING_LINK_HERE",
  },
  {
    number: "07",
    title: "Thiranex",
    type: "Certificate",
    link: "PASTE_YOUR_THIRANEX_LINK_HERE",
  },
];

function Achievements() {
  return (
    <div className="section-container">

      <div className="section-label">
        05 / ACHIEVEMENTS
      </div>

      <h2 className="section-title">
        Certificates & achievements.
      </h2>

      <div className="certificate-grid">

        {certificates.map((certificate, index) => (
          <motion.a
            key={certificate.number}
            href={
              certificate.link.startsWith("http")
                ? certificate.link
                : "#"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card certificate-card"
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
              delay: index * 0.06,
            }}
          >

            <div className="certificate-top">

              <span>
                {certificate.number}
              </span>

              <Award size={20} />

            </div>

            <h3>
              {certificate.title}
            </h3>

            <p>
              {certificate.type}
            </p>

            <div className="certificate-link">
              View Certificate
              <ExternalLink size={15} />
            </div>

          </motion.a>
        ))}

      </div>

    </div>
  );
}

export default Achievements;