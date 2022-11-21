import React from "react";
import "./testimonials.scss";
import Avatar from "../../assets/avatar.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      {/* <div> */}
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide className="testimonial" key={1}>
          <div className="client__avatar">
            <img src={Avatar} alt="Avatar One" />
          </div>
          <h5 className="client__name">John Uwashington</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint hic
            labore tenetur porro atque, ipsum non fugit quidem facilis? Adipisci
            dignissimos ut excepturi asperiores consequatur.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial" key={2}>
          <div className="client__avatar">
            <img src={Avatar} alt="Avatar One" />
          </div>
          <h5 className="client__name">John Uwashington</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint hic
            labore tenetur porro atque, ipsum non fugit quidem facilis? Adipisci
            dignissimos ut excepturi asperiores consequatur.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial" key={3}>
          <div className="client__avatar">
            <img src={Avatar} alt="Avatar One" />
          </div>
          <h5 className="client__name">John Uwashington</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint hic
            labore tenetur porro atque, ipsum non fugit quidem facilis? Adipisci
            dignissimos ut excepturi asperiores consequatur.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial" key={4}>
          <div className="client__avatar">
            <img src={Avatar} alt="Avatar One" />
          </div>
          <h5 className="client__name">John Uwashington</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint hic
            labore tenetur porro atque, ipsum non fugit quidem facilis? Adipisci
            dignissimos ut excepturi asperiores consequatur.
          </small>
        </SwiperSlide>
      </Swiper>
      {/* </div> */}
    </section>
  );
}

export default Testimonials;
