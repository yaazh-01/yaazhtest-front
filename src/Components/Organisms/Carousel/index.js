import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "./carousel.css";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

const HomeCarousel = () => {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/assets/images/carousel/carousel_one.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/carousel/carousel_two.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/carousel/carousel_three.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
