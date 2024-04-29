"use client";
import TextDecoration from "@/components/TextDecoration/TextDecoration";
import { ReactNode, useState } from "react";
import Slider from "react-slick";
import Style from "./activeJob.module.css";

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="w-full ">
      <Slider {...settings} className="space-x-4">
        {children.data.citys.map((city: any, index: number) => (
          <div
            style={{ width: "95%", padding: "0 18px " }}
            key={index}
            className="flex justify-center items-center border md:border-white md:text-white rounded-xl md:px-10 px-6 md:py-2 text-center gap-4 "
          >
            {/* {city.city} */}
            <TextDecoration
              type={"paragraph"}
              text={`${city.city} (${city.total})`}
            ></TextDecoration>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ActiveJobsCount;
