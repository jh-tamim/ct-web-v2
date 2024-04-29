import Activity from "@/components/Home/Activity/Activity";
import Category from "@/components/Home/Category/Category";
import Featured from "@/components/Home/Featured/Featured";
import GuardianWork from "@/components/Home/Guardian-work/GuardianWork";
import GuardianTestimonial from "@/components/Home/GuardianTestimonial/GuardianTestimonial";
import Hero from "@/components/Home/Hero/Hero";
import MobileApps from "@/components/Home/MobileApps/MobileApps";
import TopNavbar from "@/components/Home/Navbar/TopNavbar";
import TopBar from "@/components/Home/TopBar/TopBar";
import TutorWork from "@/components/Home/TutorWork/TutorWork";
import TutoringOption from "@/components/Home/TutoringOption/TutoringOption";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Activity></Activity>
      <TutoringOption></TutoringOption>
      <GuardianWork></GuardianWork>
      <Category></Category>
      <Featured></Featured>
      <GuardianTestimonial></GuardianTestimonial>
      <TutorWork></TutorWork>
      <MobileApps></MobileApps>
    </div>
  );
};

export default Home;
