function SectionTitle({
  number,
  eyebrow,
  title
}) {
  return (
    <div className="section-title">

      <div className="section-number">
        {number}
      </div>

      <div>
        <p className="eyebrow">
          {eyebrow}
        </p>

        <h2>{title}</h2>
      </div>

    </div>
  );
}

export default SectionTitle;