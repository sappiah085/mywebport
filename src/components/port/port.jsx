import React from "react";
import PortComp from "./port_compo/comp";
import "./port.scss";
import cal from "../../port/calculator.png";
import music from "../../port/music.png";
import todoapp from "../../port/todoapp.png";
import nick from "../../port/nick.png";
import comp from "../../port/comp.png";
import weather from "../../port/weather.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
export default function Port(prop) {
  const data = [
    {
      name: "Calcualtor App",
      about:
        " I cloned the IOS calculator with simple Javascript, HTML and CSS. You can access the code on my github repository. Nonetheless you can click on me for the live demo. ",
      image: cal,
      url: "https://sappiah085.github.io/iosCal/",
    },
    {
      name: "Food App",
      about:
        " I created this Food app with pure CSS, HTML and Javascript. You can add to cart. The app automatically calculator the total expenses during adding or removing from cart. It also add recently viewed food to recent view which can be cleared. It also uses localstorage to store uses data so then dont loss it on refresh.",
      image: music,
      url: "https://sappiah085.github.io/ecommerce/",
    },
    {
      name: "Password Generator App",
      about:
        " I created this app to generate random password and also gives you the functionality to be able to copy. The password generated is based on users preferences. I also integrated a system that checks and tells the user if the password they generated is strong.",
      image: todoapp,
      url: "https://sappiah085.github.io/passWord-generator/",
    },
    {
      name: "Weather App",
      about:
        " I created this weather app that eanbles you to search your location. I used openweather API. it is very responsive like my other projects and fully functional",
      image: weather,
      url: "https://sappiah085.github.io/weather/",
    },
    {
      name: "Nicholas' Portfolio",
      about:
        " I designed Nicholas' portfolio with the use of pure CSS, HTML and Javascript. It is very responsive",
      image: nick,
      url: "https://sappiah085.github.io/nickPage/",
    },
    {
      name: "Complaint App",
      about:
        " I created this very responsive complaint app that gives the user the ability to file complaint and also checkout complaint that have been looked at. After the percentage of completed task and computed for the user. This was done with only CSS, HTML and Javascript. ",
      image: comp,
      url: "https://sappiah085.github.io/complaint_app/",
    },
  ];
  const text = data.map((el, key) => {
    return (
      <SwiperSlide key={key}>
        <PortComp {...el} dark={prop.dark} />
      </SwiperSlide>
    );
  });
  return (
    <div tags="div" className={prop.dark ? "port dark" : "port"} id="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          effect={"coverflow"}
          grabCursor={true}
          spaceBetween={-270}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="myswiper"
        >
          {text}
        </Swiper>
      </div>
    </div>
  );
}
