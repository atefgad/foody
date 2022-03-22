import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.scss";

// import required modules
import { Pagination } from "swiper";

import { ProductCard } from "..";

const ProductsSlides = ({ products }) => {
  return (
    <Swiper
      modules={[Pagination]}
      effect="Flip"
      slidesPerView={4}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      // navigation={navigation ? navigation : false}
      className="mySwiper"
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        580: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
    >
      {products.map((product, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsSlides;
