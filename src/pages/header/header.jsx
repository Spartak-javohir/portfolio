import React from "react";
import "./header.scss";
import CAT from "./CTA";
import Me from "../../assets/me.png";
import HeaderScroll from "./HeaderScroll";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Javohirbek Abdujalilov</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <CAT></CAT>

        <HeaderScroll />

        <div className="me">
          <img src={Me} alt="my photo" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
