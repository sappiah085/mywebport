import React from "react";
import "./testimonial.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { EffectCards, Pagination, Autoplay } from "swiper";
import TestCard from "./test_card/testcard";
export default function Testimonial(props) {
  return (
    <div tags="div" className={props.dark ? "test dark" : "test"} id="test">
      <h1>Testimonial</h1>
      <div className="say">What are my previous clients saying? See for yourself below...</div>
      <div className="card">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          tag="span"
          modules={[Autoplay, EffectCards, Pagination]}
          effect={"cards"}
          grabCursor={true}
        >
          <SwiperSlide>
            <TestCard dark={props.dark} />
          </SwiperSlide>
          <SwiperSlide>
            <TestCard dark={props.dark} />
          </SwiperSlide>
          <SwiperSlide>
            <TestCard dark={props.dark} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
