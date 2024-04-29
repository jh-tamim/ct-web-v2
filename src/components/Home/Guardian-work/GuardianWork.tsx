"use client";
import TextDecoration from "@/components/TextDecoration/TextDecoration";
import style from "./Guardian.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SectionWrapper from "@/components/UI/SectionWrapper/SectionWrapper";

const GuardianWork = () => {
  const [onePath, setOnePath] = useState(0);
  const [twoPath, setPathTwo] = useState(0);

  const [activeGuardianOne, setActiveGuardianOne] = useState(false);
  const [activeGuardianTwo, setActiveGuardianTwo] = useState(false);
  const [activeGuardianThree, setActiveGuardianThree] = useState(false);

  // Define the type of howItsWork
  const howItsWork = useRef<HTMLDivElement>(null);

  return (
    <SectionWrapper>
      <div className="flex flex-wrap justify-center items-center py-8  text-center">
        <TextDecoration
          align="start"
          type={"heading"}
          text={"How does it work for guardians/students?"}
          mode="bold"
          extraClass="text-center"
        ></TextDecoration>
      </div>

      <div className="flex flex-col gap-8">
        <div
          className={`md:w-[60%] w-[70%] flex flex-row gap-4 p-4 border rounded-md ${style.guardianWorkItemActive} shadow shadow-blue-400`}
        >
          <div className="relative md:w-[180px] md:h-[190px]  md:pt-0 rounded-md w-[60px] h-[40px]">
            <Image
              src="/assets/img/illustration/forGuardian/guardianSep1.png"
              alt=""
              fill
              className=" w-full h-full absolute top-0 left-0 bottom-0 right-0"
            ></Image>
          </div>

          <div
            className={`flex flex-col justify-center items-start `}
            style={{ color: ` ${activeGuardianOne ? "#0675c1" : ""} ` }}
          >
            <TextDecoration
              type={"subheading"}
              text={"Submit Your Tutor Request"}
              extraClass="text-primary"
              mode="bold"
            ></TextDecoration>
            <TextDecoration
              type={"paragraph"}
              text={"Fill out all the required fields and submit your request."}
            ></TextDecoration>
          </div>

          {/*  */}

          {/* <svg className={`${style.svg1}`} viewBox="0 0 229 173" fill="none">
            <motion.path
              initial={{ pathLength: 0, strokeWidth: 4 }}
              animate={{ pathLength: onePath }}
              transition={{ duration: 0.4 }}
              d="M0 3H152C192.869 3 226 36.1309 226 77V173"
              stroke="#0675C1"
              strokeOpacity="0.95"
              strokeWidth="6"
            />
          </svg>
          <svg className={`${style.svg1}`} viewBox="0 0 229 173" fill="none">
            <path
              d="M0 3H152C192.869 3 226 36.1309 226 77V173"
              stroke="#0675C1"
              strokeOpacity="0.05"
              strokeWidth="6"
            />
          </svg> */}
        </div>

        <div className="flex justify-end">
          <div
            className={`md:w-[60%] w-[70%] flex flex-row gap-4 p-4 border rounded-md guardianItem shadow shadow-blue-400 ${style.guardianWorkItemActive}`}
          >
            <div className="relative md:w-[200px] md:h-[190px]  md:pt-0 rounded-md w-[70px] h-[40px]">
              <Image
                src="/assets/img/illustration/forGuardian/guardianSep2.png"
                alt=""
                fill
                className=" w-full h-full absolute top-0 left-0 bottom-0 right-0"
              ></Image>
            </div>

            <div className="flex flex-col justify-center items-start ">
              <TextDecoration
                type={"subheading"}
                text={"Get the Maximum 5 Best Tutor CVs"}
                extraClass="text-primary"
                mode="bold"
              ></TextDecoration>
              <TextDecoration
                type={"paragraph"}
                text={
                  "Within 48 hours, you'll get up to 5 CVs of the best tutors who applied to your posted job."
                }
              ></TextDecoration>
            </div>
          </div>
        </div>

        <div
          className={`${style.guardianWorkItemActive} md:w-[60%] w-[70%] flex flex-row gap-4 p-4 border rounded-md guardianItem shadow shadow-blue-400 `}
        >
          <div
            className={`relative md:w-[200px] md:h-[190px]  md:pt-0 rounded-md w-[70px] h-[40px] `}
          >
            <Image
              src="/assets/img/illustration/forGuardian/guardianSep3.png"
              alt=""
              fill
              className=" w-full h-full absolute top-0 left-0 bottom-0 right-0"
            ></Image>
          </div>

          <div className="flex flex-col justify-center items-start ">
            <TextDecoration
              type={"subheading"}
              text={"Select the Best One & Start Learning"}
              extraClass="text-primary"
              mode="bold"
            ></TextDecoration>
            <TextDecoration
              type={"paragraph"}
              text={
                "Select a tutor from the shortlist and take trial classes to confirm your tutor."
              }
            ></TextDecoration>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default GuardianWork;
