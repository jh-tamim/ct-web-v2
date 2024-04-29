import TextDecoration from "@/components/TextDecoration/TextDecoration";
import Image from "next/image";
import style from "./tutor.module.css";

const TutorWork = () => {
  return (
    <div className="container mx-auto space-y-4 md:px-0 p-4">
      <div className="flex flex-wrap justify-center items-center ">
        <TextDecoration
          align="start"
          type={"heading"}
          text={"How does it work for tutors?"}
          mode="bold"
        ></TextDecoration>
      </div>
      {/* border border-gradient-to-r from-sky-300 to-sky-500 */}

      <div className="flex flex-col gap-8">
        <div
          className={`md:w-[55%] w-[70%] flex flex-row gap-4 p-4 border rounded-md ${style.tutorWorkItemActive} shadow shadow-blue-400`}
        >
          <div className="relative md:w-[180px] md:h-[190px]  md:pt-0 rounded-md w-[80px] h-[40px]">
            <Image
              src="/assets/img/illustration/forTutorSVG/png/tutor01.png"
              alt=""
              fill
              className=" w-full h-full absolute top-0 left-0 bottom-0 right-0"
            ></Image>
          </div>

          <div className="flex flex-col justify-center items-start ">
            <TextDecoration
              type={"subheading"}
              text={"Create a Free Account"}
              extraClass="text-primary"
              mode="bold"
            ></TextDecoration>
            <TextDecoration
              type={"paragraph"}
              text={
                "Create your account in minutes with some required information."
              }
            ></TextDecoration>
          </div>
        </div>

        {/* 2nd */}

        <div className="flex justify-end">
          <div
            className={`md:w-[55%] w-[70%] flex flex-row gap-4 p-4 border rounded-md guardianItem shadow shadow-blue-400 ${style.tutorWorkItemActive}`}
          >
            <div className="relative md:w-[250px] md:h-[200px]  md:pt-0 rounded-md w-[80px] h-[30px]">
              <Image
                src="/assets/img/illustration/forTutorSVG/png/tutor02.png"
                alt=""
                fill
                className=" w-full h-full absolute top-0 left-0 bottom-0 right-0"
              ></Image>
            </div>

            <div className="flex flex-col justify-center items-start ">
              <TextDecoration
                type={"subheading"}
                text={"Complete Your Profile"}
                extraClass="text-primary"
                mode="bold"
              ></TextDecoration>
              <TextDecoration
                type={"paragraph"}
                text={
                  "Complete your profile by including your personal, educational, tuition related and supporting documentation details."
                }
              ></TextDecoration>
            </div>
          </div>
        </div>

        {/* 3rd */}

        <div
          className={`md:w-[55%] w-[70%] flex flex-row gap-4 p-4 border rounded-md ${style.tutorWorkItemActive} shadow shadow-blue-400`}
        >
          <div className="relative md:w-[230px] md:h-[200px]  md:pt-0 rounded-md w-[80px] h-[40px]">
            <Image
              src="/assets/img/illustration/forTutorSVG/png/tutor03.png"
              alt=""
              fill
              className=" w-full h-full absolute top-0 left-0 bottom-0 right-0"
            ></Image>
          </div>

          <div className="flex flex-col justify-center items-start ">
            <TextDecoration
              type={"subheading"}
              text={"Apply to Your Desired Tuition Job"}
              extraClass="text-primary"
              mode="bold"
            ></TextDecoration>
            <TextDecoration
              type={"paragraph"}
              text={
                "Check the job board everyday and apply on desirable tuition jobs which match with you the most."
              }
            ></TextDecoration>
          </div>
        </div>

        {/* 4th */}
        <div className="flex justify-end">
          <div
            className={`md:w-[55%] w-[70%] flex flex-row gap-4 p-4 border rounded-md guardianItem shadow shadow-blue-400 ${style.tutorWorkItemActive}`}
          >
            <div className="relative md:w-[250px] md:h-[200px]  md:pt-0 rounded-md w-[90px] h-[40px]">
              <Image
                src="/assets/img/illustration/forTutorSVG/png/tutor04.png"
                alt=""
                fill
                className=" w-full h-full absolute top-0 left-0 bottom-0 right-0"
              ></Image>
            </div>

            <div className="flex flex-col justify-center items-start ">
              <TextDecoration
                type={"subheading"}
                text={"Get Selected"}
                extraClass="text-primary"
                mode="bold"
              ></TextDecoration>
              <TextDecoration
                type={"paragraph"}
                text={
                  "Get shortlisted from system and selected by the guardian/student based on your provided information in profile."
                }
              ></TextDecoration>
            </div>
          </div>
        </div>

        {/* 5th */}
        <div
          className={`md:w-[55%] w-[70%] flex flex-row gap-4 p-4 border rounded-md ${style.tutorWorkItemActive} shadow shadow-blue-400`}
        >
          <div className="relative md:w-[180px] md:h-[190px]  md:pt-0 rounded-md w-[80px] h-[40px]">
            <Image
              src="/assets/img/illustration/forTutorSVG/png/tutor05.png"
              alt=""
              fill
              className=" w-full h-full absolute top-0 left-0 bottom-0 right-0"
            ></Image>
          </div>

          <div className="flex flex-col justify-center items-start ">
            <TextDecoration
              type={"subheading"}
              text={"Start Tutoring"}
              extraClass="text-primary"
              mode="bold"
            ></TextDecoration>
            <TextDecoration
              type={"paragraph"}
              text={
                "Take the trial classes and confirm your expected tuition job. Happy tutoring!"
              }
            ></TextDecoration>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorWork;
