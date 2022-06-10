import React from "react";
import "./comp.scss";
export default function PortComp(prop) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={prop.url}
      className={prop.dark ? "port_cart dark" : "port_cart"}
    >
      <img src={prop.image} alt={`${prop.name}`} />
      <h3>{prop.name}</h3>
      <p>{prop.about}</p>
    </a>
  );
}
