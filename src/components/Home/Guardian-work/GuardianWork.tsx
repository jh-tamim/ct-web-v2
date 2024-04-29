"use client";
import TextDecoration from "@/components/TextDecoration/TextDecoration";
import style from "./Guardian.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SectionWrapper from "@/components/UI/SectionWrapper/SectionWrapper";

const GuardianWork = () => {
  const [onePath, setOnePath] = useState(0);

  // Define the type of howItsWork
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const deltaY = scrollY - lastScrollY;
      lastScrollY = scrollY;

      const windowHeight = window.innerHeight;
      let newValue = onePath;

      if (deltaY > 0) {
        newValue += 0.1;
      } else {
        newValue -= 0.1;
      }
      const clampedValue = Math.min(Math.max(newValue, 0.0), 1);
      setOnePath(clampedValue);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onePath]);

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

      <div className="space-y-6">
        <div className="relative">
          <section className=" body-font relative">
            <div className="p-2 lg:w-[60%] md:w-full">
              <div
                className="flex border-2 rounded-xl   border-opacity-50 p-4 sm:flex-row items-center gap-2 "
                style={{
                  boxShadow: "0px 3px 11px 0px #0675c159",
                  border: "1px solid #0675c159",
                  transition: "0.2s ease-in-out",
                }}
              >
                <Image
                  className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
                  src={`/assets/img/illustration/forGuardian/guardianSep1.png`}
                  alt="guarding image"
                  width={200}
                  height={200}
                />
                <div>
                  <h2 className="text-xl title-font  mb-3 font-bold text-primary">
                    Submit Your Tutor Request
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fill out all the required fields and submit your request.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <svg
            className="svg1 w-[250px] absolute top-24 left-[59%] hidden lg:block"
            viewBox="0 0 229 173"
            fill="none"
          >
            <path
              d="M0 3H152C192.869 3 226 36.1309 226 77V173"
              stroke="#0675C1"
              strokeOpacity="0.05"
              strokeWidth="6"
            />
          </svg>
          <svg
            className="svg1 w-[250px] absolute top-24 left-[59%] hidden lg:block"
            viewBox="0 0 229 173"
            fill="none"
          >
            <motion.path
              transition={{ duration: 0.4 }}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: onePath }}
              d="M0 3H152C192.869 3 226 36.1309 226 77V173"
              stroke="#0675C1"
              strokeOpacity="1"
              strokeWidth="4"
            />
          </svg>
        </div>

        <div className="relative">
          {" "}
          <section className="body-font md:flex justify-end">
            <div className="p-2 lg:w-[60%] md:w-full">
              <div
                className="flex border-2 rounded-xl   border-opacity-50 p-4 sm:flex-row items-center gap-2 "
                style={{
                  boxShadow: "0px 3px 11px 0px #0675c159",
                  border: "1px solid #0675c159",
                  transition: "0.2s ease-in-out",
                }}
              >
                <Image
                  className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
                  src={`/assets/img/illustration/forGuardian/guardianSep2.png`}
                  alt="guarding image"
                  width={200}
                  height={200}
                />
                <div>
                  <h2 className="text-xl title-font  mb-3 font-bold text-primary">
                    Get the Maximum 5 Best Tutor CVs
                  </h2>
                  <p className="leading-relaxed text-base">
                    Within 48 hours, you will get up to 5 CVs of the best tutors
                    who applied to your posted job.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <svg
            className="svg2 w-[250px] absolute top-24 right-[59%] hidden lg:block"
            viewBox="0 0 229 173"
            fill="none"
          >
            <path
              d="M229 3H77C36.1309 3 3.00001 36.1309 3.00001 77V173"
              stroke="#0675C1"
              strokeOpacity="0.05"
              strokeWidth="6"
            />
          </svg>
          <svg
            className="svg2 w-[250px] absolute top-24 right-[59%] hidden lg:block"
            viewBox="0 0 229 173"
            fill="none"
          >
            <motion.path
              transition={{ duration: 0.4 }}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: onePath }}
              d="M229 3H77C36.1309 3 3.00001 36.1309 3.00001 77V173"
              stroke="#0675C1"
              strokeOpacity="1"
              strokeWidth="4"
            />
          </svg>
        </div>
        <section className=" body-font">
          <div className="p-2 lg:w-[60%] md:w-full">
            <div
              className="flex border-2 rounded-xl   border-opacity-50 p-4 sm:flex-row items-center gap-2 "
              style={{
                boxShadow: "0px 3px 11px 0px #0675c159",
                border: "1px solid #0675c159",
                transition: "0.2s ease-in-out",
              }}
            >
              <Image
                className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
                src={`/assets/img/illustration/forGuardian/guardianSep3.png`}
                alt="guarding image"
                width={200}
                height={200}
              />
              <div>
                <h2 className="text-xl title-font  mb-3 font-bold text-primary">
                  Select the Best One & Start Learning
                </h2>
                <p className="leading-relaxed text-base">
                  Select a tutor from the shortlist and take trial classes to
                  confirm your tutor.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SectionWrapper>
  );
};

export default GuardianWork;
