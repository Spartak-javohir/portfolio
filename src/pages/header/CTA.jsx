import React from "react";
import CV from "../../assets/CV.pdf";

function CTA() {
  return (
    <div className="cta">
      <a className="btn" href={CV} download>
        Download CV
      </a>
      <a className="btn-primary btn" href="#contact">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
