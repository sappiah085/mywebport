import React from "react";
import "./foot.scss";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
export default function Footer(prop) {
  return (
    <div  className={prop.dark ? "footer dark" : "footer"}>
      <h3>Samuel</h3>
      <ul className="links">
        <li>
          <a href="#homepage">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#test">Testimonial</a>
        </li>
      </ul>
      <div className="social">
        <a
          rel="noreferrer"
          href="https://github.com/sappiah085"
          target="_blank"
        >
          <BsGithub className="icon" />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/appiah-samuel-a8b50b228/"
        >
          <BsLinkedin className="icon" />
        </a>
        <a rel="noreferrer" href="mailto:sappiah5689@gmail.com">
          <BiMailSend className="icon" />
        </a>
      </div>
      <h6>©Samuel All Rights Reserved.</h6>
    </div>
  );
}
