import React from "react";
import "./portfolio.scss";
import IMG1 from "../../assets/img1.png";
import IMG2 from "../../assets/img2.png";
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a protfolio item title</h3>
          <div className="portfolio__item-cta">
            <a className="btn" href="https://github.com">
              Github
            </a>
            <a
              href="https://dribbble.com/Bukhara"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a protfolio item title</h3>
          <div className="portfolio__item-cta">
            <a className="btn" href="https://github.com">
              Github
            </a>
            <a
              href="https://dribbble.com/Bukhara"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a protfolio item title</h3>
          <div className="portfolio__item-cta">
            <a className="btn" href="https://github.com">
              Github
            </a>
            <a
              href="https://dribbble.com/Bukhara"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a protfolio item title</h3>
          <div className="portfolio__item-cta">
            <a className="btn" href="https://github.com">
              Github
            </a>
            <a
              href="https://dribbble.com/Bukhara"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a protfolio item title</h3>
          <div className="portfolio__item-cta">
            <a className="btn" href="https://github.com">
              Github
            </a>
            <a
              href="https://dribbble.com/Bukhara"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a protfolio item title</h3>
          <div className="portfolio__item-cta">
            <a className="btn" href="https://github.com">
              Github
            </a>
            <a
              href="https://dribbble.com/Bukhara"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
