import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.scss";

import { CatListItem } from "..";

import { IoPizzaOutline, IoFastFoodSharp } from "react-icons/io5";
import { FaIceCream } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";
import { SiBuymeacoffee } from "react-icons/si";

const categories = [
  {
    name: "all items",
    path: "/",
    icon: <IoFastFoodSharp className="fs-2 fw-bold" />,
  },
  {
    name: "pizza",
    path: "/pizza",
    icon: <IoPizzaOutline className="fs-2 fw-bold" />,
  },
  {
    name: "burger",
    path: "/burger",
    icon: <GiHamburger className="fs-2 fw-bold" />,
  },
  {
    name: "drinks",
    path: "/drinks",
    icon: <BiDrink className="fs-2 fw-bold" />,
  },
  {
    name: "desserts",
    path: "/desserts",
    icon: <FaIceCream className="fs-2 fw-bold" />,
  },
];

const CatsSlides = () => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={20}
      // navigation={navigation ? navigation : false}
      className="mySwiper"
      breakpoints={{
        300: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        580: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 25,
        },
      }}
    >
      {categories.map((category, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          <CatListItem category={category} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CatsSlides;
