import React from "react";
import "./about.scss";
import image from "../../images/man.jpeg";
export default function About(prop) {
  return (
    <div
      data-aos="fade-left"
      className={prop.dark ? "about dark" : "about"}
      tags="div"
      id="about"
    >
      <h1>About</h1>
      <div className={prop.dark ? "textarea dark" : "textarea"}>
        <img src={image} alt="man" />
        <p>
          I first became thrilled with Software engineering in 2019. I was with
          a friend and he was telling me about this thing called Python and how
          it could automate things. As a person who looks for efficiencies, I
          was hooked and asked him questions about how I could get started. My
          friend told me it would be best if I start learning the basics of
          frontend languages before getting into backend development. I jumped
          right into HTML & CSS. Soon I was building cool frontend projects. I
          also added javaScript to sharpen my frontend skills. <br /><br /><br /> I'm currently
          seeking a full-time role in Software Engineering, Frontend Engineering
          and any other related fields where I can contribute my skills both in
          coding and business to help a company achieve their goals.
        </p>
      </div>
    </div>
  );
}
