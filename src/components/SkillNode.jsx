function SkillNode({
  skill
}) {
  return (
    <div className="skill-node">

      <div className="skill-header">

        <span>
          {skill.name}
        </span>

        <span>
          {skill.level}%
        </span>

      </div>

      <div className="skill-bar">

        <div
          className="skill-fill"
          style={{
            width: `${skill.level}%`
          }}
        />

      </div>

      <small>
        {skill.category}
      </small>

    </div>
  );
}

export default SkillNode;