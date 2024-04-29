import TextDecoration from "@/components/TextDecoration/TextDecoration";
import style from "./mobileApp.module.css";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@nextui-org/react";

const MobileApps = () => {
  return (
    <div className={`${style.mobileAppsSection}`}>
      <div
        className={`container mx-auto p-4 md:px-0 ${style.mobileAppsSection}`}
      >
        <div className="flex flex-col justify-between">
          <div className="flex flex-col p-4 mt-2 justify-start md:space-y-8 space-y-3">
            <TextDecoration
              type={"heading"}
              extraClass="text-white"
              mode="bold"
              text={" 1 Platform for All Tutors"}
            ></TextDecoration>
            <Card
              className={`md:w-[25%] w-[40%] flex justify-center items-center p-6`}
            >
              <div
                className={`relative md:w-52 md:h-52 md:pt-0 w-20 h-20 mx-auto`}
              >
                <Image
                  className={style.qrCode}
                  fill
                  src="/assets/img/caretutors-app-qr-code.png"
                  alt=""
                />
              </div>
              <div className="hidden md:block absolute bottom-0.5 left-1/2 transform md:-translate-x-1/2 md:w-3/4 bg-orange-500 text-white rounded-lg py-1 text-center md:mt-4">
                Scan to Download
              </div>
            </Card>

            <div className="flex flex-row gap-2">
              <div className="flex flex-row gap-1">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.caretutors"
                  passHref={true}
                  target="_blank"
                  className="cursor-pointer"
                >
                  <Image
                    src="landingPage/playStore.svg"
                    alt="landingPage/playStore.svg"
                    width={146}
                    height={20}
                  ></Image>
                </Link>
                <Link
                  href="https://apps.apple.com/us/app/caretutors/id1607736513"
                  passHref={true}
                  target="_blank"
                  className="cursor-pointer"
                >
                  <Image
                    src="landingPage/appStore.svg"
                    alt="Tutor"
                    width={149}
                    height={20}
                  ></Image>
                </Link>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MobileApps;
