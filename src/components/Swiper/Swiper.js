import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
  
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >        
        <SwiperSlide> <img src="https://picsum.photos/id/287/1440/450" alt="slide1"/></SwiperSlide>
        <SwiperSlide> <img src="https://picsum.photos/seed/picsum/1440/450" alt="slide1"/>
        </SwiperSlide>
        <SwiperSlide> <img src="https://picsum.photos/id/237/1440/450" alt="slide1"/></SwiperSlide>
        <SwiperSlide> <img src="https://picsum.photos/seed/picsum/1440/450" alt="slide1"/></SwiperSlide>

        <SwiperSlide> <img src="https://picsum.photos/id/267/1440/450" alt="slide1"/></SwiperSlide>
        <SwiperSlide> <img src="https://picsum.photos/id/297/1440/450" alt="slide1"/></SwiperSlide>
        <SwiperSlide> <img src="https://picsum.photos/id/37/1440/450" alt="slide1"/></SwiperSlide>

      </Swiper>
  
  );
}
