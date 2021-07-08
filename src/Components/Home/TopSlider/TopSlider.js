import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./TopSlider.css";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// images
import banner1 from "../../../images/image/bannar1.jpg";
import banner2 from "../../../images/image/bannar2.jpg";
import banner3 from "../../../images/image/bannar3.jpg";
import banner4 from "../../../images/image/bannar4.jpg";
import banner5 from "../../../images/image/bannar5.jpg";
import banner6 from "../../../images/image/bannar6.jpg";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const TopSlider = () => {
  const sliderImg = "w-screen slidingImage";

  return (
    <div>
      <Swiper
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        navigation={true}
        className="mySwiper topSlider"
        style={{ zIndex: "0" }}
      >
        <SwiperSlide>
          <img className={`${sliderImg} `} src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={`${sliderImg}`} src={banner6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={`${sliderImg}`} src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={`${sliderImg}`} src={banner3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={`${sliderImg}`} src={banner4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={`${sliderImg}`} src={banner5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={`${sliderImg}`} src={banner6} alt="" />
        </SwiperSlide>
      </Swiper>

    </div>
  );
};

export default TopSlider;
