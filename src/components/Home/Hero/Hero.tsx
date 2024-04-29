"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import "./Hero.module.css";
// /assets/gim / banners / (01).png;
import image1 from "../../../../public/assets/img/banners/01.png";
import image2 from "../../../../public/assets/img/banners/02.png";
import image3 from "../../../../public/assets/img/banners/04.png";
import image4 from "../../../../public/assets/img/banners/05.png";
import TextDecoration from "@/components/TextDecoration/TextDecoration";
import SectionWrapper from "@/components/UI/SectionWrapper/SectionWrapper";

const Hero = () => {
  return (
    <div className="w-full bg-white py-3 ">
      <SectionWrapper>
        <div className="flex md:flex-row flex-col-reverse items-center">
          <div className="w-full flex flex-col justify-start space-y-2">
            <TextDecoration
              text="Hire the Right Tutor Today"
              align="start"
              mode="bold"
              type="heading"
            ></TextDecoration>
            <TextDecoration
              text="Book one-on-one lessons with verified tutors in your area"
              align="start"
              mode="bold"
              type="subheading"
            ></TextDecoration>
            <Button
              color="primary"
              className="bg-primary border text-white  hover:border-blue-500 hover:bg-white hover:text-blue-500  rounded-md md:w-64 md:h-10 font-semibold w-[180px] h-10 "
            >
              Hire a Tutor (It’s Free!)
            </Button>
            <p className="text-gray-600 md:text-base text-sm ">
              Want to become a Tutor?{" "}
              <Link href="/signup/tutor" className="text-blue-500 text-bold ">
                {" "}
                Sign Up{" "}
              </Link>{" "}
              now{" "}
            </p>
          </div>

          <div className="w-full ">
            <div>
              <div className="flex flex-col gap-1 mb-10 flex-1  ">
                <div className="flex justify-center items-end gap-1 md:gap-3">
                  <Image
                    className="rounded-tl-[120px] floating mr-1 mb-1 w-[170px]"
                    src="/assets/img/banners/01.png"
                    alt="imag"
                    width={140}
                    height={120}
                  />
                  <Image
                    className="rounded-lg floating w-[130px]"
                    src="/assets/img/banners/02.png"
                    alt="imag"
                    width={150}
                    height={200}
                  />
                </div>
                <div className="flex justify-center items-start gap-1 md:gap-3">
                  {" "}
                  <Image
                    className="rounded-lg floating w-[130px]"
                    src="/assets/img/banners/04.png"
                    alt="imag"
                    width={110}
                    height={60}
                  />
                  <Image
                    className="rounded-br-[120px] floating ml-1 mt-1 w-[170px]"
                    src="/assets/img/banners/05.png"
                    alt="imag"
                    width={140}
                    height={120}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Hero;
