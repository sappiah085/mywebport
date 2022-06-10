import React, { useEffect,useState } from "react";
import { BsMoonFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import "./navbar.scss";
export default function Navbar(prop) {
  const [progress, setProgress] = React.useState(0);
  const [hash, sethash] = useState("#homepage");
  const [minimize, setMinimize] = useState(true);
  const onscroll = () => {
    const winscroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winscroll / height) * 100;
    setProgress(scrolled);
  };
  function minimizeFun() {
    setMinimize(true);
  }
  useEffect(() => {
    const divs = document.querySelectorAll("[tags]");
    const options = {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0,
    };
    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          sethash(`#${entry.target.id}`);
        }
      });
    }, options);

    divs.forEach((image) => {
      imgObserver.observe(image);
    });
  });
  useEffect(() => {
    window.addEventListener("scroll", onscroll);
    return () => window.removeEventListener("scroll", onscroll);
  });

  return (
    <span className="nav">
      <div className="progress" style={{ height: `${progress}%` }}></div>
      <nav className={prop.darkmode ? "nav dark" : "nav"}>
        <div
          onClick={() => setMinimize((pre) => !pre)}
          className={!minimize ? "toggle active" : "toggle"}
        ></div>
        <ul className={minimize ? "hid" : ""}>
          <li>
            <a
              rel="noreferrer"
              onClick={() => minimizeFun()}
              href="#homepage"
              className={prop.darkmode ? "dark active" : ""}
              active={hash === "#homepage" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              onClick={() => minimizeFun()}
              className={prop.darkmode ? "dark" : ""}
              href="#about"
              active={hash === "#about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              onClick={() => minimizeFun()}
              className={prop.darkmode ? "dark" : ""}
              href="#skills"
              active={hash === "#skills" ? "active" : ""}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              rel="noreferrer"
              onClick={() => minimizeFun()}
              className={prop.darkmode ? "dark" : ""}
              href="#portfolio"
              active={hash === "#portfolio" ? "active" : ""}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              onClick={() => minimizeFun()}
              className={prop.darkmode ? "dark" : ""}
              href="#test"
              active={hash === "#test" ? "active" : ""}
            >
              Testimonial
            </a>
          </li>
          <li>
            {prop.darkmode ? (
              <FiSun
                className="moon"
                onClick={() => {
                  prop.onclick();
                }}
              />
            ) : (
              <BsMoonFill
                className="moon"
                onClick={() => {
                  prop.onclick();
                }}
              />
            )}
          </li>
        </ul>
      </nav>
    </span>
  );
}
