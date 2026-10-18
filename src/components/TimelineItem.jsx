function TimelineItem({
  item
}) {
  return (
    <div className="timeline-item">

      <div className="timeline-dot" />

      <div className="timeline-date">
        {item.period}
      </div>

      <div className="timeline-content">

        <p className="eyebrow">
          {item.role}
        </p>

        <h3>
          {item.company}
        </h3>

        <h4>
          {item.title}
        </h4>

        <ul>
          {item.points.map(
            (point, index) => (
              <li key={index}>
                {point}
              </li>
            )
          )}
        </ul>

      </div>

    </div>
  );
}

export default TimelineItem;