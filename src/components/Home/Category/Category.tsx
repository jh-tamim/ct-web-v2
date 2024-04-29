"use client";
import styles from "./category.module.css";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import TextDecoration from "@/components/TextDecoration/TextDecoration";
import SectionWrapper from "@/components/UI/SectionWrapper/SectionWrapper";

interface NewCategoriesList {
  category: string;
  image: string;
}

const categoriesList: NewCategoriesList[] = [
  { category: "Bangla Medium", image: "/assets/img/category/Bangla.png" },
  {
    category: "English Version",
    image: "/assets/img/category/English_Version.png",
  },
  {
    category: "English Medium",
    image: "/assets/img/category/English_Medium.png",
  },
  { category: "Religious Studies", image: "/assets/img/category/Arabic.png" },
  { category: "Admission Test", image: "/assets/img/category/Admmission.png" },
  { category: "Arts", image: "/assets/img/category/Arts.png" },
  { category: "Language Learning", image: "/assets/img/category/Language.png" },
  {
    category: "Test Preparation",
    image: "/assets/img/category/Test_Preparation.png",
  },
  {
    category: "Professional Skill Development",
    image: "/assets/img/category/Professional_Skill.png",
  },
  {
    category: "Special Skill Development",
    image: "/assets/img/category/Special_Skill.png",
  },
  { category: "Uni Help", image: "/assets/img/category/Uni_help.png" },
  { category: "Madrasa Medium", image: "/assets/img/category/Madrasa.png" },
  {
    category: "Special Child Education",
    image: "/assets/img/category/Special_Child.png",
  },
];

const Category = () => {
  return (
    <div className="w-full bg-white-500">
      <SectionWrapper>
        <div className="flex items-center justify-center py-6">
          <TextDecoration
            type={"heading"}
            text={"Serving Categories"}
            mode="bold"
          ></TextDecoration>
        </div>

        <Swiper
          className={`md:h-[390px] h-[300px] `}
          spaceBetween={40}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          slidesPerView={5}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
        >
          {categoriesList.map((element, index) => {
            return (
              <SwiperSlide
                key={index}
                className="mt-5"
                style={{ marginTop: "20px" }}
              >
                <div className="bg-white p-6 shadow-md rounded-xl  flex flex-col justify-center items-center">
                  <Image
                    src={element.image}
                    alt={element.category}
                    height={220}
                    width={220}
                  ></Image>

                  <div className="h-12 flex items-center justify-center">
                    <h2 className="font-bold text-center align-middle">
                      {element.category}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SectionWrapper>
    </div>
  );
};

export default Category;
