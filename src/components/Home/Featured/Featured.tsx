"use client";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import TextDecoration from "@/components/TextDecoration/TextDecoration";

interface NewsItem {
  name: string;
  image: string;
  link: string;
}
const AllNews: NewsItem[] = [
  {
    name: "The Daily Star",
    image: "/assets/img/newsLogo/news02.png",
    link: "https://www.thedailystar.net/bytes/apps/news/caretutorscom-launches-new-app-1734121",
  },
  {
    name: "Ittefaq",
    image: "/assets/img/newsLogo/news03.png",
    link: "https://www.ittefaq.com.bd/130502/%E0%A6%95%E0%A7%87%E0%A7%9F%E0%A6%BE%E0%A6%B0-%E0%A6%9F%E0%A6%BF%E0%A6%89%E0%A6%9F%E0%A6%B0%E0%A6%B8%E0%A7%87%E0%A6%B0-%E0%A6%B8%E0%A7%87%E0%A6%AC%E0%A6%BE-%E0%A6%AE%E0%A6%BF%E0%A6%B2%E0%A6%AC%E0%A7%87-%E0%A6%85%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A1%E0%A7%8D%E0%A6%B0%E0%A7%9F%E0%A7%87%E0%A6%A1-%E0%A6%85%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AA%E0%A7%87",
  },
  {
    name: "Jugantor",
    image: "/assets/img/newsLogo/news04.png",
    link: "https://www.jugantor.com/tech/116389/%E0%A6%B6%E0%A7%81%E0%A6%B0%E0%A7%81%E0%A6%A4%E0%A7%87%E0%A6%87-%E0%A6%85%E0%A6%B0%E0%A7%8D%E0%A6%A5-%E0%A6%89%E0%A6%AA%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%9C%E0%A6%A8%E0%A7%87%E0%A6%B0-%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A6%BE-%E0%A6%95%E0%A6%B0%E0%A6%B2%E0%A7%87-%E0%A6%B9%E0%A6%AC%E0%A7%87-%E0%A6%A8%E0%A6%BE",
  },
  {
    name: "Bangla Tribune",
    image: "/assets/img/newsLogo/news05.png",
    link: "https://www.banglatribune.com/tech-and-gadget/tech-talk/821218/%E0%A7%A7%E0%A7%A7-%E0%A6%AC%E0%A6%9B%E0%A6%B0-%E0%A6%85%E0%A6%AB%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%A8-%E0%A6%85%E0%A6%A8%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%A8%E0%A7%87-%E0%A6%9F%E0%A6%BF%E0%A6%89%E0%A6%B6%E0%A6%A8-%E0%A6%B8%E0%A7%87%E0%A6%AC%E0%A6%BE-%E0%A6%A6%E0%A6%BF%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87",
  },
  {
    name: "Prothom Alo",
    image: "/assets/img/newsLogo/news01.png",
    link: "https://www.prothomalo.com/technology/%E0%A6%85%E0%A6%A8%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%A8%E0%A7%87-%E0%A6%9F%E0%A6%BF%E0%A6%89%E0%A6%B6%E0%A6%A8%E0%A6%BF%E0%A6%B0-%E0%A6%AA%E0%A7%8D%E0%A6%B2%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9F%E0%A6%AB%E0%A6%B0%E0%A7%8D%E0%A6%AE",
  },
  {
    name: "Daily Sun",
    image: "/assets/img/newsLogo/news07.png",
    link: "https://www.daily-sun.com/printversion/details/429407/CareTutors-celebrates-seventh-anniv",
  },
  {
    name: "Bangla News",
    image: "/assets/img/newsLogo/news13.png",
    link: "https://www.banglanews24.com/corporatecorner/news/bd/1217293.details",
  },
  {
    name: "Future Startup",
    image: "/assets/img/newsLogo/news08.png",
    link: "https://futurestartup.com/2017/09/23/built-interview-masud-parvez-raju-founder-ceo-caretutors-com",
  },
  {
    name: "The Business Standard",
    image: "/assets/img/newsLogo/news09.png",
    link: "https://youtu.be/D_zlWIbTx90",
  },
  {
    name: "TechShoror",
    image: "/assets/img/newsLogo/news12.png",
    link: "https://techshohor.com/127863/%E0%A6%9F%E0%A6%BF%E0%A6%89%E0%A6%9F%E0%A6%B0%E0%A6%B8-%E0%A6%96%E0%A7%81%E0%A6%81%E0%A6%9C%E0%A7%87-%E0%A6%A6%E0%A6%BF%E0%A6%A4%E0%A7%87-%E0%A6%93%E0%A7%9F%E0%A7%87%E0%A6%AC%E0%A6%B8%E0%A6%BE/",
  },
  {
    name: "Noyadigonto",
    image: "/assets/img/newsLogo/news14.png",
    link: "https://www.dailynayadiganta.com/computer/788096/-%E0%A6%85%E0%A6%A8%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%A8%E0%A7%87-%E0%A6%9F%E0%A6%BF%E0%A6%89%E0%A6%B6%E0%A6%A8-%E0%A6%96%E0%A7%87%E0%A6%BE%E0%A6%81%E0%A6%9C%E0%A6%BE%E0%A6%B0-%E0%A6%AA%E0%A7%8D%E0%A6%B2%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9F%E0%A6%AB%E0%A6%B0%E0%A7%8D%E0%A6%AE-%E0%A6%95%E0%A7%87%E0%A7%9F%E0%A6%BE%E0%A6%B0%E0%A6%9F%E0%A6%BF%E0%A6%89%E0%A6%9F%E0%A6%B0%E0%A6%B8",
  },
  {
    name: "Daily observer",
    image: "/assets/img/newsLogo/news15.png",
    link: "https://www.observerbd.com/news.php?id=444418",
  },
];

const Featured = () => {
  return (
    <div>
      <div className="container m-auto md:px-4 p-4 ">
        <div className="flex items-center justify-center flex-col">
          <TextDecoration
            type={"heading"}
            text={"We were featured on"}
            mode="bold"
          ></TextDecoration>
        </div>
      </div>
      {/* Swipper */}

      <div>
        <Swiper
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: true,
          }}
          className="mb-5 w-5/6"
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          {AllNews.map((news, index) => (
            <SwiperSlide key={index}>
              <Link href={news.link} passHref={true} target="_blank">
                <div className="flex items-center justify-center w-full">
                  <Image
                    src={news.image}
                    alt={news.name}
                    className="w-full h-auto md:w-255 md:h-85"
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Featured;
