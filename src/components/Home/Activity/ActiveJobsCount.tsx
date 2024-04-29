"use client";
import TextDecoration from "@/components/TextDecoration/TextDecoration";
import { ReactNode, useState } from "react";
import Slider from "react-slick";
import Style from "./activeJob.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
interface Props {
  children: {
    data?: any;
  };
}

const ActiveJobsCount = ({ children }: Props) => {
  if (!children || !children.data) {
    console.error("Invalid or missing data in children:", children);
    return null;
  }

  return (
    <div className="w-full ">
      <Swiper
        spaceBetween={2}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        className="mb-5 w-5/6"
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {children.data.citys.map((city: any, index: number) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center border md:border-white md:text-white rounded-xl md:px-10 px-6 md:py-2 text-center gap-4 h-25 w-10 py-6 hover:bg-white hover:text-black border-primary  "
          >
            <TextDecoration
              type={"paragraph"}
              text={`${city.city}(${city.total})`}
            ></TextDecoration>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveJobsCount;
