import React from "react";
import "./footer.scss";
import { FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
function Footer() {
  return (
    <div className="footer__container">
      <footer>
        <a href="#" className="footer__logo">
          JAVOHIRBEK ABDUJALILOV
        </a>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="footer__socials">
          <a href="https://www.facebook.com/javohirbek.abdujalilov.7">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/javohir__abdujalilov/">
            <FiInstagram />
          </a>
          <a href="https://t.me/abdujaliloff_javohir">
            <BsTelegram />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Javohirbek Portfolio. All rights reserved</small>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
