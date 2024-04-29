"use client";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import TextDecoration from "@/components/TextDecoration/TextDecoration";
import Slider from "react-slick";
import "./module.guardian.css";
// slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import GuardianSlider from "./GuardianSlider";

const GuardianTestimonial = () => {
  const settings = {
    dots: false,
    speed: 1000,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    arrows: true,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto md:px-0 p-4">
      <div className="flex justify-center items-center mb-8 flex-col">
        <div className="flex flex-wrap justify-center items-center">
          <TextDecoration
            type={"heading"}
            align="start"
            text={"What Some Awesome Guardian/Student Says about Us"}
            extraClass="font-bold text-center"
          ></TextDecoration>
        </div>

        <TextDecoration
          type={"paragraph"}
          text={"Hire a tutor today and start learning!"}
          extraClass="text-gray-600"
        ></TextDecoration>
      </div>

      <div className="slider-container px-4">
        <Slider {...settings}>{/* <GuardianSlider></GuardianSlider> */}</Slider>
      </div>
    </div>
  );
};

export default GuardianTestimonial;
