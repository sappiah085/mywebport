import React from "react";
import { BiMailSend } from "react-icons/bi";
import "./contact.card.scss";
export default function ContactCard(prop) {
  return (
    <div className={prop.dark?"cards dark": "cards"}>
      <BiMailSend  className="mails"/>
      <h3>{prop.name}</h3>
      <h5>{prop.mail}</h5>
      <a href={`mailto: ${prop.mail}`}>Write to me</a>
    </div>
  );
}
