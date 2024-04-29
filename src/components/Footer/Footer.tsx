import Image from "next/image";
import Link from "next/link";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaInstagram, FaYoutube, FaFacebookSquare } from "react-icons/fa";
import TextDecoration from "../TextDecoration/TextDecoration";

const Footer = () => {
  return (
    <footer className="shadow-md w-full bg-primary pt-4 ">
      <div className="container m-auto grid md:grid-cols-4 grid-cols-1  gap-8  px-4 md:px-0">
        <div className="col-span-0">
          <Image
            className="mb-[2rem]"
            src="/caretutors-white.svg"
            alt="caretutors.com"
            width={177}
            height={100}
          />

          <TextDecoration
            type={"paragraph"}
            text={`Caretutors was founded in 2012. It is Bangladesh&apos;s first, most
            trusted and leading online platform for guardians, students, and
            tutors to hire verified tutors or find tuition jobs in 13 different
            categories from anywhere in the country.`}
            extraClass="text-justify text-white"
          ></TextDecoration>
        </div>

        {/* 2nd Part */}
        <div className="flex flex-col items-start justify-start">
          <h2 className="text-white font-bold mb-[2rem]">Useful Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/terms-condition" passHref>
                <p className="text-white">Terms and Conditions</p>
              </Link>
            </li>
            <li>
              <Link href="/signup/tutor" passHref>
                <p className="text-white">Become a Tutor</p>
              </Link>
            </li>
            <li>
              <Link href="/hire-a-tutor" passHref>
                <p className="text-white">Hire a Tutor</p>
              </Link>
            </li>
            <li>
              <Link href="/tutorial" passHref>
                <p className="text-white">Tutorials</p>
              </Link>
            </li>
            <li>
              <Link href="/faq" passHref>
                <p className="text-white">FAQ</p>
              </Link>
            </li>
            <li>
              <a
                href={process.env.REACT_APP_MERCHANT_WEB_URL}
                className="text-white"
              >
                Caretutors Merchant
              </a>
            </li>
          </ul>
        </div>

        {/* 3rd */}

        <div className="flex flex-col items-start justify-start">
          <h2 className="text-white font-bold mb-[2rem]">Social</h2>

          <Link
            href="https://www.facebook.com/Caretutors/"
            passHref={true}
            target="_blank"
            className="cursor-pointer hover:text-black-500 flex flex-row items-center gap-2"
          >
            <FaFacebookSquare className="text-white hover:text-blue-500 w-4 h-4" />
            <p className="text-white">Facebook</p>
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCb_x1EDtdQgutsD_BaXf5dg"
            passHref={true}
            target="_blank"
            className="cursor-pointer hover:text-black-500 flex flex-row items-center gap-2"
          >
            <FaYoutube className="text-white hover:text-blue-500 w-4 h-4" />
            <p className="text-white">Youtube</p>
          </Link>

          <Link
            href="https://www.linkedin.com/company/care-tutors"
            passHref={true}
            target="_blank"
            className="cursor-pointer hover:text-black-500 flex flex-row items-center gap-2"
          >
            <BiLogoLinkedinSquare className="text-white hover:text-blue-500 w-4 h-4" />
            <p className="text-white">Linkedin</p>
          </Link>
          <Link
            href="https://www.instagram.com/caretutors_insta/"
            passHref={true}
            target="_blank"
            className="cursor-pointer hover:text-black-500 flex flex-row items-center gap-2"
          >
            <FaInstagram className="text-white hover:text-blue-500 w-4 h-4" />
            <p className="text-white">Instagram</p>
          </Link>

          <h2 className="text-white font-bold mb-[2rem] mt-1">
            Join Our Community
          </h2>

          <div className="flex flex-row gap-1">
            <Link
              href="https://www.facebook.com/groups/133104194784618"
              passHref={true}
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/icon/Guardians_Community.svg"
                alt="Guardian"
                width={146}
                height={40}
              ></Image>
            </Link>
            <Link
              href="https://www.facebook.com/groups/caretutors.tuition"
              passHref={true}
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/icon/Tutor_Community.svg"
                alt="Tutor"
                width={146}
                height={40}
              ></Image>
            </Link>
          </div>
        </div>

        {/* 4th  */}
        <div className="flex flex-col items-start">
          <h2 className="text-white font-bold mb-[2rem]">Office Address</h2>

          <TextDecoration
            type={"paragraph"}
            text={`Level: 2, Rangs Naharz, House: 14, Road: Shahjalal Avenue, Sector 4,
            Uttara, Dhaka 1230, Bangladesh `}
            extraClass="text-justify text-white mt-2 mb-2"
          ></TextDecoration>

          <h2 className="mt-2 text-white font-bold">Download Our App</h2>
          <div className="flex flex-row gap-1 mt-[2.9rem]">
            <Link
              href="https://www.instagram.com/caretutors_insta/"
              passHref={true}
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/landingPage/playStore.svg"
                alt="landingPage/playStore.svg"
                width={146}
                height={20}
              ></Image>
            </Link>
            <Link
              href="https://www.instagram.com/caretutors_insta/"
              passHref={true}
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/landingPage/appStore.svg"
                alt="Tutor"
                width={146}
                height={20}
              ></Image>
            </Link>
          </div>
        </div>

        {/*  */}
      </div>

      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex flex-col justify-center items-center  md:px-0 px-4 mt-[3rem]">
        <TextDecoration
          type={"paragraph"}
          text={` Copyright © 2012-2024 Caretutors Technologies Ltd. All Rights
          Reserved.`}
          mode="bold"
          extraClass="text-white text-center "
        ></TextDecoration>
        <TextDecoration
          type={"paragraph"}
          text={`Web App Version : 5.15.20`}
          mode="bold"
          extraClass="text-white"
        ></TextDecoration>

        <hr></hr>
        {/*  */}

        <p className="text-sm text-white py-3 overflow-hidden text-center ">
          <b>Disclaimer: </b>Caretutors is an online platform that connects
          learners with tutors. Caretutors do not supply tuition to those
          seeking tuition, nor do Caretutors provide or propose specific tutors
          to those seeking tutors. By considering security issues and using
          technology, Caretutors try to match tutors with learners without
          directly providing the tutoring service.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
