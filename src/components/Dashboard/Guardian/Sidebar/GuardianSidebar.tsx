"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import TextDecoration from "@/components/TextDecoration/TextDecoration";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const GuardianSidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen  md:w-90 w-72.5 flex-col overflow-y-hidden bg-[#0675c1] duration-300 ease-linear  lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center gap-2 px-6 py-5.5 md:justify-center justify-between md:py-6.5 mt-5">
        <Link href="/">
          <Image
            width={176}
            height={32}
            src={"/assets/img/logo/caretutors-white.svg"}
            alt="Logo"
            priority
          />
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block md:hidden text-white ml-5"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      <div className="mt-4 flex items-center justify-center">
        <span className="h-24 w-24 rounded-full justify-center items-center">
          <Image
            width={412}
            height={412}
            src={"/assets/img/avataaar/Profile-Picture.png"}
            alt=""
            className="h-[24] w-[24] rounded-full"
          />
        </span>
      </div>
      <div className="mt-3 px-4 py-4">
        <TextDecoration
          type={"subheading"}
          text={"Tamim"}
          mode="bold"
          extraClass="text-center text-white"
        ></TextDecoration>

        <TextDecoration
          type="paragraph"
          text={`mohammedjobairhossains@gmail.com`}
          extraClass="text-white text-justify"
          mode="bold"
        ></TextDecoration>
        <TextDecoration
          type="paragraph"
          text={`Guardian/Student ID: 323243243`}
          extraClass="text-white text-center"
          mode="bold"
        ></TextDecoration>
      </div>

      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Calendar --> */}
              <li>
                <Link
                  href="/"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-dark duration-300 ease-in-out hover:bg-white hover:text-[#0675c1] ${
                    pathname.includes("") && "bg-white !text-[#0675c1] "
                  }`}
                >
                  <Image
                    src={`/assets/img/navigation-icon/home.svg`}
                    alt=""
                    height={20}
                    width={20}
                    className="h-6 w-6"
                  ></Image>
                  Dashboard
                </Link>
              </li>
              {/* <!-- Menu Item Calendar --> */}
              {/* <!-- Tutor Request--> */}
              <li>
                <Link
                  href="#"
                  className={`group relative flex items-center gap-3 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out  ${
                    pathname.includes("tutor") &&
                    "bg-white text-[#0675c1] dark:bg-meta-4"
                  }`}
                >
                  <Image
                    src={`/assets/img/navigation-icon/tutor_request.svg`}
                    alt=""
                    height={20}
                    width={20}
                    className="h-6 w-6"
                  ></Image>
                  <span className="hover:pl-4 duration-500 text-white">
                    Tutor Request
                  </span>
                </Link>
              </li>
              {/* <!-- Tutor Request --> */}
              {/* <!-- Menu Item Profile --> */}
              <li>
                <Link
                  href="/profile"
                  className={`group relative flex items-center gap-3 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out  dark:hover:bg-meta-4 ${
                    pathname.includes("profile") &&
                    "bg-white text-[#0675c1] dark:bg-meta-4"
                  }`}
                >
                  <Image
                    src={`/assets/img/navigation-icon/profile.svg`}
                    alt=""
                    height={20}
                    width={20}
                    className="h-6 w-6"
                  ></Image>

                  <span className="hover:pl-4 duration-500 text-white">
                    Profile
                  </span>
                  <span className="md:bg-red text-white text-xs font-medium me-2 px-3 py-1 rounded md:bg-red-600 dark:text-red-300">
                    New
                  </span>
                </Link>
              </li>
              {/* <!-- Menu Item Profile --> */}
              {/* <!-- Menu Item Posted Job --> */}
              <li>
                <Link
                  href="#"
                  className={`group relative flex items-center gap-3 rounded-sm px-4 py-2 font-medium text-dark duration-300 ease-in-out  dark:hover:bg-meta-4 ${
                    pathname.includes("postered_job") &&
                    "bg-white text-[#0675c1] dark:bg-meta-4"
                  }`}
                >
                  <Image
                    src={`/assets/img/navigation-icon/jobs.svg`}
                    alt=""
                    height={20}
                    width={20}
                    className="h-6 w-6"
                  ></Image>

                  <span className="hover:pl-4 duration-500 text-white">
                    Posted Job
                  </span>
                </Link>
              </li>
              {/* <!-- Menu Item Posted Job --> */}
              {/* <!-- Menu Item Confimation Letter --> */}
              <li>
                <Link
                  href="#"
                  className={`group relative flex items-center gap-3 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out   ${
                    pathname.includes("settings") &&
                    "bg-white text-[#0675c1] dark:bg-meta-4"
                  }`}
                >
                  <Image
                    src={`/assets/img/navigation-icon/confirmation-letter.svg`}
                    alt=""
                    height={20}
                    width={20}
                    className="h-6 w-6"
                  ></Image>

                  <span className="hover:pl-4 duration-500 text-white">
                    Confirmation Letter
                  </span>
                </Link>
              </li>
              {/* <!-- Menu Item Confimation Letter --> */}
              {/* <!-- Menu Item Confimation Letter --> */}
              <li>
                <Link
                  href="#"
                  className={`group relative flex items-center gap-3 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out   ${
                    pathname.includes("confimation_letter") &&
                    "bg-white text-[#0675c1] dark:bg-meta-4"
                  }`}
                >
                  <Image
                    src={`/assets/img/navigation-icon/setting.svg`}
                    alt=""
                    height={20}
                    width={20}
                    className="h-6 w-6"
                  ></Image>

                  <span className="hover:pl-4 duration-500 text-white">
                    Setting
                  </span>
                </Link>
              </li>
              <hr style={{ width: "100%" }}></hr>
              {/* Facebook */}
              <li>
                <Link
                  href="#"
                  className={`group relative flex items-center gap-3 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out  ${
                    pathname.includes("confimation_letter") &&
                    "bg-white text-[#0675c1] dark:bg-meta-4"
                  }`}
                >
                  <Image
                    src={`/assets/img/navigation-icon/facebook_for_web.svg`}
                    alt=""
                    height={20}
                    width={20}
                    className="h-6 w-6"
                  ></Image>

                  <span className="hover:pl-4 duration-500 text-white">
                    Join Guardian Community
                  </span>
                </Link>
              </li>
              {/* <!-- Menu Item Confimation Letter --> */}
              {/* How It Works */}

              <li>
                <Link
                  href="#"
                  className={`group relative flex items-center gap-3 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out  dark:hover:bg-meta-4 ${
                    pathname.includes("confimation_letter") &&
                    "bg-white text-[#0675c1] dark:bg-meta-4"
                  }`}
                >
                  <Image
                    src={`/assets/img/navigation-icon/how-it-works-icon.svg`}
                    alt=""
                    height={20}
                    width={20}
                    className="h-6 w-6"
                  ></Image>

                  <span className="hover:pl-4 duration-500 text-white">
                    How It Works
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default GuardianSidebar;
