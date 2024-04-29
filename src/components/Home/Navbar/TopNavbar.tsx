"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

const TopNavbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full h-[5rem] bg-white border-b  z-10	 sticky top-0 ">
      <div className="container mx-auto w-full h-full flex justify-between items-center md:px-0 p-2 px-4">
        <Link href="/" passHref className="text-3xl text-indigo-600 mr-1 pt-2">
          <Image
            src="/caretutors-blue.svg"
            alt="pet"
            width={177}
            height={100}
          />
        </Link>

        <div className="hidden md:flex md:items-center gap-4">
          <Link href="/signin" passHref>
            <p className="text-black-500 hover:text-blue-500">Sign In</p>
          </Link>
          <Link href="/job/list" passHref>
            <p className="text-black-500 hover:text-blue-500">Job Board</p>
          </Link>

          <Button
            color="primary"
            className="bg-primary border text-white  rounded  hover:border-blue-500 hover:bg-white hover:text-blue-500"
          >
            Become a Tutor
          </Button>

          {/* <DarkMode></DarkMode> */}
        </div>
        {/* toggle */}
        <div className="block md:hidden ">
          {toggle ? (
            <IoMdClose
              onClick={handleClick}
              color="black-500"
              className=" hover:text-blue-500 w-7 h-7"
            />
          ) : (
            <GiHamburgerMenu
              color="black-500"
              onClick={handleClick}
              className=" hover:text-blue-500 w-7 h-7"
            />
          )}
        </div>
      </div>
      <div
        className={
          toggle
            ? "absolute z-10 p-4  bg-white w-full  md:hidden border-b"
            : "hidden"
        }
      >
        <ul>
          <Link href="/signin" passHref>
            <p className="text-black-500 hover:text-blue-500">Sign In</p>
          </Link>
          <Link href="/job/list" passHref>
            <p className="text-black-500 hover:text-blue-500">Job Board</p>
          </Link>

          <Button
            color="primary"
            className="bg-primary border text-white  rounded  hover:border-blue-500 hover:bg-white hover:text-blue-500"
          >
            Become a Tutor
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;
