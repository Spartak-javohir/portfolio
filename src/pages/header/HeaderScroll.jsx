import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

function HeaderScroll() {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithubSquare />
      </a>
      <a href="https://dribbble.com" target="_blank">
        <FiDribbble />
      </a>
    </div>
  );
}

export default HeaderScroll;
