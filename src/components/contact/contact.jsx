import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";
import ContactCard from "./contact_card/contact.card";
import ReactJsAlert from "reactjs-alert";
export default function Contact(prop) {
  const form = useRef();
  const [status, setStatus] = useState(false);
  const [title, type] = useState({ title: "", type: "", button: "" });
  const [message, setMessage] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const mailarray = [
    { name: "Email", mail: "Sappiah5689@gmail.com" },
    { name: "Icloud", mail: "Sappiah267@icloud.com" },
    { name: "Gmail", mail: "Sappiah085@st.ug.edu.gh" },
  ];
  const display = mailarray.map((el, key) => {
    return <ContactCard {...el} key={key} dark={prop.dark} />;
  });
  function hanglechange(e) {
    const name = e.target.name;
    setMessage((pre) => {
      return { ...pre, [name]: e.target.value };
    });
  }
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_40ysele",
        "my_portfolio",
        form.current,
        "QpVSNb9prX-FEl8oU"
      )
      .then(
        (result) => {
          setStatus(true);
          type({
            title: "Message sent successfully",
            type: "sucess",
            button: "OK",
          });
          setMessage({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          setStatus(true);
          type({
            title: "Message could not be sent ",
            type: "error",
            button: "Try again",
          });
        }
      );
  };
  return (
    <div className={prop.dark ? "contact dark" : "contact"} id="contact">
      <ReactJsAlert
        status={status}
        type={title.type}
        autoCloseIn={2000}
        quotes={false}
        button={title.button}
        title={title.title}
        Close={() => setStatus(false)}
      />
      <h1>Contact</h1>
      <h4>Talk to me</h4>
      <div className="contact_section">
        <div className="card_section">{display}</div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className={prop.dark ? "mail dark" : "mail"}
        >
          <label htmlFor="name" className="name">
            <input
              onChange={(e) => hanglechange(e)}
              type="text"
              name="user_name"
              placeholder="Eg; Nana Oye Ama"
              required
              value={message.user_name}
            />
          </label>
          <label htmlFor="email" className="email">
            <input
              onChange={(e) => hanglechange(e)}
              type="email"
              name="user_email"
              placeholder="yourname@example.com"
              required
              value={message.user_email}
            />
          </label>
          <label htmlFor="textarea" className="textarea">
            <textarea
              onChange={(e) => hanglechange(e)}
              name="message"
              type="email"
              placeholder="Type your message..."
              required
              value={message.message}
            />
          </label>
          <button className={prop.dark ? " dark" : ""} type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
