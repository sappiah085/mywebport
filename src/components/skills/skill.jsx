import React from "react";
import "./skill.scss";
import c from "../../lang/c.png";
import css from "../../lang/css.png";
import data from "../../lang/database.png";
import git from "../../lang/git.png";
import gitlab from "../../lang/gitlab.png";
import html from "../../lang/html.png";
import java from "../../lang/java.png";
import javas from "../../lang/javas.png";
import mysql from "../../lang/mysql.png";
import react from "../../lang/react.png";
import visual from "../../lang/visual.png";
import Set from "../set/set";
import ImageGrid from "react-image-grid-animator";
export default function Skill(prop) {
  const frontskills = [
    { name: "html", percent: 98 },
    { name: "css", percent: 95 },
    { name: "react", percent: 83 },
    { name: "scss", percent: 92 },
    { name: "javascript", percent: 85 },
  ];
  const backendskills = [
    { name: "nodejs", percent: 75 },
    { name: "python", percent: 68 },
    { name: "mongodb", percent: 73 },
    { name: "fast api", percent: 62 },
    { name: "rest api", percent: 75 },
  ];
  const images = [
    c,
    data,
    git,
    mysql,
    visual,
    react,
    html,
    java,
    gitlab,
    javas,
    css,
  ];
  const text = frontskills.map((el, key) => {
    return <Set dark={prop.dark} key={key} {...el} />;
  });
  const back = backendskills.map((el, key) => {
    return <Set dark={prop.dark} key={key} {...el} />;
  });
  return (
    <div
      tags="div"
      className={prop.dark ? "skill dark" : "skill"}
      id="skills"
    >
      <h1>Skills</h1>
      <div className="skillset">
        <div className="frontend">
          <h4>Frontend Development</h4>
          {text}
        </div>
        <div className="frontend">
          <h4>Backend Development</h4>
          {back}
        </div>
      </div>

      <div className="lang">
        <ImageGrid
          images={images}
          visibleCount={11}
          interval={1100}
          animationItemcount={0}
          transitionType={"FADE_AND_SCALE"}
          transitionDuration={200}
          isActive={true}
        />
      </div>
    </div>
  );
}
