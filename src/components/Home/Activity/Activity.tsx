import TextDecoration from "@/components/TextDecoration/TextDecoration";
import { makeApiCall } from "@/config/Apicall";
import Image from "next/image";
import { useEffect, useState } from "react";

import CountDown from "./CountDown";
import ActiveJobsCount from "./ActiveJobsCount";
import { Statistic } from "antd";

const Activity = async () => {
  const result = await makeApiCall<any>(
    `${process.env.NEXT_API}/web/home-statistics`,
    "GET"
  );

  const roundedTotalRating = result.data.general.total_rating.toFixed(1);

  return (
    <div className="w-full bg-[#f2f5fc] ">
      <div className="container mx-auto md:px-0 p-4">
        <div className="py-[3rem]">
          <div className="flex flex-col  rounded-4xl md:bg-primary bg-white  p-6 justify-center md:mt-[-6.875rem] ">
            <div className="grid  md:grid-cols-4 grid-cols-2 md:gap-6 md:p-6  gap-2 p-2 ">
              {/* Active Tutor */}
              <div className="flex flex-row gap-2 items-center">
                <div className="relative md:w-[66px] pt-[56.25%] md:pt-0 md:h-[70px] rounded-lg overflow-hidden w-[55px] h-[55px] ">
                  <Image
                    src="/assets/img/landing_page/total_apply.png"
                    fill
                    className="hidden md:block  w-full h-full absolute top-0 left-0 bottom-0 right-0 "
                    alt=""
                  />
                  <Image
                    src="/assets/overview/apply.svg"
                    fill
                    className="md:hidden w-full h-full top-0 left-0 bottom-0 right-0"
                    alt=""
                  />
                </div>

                <div className="flex flex-col">
                  <h2
                    className={`text-xl  font-bold md:text-white text-primary  `}
                  >
                    {result.data.general.active_tutors ? (
                      <CountDown>{result.data.general.active_tutors}</CountDown>
                    ) : (
                      0
                    )}
                  </h2>
                  <p className="flex flex-wrap md:text-lg text-xs	 md:font-normal font-light md:text-white text-black">
                    Active Tutors
                  </p>
                </div>
              </div>

              {/* Live Tuition Jobs */}

              <div className="flex flex-row gap-2 items-center">
                <div className="relative md:w-[66px] pt-[56.25%] md:pt-0 md:h-[70px] rounded-lg overflow-hidden w-[55px] h-[55px] ">
                  <Image
                    src="/assets/img/landing_page/total_jobs.png"
                    fill
                    className="hidden md:block  w-full h-full absolute top-0 left-0 bottom-0 right-0 "
                    alt=""
                  />
                  <Image
                    src="/assets/overview/live_job.svg"
                    fill
                    className="md:hidden w-full h-full top-0 left-0 bottom-0 right-0"
                    alt=""
                  />
                </div>

                <div className="flex flex-col">
                  <h2
                    className={`text-xl  font-bold md:text-white text-primary  `}
                  >
                    {result.data.general.active_tutors ? (
                      <CountDown>
                        {result.data.general.total_live_jobs}
                      </CountDown>
                    ) : (
                      0
                    )}
                  </h2>
                  <p className="flex flex-wrap md:text-lg text-xs md:font-normal font-light md:text-white text-black">
                    Live Tuition Jobs
                  </p>
                </div>
              </div>
              {/* Happy Students */}

              <div className="flex flex-row gap-2 items-center">
                <div className="relative md:w-[66px] pt-[56.25%] md:pt-0 md:h-[70px] rounded-lg overflow-hidden w-[55px] h-[55px] ">
                  <Image
                    src="/assets/img/landing_page/total_happy.png"
                    fill
                    className="hidden md:block  w-full h-full absolute top-0 left-0 bottom-0 right-0 "
                    alt=""
                  />
                  <Image
                    src="/assets/overview/happy_student.svg"
                    fill
                    className="md:hidden w-full h-full top-0 left-0 bottom-0 right-0"
                    alt=""
                  />
                </div>

                <div className="flex flex-col">
                  <h2
                    className={`text-xl  font-bold md:text-white text-primary  `}
                  >
                    {result.data.general.total_job ? (
                      <CountDown>
                        {result.data.general.total_live_jobs}
                      </CountDown>
                    ) : (
                      0
                    )}
                  </h2>
                  <p className="flex flex-wrap md:text-lg text-xs md:font-normal font-light md:text-white text-black">
                    Happy Students
                  </p>
                </div>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <div className="relative md:w-[66px] pt-[56.25%] md:pt-0 md:h-[70px] rounded-lg overflow-hidden w-[55px] h-[55px] ">
                  <Image
                    src="/assets/img/landing_page/total_rating.png"
                    fill
                    className="hidden md:block  w-full h-full absolute top-0 left-0 bottom-0 right-0 "
                    alt=""
                  />
                  <Image
                    src="/assets/overview/rating.svg"
                    fill
                    className="md:hidden w-full h-full top-0 left-0 bottom-0 right-0"
                    alt=""
                  />
                </div>

                <div className="flex flex-col">
                  <h2
                    className={`text-xl  font-bold md:text-white text-primary  `}
                  >
                    {/* <CountDown>{roundedTotalRating}</CountDown>/5 */}
                    {roundedTotalRating} / 5
                  </h2>
                  <p className="flex flex-wrap md:text-lg text-xs md:font-normal font-light md:text-white text-black">
                    Average Tutor Rating
                  </p>
                </div>
              </div>
            </div>
            {/* 2nd  */}
            <div className="w-full p-6 flex flex-col justify-center items-center md:flex-row gap-2">
              <div className="md:w-1/6">
                <TextDecoration
                  type={"paragraph"}
                  text={"Live Tuition Jobs"}
                  extraClass="md:text-white text-primary "
                ></TextDecoration>
              </div>
              <div className="md:w-5/6 w-full">
                <ActiveJobsCount>{result}</ActiveJobsCount>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
