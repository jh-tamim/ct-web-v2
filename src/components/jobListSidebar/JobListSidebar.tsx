"use client";
import Image from "next/image";
import Link from "next/link";
import { MdOutlinePhone } from "react-icons/md";
import TextDecoration from "../TextDecoration/TextDecoration";

const JobListSidebar = () => {
  return (
    <div className="h-screen w-full  bg-primary sticky  top-0 bottom-0 right-0 z-[9999999999999] overflow-y-auto">
      <div className="  z-50 p-6">
        <div className="flex pt-2  items-center">
          <MdOutlinePhone color="#fff" />
          <a
            href="tel:+8809613441122"
            className="text-white hover:text-white-700 font-bold p-2"
          >
            <TextDecoration
              extraClass="flex flex-wrap"
              type={"paragraph"}
              text={`+8809613 441122`}
            ></TextDecoration>
          </a>
        </div>

        <Link href="/" className="mt-2">
          <Image
            className="mt-6"
            src="/assets/img/logo/caretutors-white.svg"
            height={800}
            width={200}
            alt="assets/img/logo/caretutors-white.svg"
          ></Image>
        </Link>
        <div className="flex flex-col items-start mt-4">
          <TextDecoration
            type={"subheading"}
            text={"About Us"}
            extraClass="text-white"
          ></TextDecoration>

          <TextDecoration
            type={"paragraph"}
            extraClass="text-white mt-5 text-start flex flex-wrap leading-[25px]"
            text={`Caretutors was founded in 2012. It is Bangladesh's first, most trusted and leading online platform for guardians, students, and tutors to hire verified tutors or find tuition jobs in 13 different categories from anywhere in the country.`}
          ></TextDecoration>
        </div>

        <div className="flex flex-col items-start mt-4 space-y-2">
          <TextDecoration
            type={"subheading"}
            text={"Available Now"}
            extraClass="text-white"
          ></TextDecoration>

          <TextDecoration
            type={"paragraph"}
            extraClass="text-white mt-5"
            text={` With Caretutors official app, Make your profile in minutes. Apply
              to your preferred tutoring jobs that match your skills.`}
          ></TextDecoration>
        </div>
        <div className="flex items-center justify-center ">
          <Image
            className="rounded-md p-4"
            src="/assets/img/caretutors-app-qr-code.png"
            height={800}
            width={200}
            alt="/assets/img/caretutors-app-qr-code.png"
          ></Image>
        </div>
        {/*  */}
        <div className="flex flex-row gap-1 items-center justify-center relative">
          <Link href="https://play.google.com/store/apps/details?id=com.caretutors">
            <Image
              height={333}
              width={96}
              src="/assets/img/landing-page/playStore.svg"
              alt="/assets/img/landing-page/playStore.svg"
            ></Image>
          </Link>
          <Link href="https://apps.apple.com/us/app/caretutors/id1607736513">
            <Image
              height={333}
              width={96}
              src="/assets/img/landing-page/appStore.svg"
              alt="/assets/img/landing-page/appStore.svg"
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListSidebar;
