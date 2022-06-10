import React from "react";
import "./home.page.scss";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import image from "../../images/man.png";
import group from "../../images/Group.png";
import samuel from "../../samuel.pdf";
export default function Homepage(prop) {
  const { text } = useTypewriter({
    words: ["SAMUEL.", "A WEB DEVELOPER.", "FAN TO BE WITH."],
    loop: 0,
    deleteSpeed: 80,
    typeSpeed: 100,
  });
  return (
    <>
      <div
        tags="div"
        className={prop.darkmode ? `homepage dark` : "homepage"}
        style={{ backgroundColor: prop.darkmode ? "#121212" : "#F8FAFB" }}
        id="homepage"
      >
        <div className={prop.darkmode ? `main dark` : "main"}></div>
        <div className="bodyText">
          <span
            className="hello"
            style={{ color: !prop.darkmode ? "#475056" : "#ffffff" }}
          >
            Hello, I'm
          </span>
          <span className="name">
            {text}
            <Cursor cursorStyle="_" />
          </span>
          <p style={{ color: prop.darkmode ? "#ffffff" : "#475056" }}>
            I have worked on so many projects with so many people around the
            world. I am always free and ready to work on new projects. I am very
            proficient in recent web technologies. I am currently studying new
            skills. Below is the link to my resume. We can also get social with
            the links provided below.
          </p>
          <div className="buttons">
            <a
              rel="noreferrer"
              href={samuel}
              download
              className={prop.darkmode ? "downloadlink dark" : "downloadlink"}
            >
              Download Resume
            </a>
            <a
              rel="noreferrer"
              className="talk"
              style={{
                backgroundColor: prop.darkmode ? "#1e1e1e" : "",
              }}
              href="#contact"
            >
              Let's talk
            </a>
          </div>
          <div className="socials">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/sappiah085"
            >
              <BsGithub />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/appiah-samuel-a8b50b228/"
            >
              <BsLinkedin />
            </a>
            <a rel="noreferrer" href="mailto:sappiah5689@gmail.com">
              <BiMailSend />
            </a>
          </div>
        </div>
        <div className="illustrator">
          <img
            className={prop.darkmode ? `dark` : ""}
            src={prop.darkmode ? group : image}
            alt="man"
          />
        </div>
      </div>
    </>
  );
}
