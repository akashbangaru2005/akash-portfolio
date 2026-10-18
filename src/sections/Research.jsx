import SectionTitle from "../components/SectionTitle";
import GlassCard from "../components/GlassCard";

function Research() {
  return (
    <section
      id="research"
      className="section"
    >

      <SectionTitle
        number="04"
        eyebrow="INNOVATION"
        title="RESEARCH"
      />

      <div className="research-grid">

        <GlassCard>

          <span className="research-number">
            01
          </span>

          <h3>
            PWM Based Smart Adaptive
            Lighting System Using MATLAB
            Visualization
          </h3>

          <p>
            Technical research manuscript
            prepared around the smart
            adaptive lighting system.
          </p>

        </GlassCard>

        <GlassCard>

          <span className="research-number">
            02
          </span>

          <h3>
            Pulse Width Modulation Based
            Smart Lighting System Visualizer
          </h3>

          <p>
            Contributed to the development
            and documentation of the
            project for innovation and
            intellectual property submission.
          </p>

        </GlassCard>

      </div>

    </section>
  );
}

export default Research;