import React from "react";
import "./about.scss";
import image from "../../images/man.jpeg";
export default function About(prop) {
  const date = new Date().getFullYear() - new Date("12/9/2020").getFullYear();
  return (
    <div className={prop.dark ? "about dark" : "about"} tags="div" id="about">
      <h1>About</h1>
      <div className={prop.dark ? "textarea dark" : "textarea"}>
        <img src={image} alt="man" />
        <p>
          It has always been my dream that I will grow up to be an engineer. Not
          knowing what field I will venture into. I had always wanted
          aeronautics. I was curious and wanted to know the engineering and
          ideas that went to plane production and inventions. Not only that, I
          liked playing video games and I was always fascinated on how these
          systems worked. Fast forward, I decided to learn we development. I
          became good at <i><b>HTML</b></i> but I slowly lost interest because of how others
          programmed websites easily and effieciently and above all
          professionally, I just did not fit in. My friend I made in the
          university however rekindled my drive when he was creating
          professional pages. He told me he started like I did and then boom I
          was back at it again. <br /><br /> Not leting anything stop me, I took courses on
          Udemy that really helped me grow in{" "}
          <i>
            <b>HTML, CSS and JavaScript</b>
          </i>
          . I am happy to say I have {date}+ years in programming and webpage designing and still counting
          . I also took courses on ReactJs which I am proud to say I am an
          expert because this very website was created in{" "}
          <i>
            <b>REACTJS</b>
          </i>
          .
        </p>
      </div>
    </div>
  );
}
