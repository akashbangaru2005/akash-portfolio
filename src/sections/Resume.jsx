import React from "react";

const Resume = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1k4tDIZDIJ9xObbEmtlkX_JVE-wjh43HX/view?usp=sharing";

  return (
    <section id="resume" className="resume-section">
      <div className="section-container">

        <div className="section-heading">
          <span>05</span>
          <h2>Resume</h2>
        </div>

        <div className="resume-card">

          <div className="resume-info">
            <div className="resume-icon">
              📄
            </div>

            <p className="resume-label">
              CURRICULUM VITAE
            </p>

            <h3>
              My Professional <span>Resume</span>
            </h3>

            <p>
              View my complete resume including education,
              technical skills, projects, internships,
              certifications and achievements.
            </p>
          </div>

          <div className="resume-actions">
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button primary"
            >
              <span>View Resume</span>
              <span>↗</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Resume;