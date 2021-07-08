import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SlideCatagori.css";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

// import Swiper core and required modules
import SwiperCore, { Scrollbar, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Scrollbar, Navigation]);

const SlideCatagori = (props) => {
  const img = props.img;
  return (
    <div className="mx-12 rounded mt-4 transform  -translate-y-24 md:-translate-y-44 lg:-translate-y-96 bg-white pb-2">
      <p className="text-left pt-5 ml-8 pb-3 text-2xl font-semibold text-black">
        {props.sub}
        <span className="text-blue-500 ml-8 text-left mt-3 text-base font-normal hover:text-olive-600 hover:underline cursor-pointer">Shop Now</span>
      </p>
      
      <Swiper
        slidesPerView={4}
        navigation={true}
        scrollbar={{
          hide: true,
        }}
        className="mySwiper productSlider"
      >
        {img &&
          img.map((soloImg) => (
            <SwiperSlide key={soloImg.id} className="w-40 mb-5">
              <img
                className="cursor-pointer rounded-xl mx-auto w-5/6 h-80"
                src={soloImg.imgLink}
                alt=""
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SlideCatagori;
