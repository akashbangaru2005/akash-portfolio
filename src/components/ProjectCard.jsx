function ProjectCard({
  project
}) {
  return (
    <article className="project-card">

      <div className="project-top">

        <span className="project-number">
          {project.number}
        </span>

        <span className="project-category">
          {project.category}
        </span>

      </div>

      <div className="project-content">

        <h3>
          {project.title}
        </h3>

        <p>
          {project.description}
        </p>

        <div className="technology-list">
          {project.technologies.map(
            (technology) => (
              <span
                key={technology}
              >
                {technology}
              </span>
            )
          )}
        </div>

      </div>

      {project.demo && (
        <a
          className="project-link"
          href={project.demo}
          target="_blank"
          rel="noreferrer"
        >
          LIVE PROJECT
          <span>↗</span>
        </a>
      )}

    </article>
  );
}

export default ProjectCard;