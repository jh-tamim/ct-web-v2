import { MdOutlinePhone } from "react-icons/md";

import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaInstagram, FaYoutube, FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";

const TopBar = () => {
  return (
    <div className="w-full border-b h-[3rem] bg-primary">
      <div className="container mx-auto flex justify-between items-center md:px-0 p-2 sm:p-2 md:p-2 px-4">
        <div className="flex  items-center">
          <MdOutlinePhone color="#fff" />
          <a
            href="tel:+8809613441122"
            className="text-white hover:text-white-700 font-bold p-2"
          >
            <p className="text-sm">+88 09613 441122</p>
          </a>
        </div>
        <div className="flex pt-2 gap-4 items-center">
          <Link
            href="https://www.facebook.com/Caretutors/"
            passHref={true}
            target="_blank"
            className="cursor-pointer hover:text-black-500"
          >
            <FaFacebookSquare
              className="text-white hover:text-blue-500 w-7 h-7"
              style={{ transition: "color 0.3s" }}
            />
          </Link>

          <Link
            href="https://www.youtube.com/channel/UCb_x1EDtdQgutsD_BaXf5dg"
            passHref={true}
            target="_blank"
            className="cursor-pointer hover:text-black-500"
          >
            <FaYoutube
              className="text-white hover:text-blue-500 w-7 h-7"
              style={{ transition: "color 0.3s" }}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/care-tutors"
            passHref={true}
            target="_blank"
            className="cursor-pointer hover:text-black-500"
          >
            <BiLogoLinkedinSquare
              className="text-white hover:text-blue-500 w-7 h-7"
              style={{ transition: "color 0.3s" }}
            />
          </Link>

          <Link
            href="https://www.instagram.com/caretutors_insta/"
            passHref={true}
            target="_blank"
            className="cursor-pointer hover:text-black-500"
          >
            <FaInstagram
              className="text-white hover:text-blue-500 w-7 h-7"
              style={{ transition: "color 0.3s" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
