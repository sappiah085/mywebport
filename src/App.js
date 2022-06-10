import React, { useEffect } from "react";
import Navbar from "./components/Navbar/navbar";
import Homepage from "./components/home/home.page";
import About from "./components/About/about";
import Port from "./components/port/port";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/foot/foot";
import Contact from "./components/contact/contact";
import Skill from "./components/skills/skill";
import Testimonial from "./components/testimonial/textimonial";
function App() {
  AOS.init({
    duration: 1000,
    delay: 50,
  });
  const [darkMode, setDarkmode] = React.useState(
    JSON.parse(localStorage.getItem("darkmode"))
  );
  useEffect(() => {
    if (darkMode == null && !localStorage.getItem("darkmode")) {
      setDarkmode(false);
    } else if (localStorage.getItem("darkmode") && darkMode == null) {
      setDarkmode(JSON.parse(localStorage.getItem("darkmode")));
    }
    window.localStorage.setItem("darkmode", JSON.stringify(darkMode));
  }, [darkMode]);
  return (
    <>
      <Navbar
        darkmode={darkMode}
        onclick={() => {
          setDarkmode((pre) => !pre);
        }}
      />
      <Homepage darkmode={darkMode} />
      <About dark={darkMode} />
      <Skill dark={darkMode} />
      <Port dark={darkMode} />
      <Testimonial dark={darkMode} />
      <Contact dark={darkMode} />
      <Footer dark={darkMode} />
    </>
  );
}

export default App;
