import React from "react";
import "./set.scss";
export default function Set(prop) {
  return (
    <div className="set">
      <div className="label">
        <h2>{prop.name}</h2>
        <h6 className={prop.dark ? "dark" : ""}>{prop.percent}%</h6>
      </div>
      <div
        className={prop.dark ? `eff ${prop.name} dark` : `eff ${prop.name}`}
      ></div>
    </div>
  );
}
