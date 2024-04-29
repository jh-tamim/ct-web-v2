import Footer from "@/components/Footer/Footer";
import TopNavbar from "@/components/Home/Navbar/TopNavbar";
import TopBar from "@/components/Home/TopBar/TopBar";

// swipper

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="">
      <TopBar></TopBar>
      <TopNavbar></TopNavbar>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default PublicLayout;
