import SectionTitle from "../components/SectionTitle";
import { certifications } from "../data/certifications";

function Certifications() {
  return (
    <section
      id="certifications"
      className="section"
    >

      <SectionTitle
        number="07"
        eyebrow="VERIFICATION"
        title="CERTIFICATIONS"
      />

      <div className="certifications-list">

        {certifications.map(
          (certificate, index) => (
            <div
              className="certificate-row"
              key={certificate.title}
            >

              <span className="certificate-index">
                {String(index + 1).padStart(
                  2,
                  "0"
                )}
              </span>

              <div className="certificate-info">

                <h3>
                  {certificate.title}
                </h3>

                <p>
                  {certificate.issuer}
                  {" • "}
                  {certificate.year}
                </p>

              </div>

              <a
                href={certificate.url}
                target="_blank"
                rel="noreferrer"
                className="certificate-link"
              >
                VIEW CERTIFICATE ↗
              </a>

            </div>
          )
        )}

      </div>

    </section>
  );
}

export default Certifications;