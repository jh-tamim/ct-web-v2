import TextDecoration from "@/components/TextDecoration/TextDecoration";
import TutoringCard from "./TutoringCard";
import SectionWrapper from "@/components/UI/SectionWrapper/SectionWrapper";

export interface TutoringOption {
  name: string;
  description: string;
  img: string;
}

const data: TutoringOption[] = [
  {
    name: "Home Tutoring",
    description:
      "Home tutoring allows students to learn various subjects in their own home.",
    img: "/assets/img/landing_page/hometutor.svg",
  },
  {
    name: "Group Tutoring",
    description:
      "Group tutoring allows students to learn together and solve problems at an affordable cost.",
    img: "/assets/img/landing_page/groupclass.svg",
  },
  {
    name: "Online Tutoring",
    description:
      "Find the best tutors from anywhere and take online classes by using tools such as Google Meet, Zoom, Skype, and more.",
    img: "/assets/img/landing_page/onlinetutor.svg",
  },
  {
    name: "Package Tutoring",
    description:
      "Package tutoring helps a students to complete their studies within a specific time frame.",
    img: "/assets/img/landing_page/package.svg",
  },
];

const TutoringOption = () => {
  return (
    <div className="w-full bg-[#f2f5fc] ">
      <SectionWrapper>
        <div className="flex items-center justify-center flex-col">
          <div className="mt-5">
            <TextDecoration type="heading" text="Tuition Types" mode="bold" />
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 justify-center p-4 gap-2">
            {data.map((items: TutoringOption, index) => {
              return <TutoringCard key={index} items={items}></TutoringCard>;
            })}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default TutoringOption;
