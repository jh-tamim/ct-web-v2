import Footer from "@/components/Footer/Footer";
import TopNavbar from "@/components/Home/Navbar/TopNavbar";
import JobNavbar from "@/components/Joblist/JobNavbar/JobNavbar";
import JobLayout from "@/components/UI/JobLayout/JobLayout";
import JobListSidebar from "@/components/jobListSidebar/JobListSidebar";

const JobListLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full h-screen">
      <JobLayout>
        <div className="w-full">{children}</div>
      </JobLayout>
    </div>
  );
};

export default JobListLayout;
