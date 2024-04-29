import JobNavbar from "@/components/Joblist/JobNavbar/JobNavbar";
import JobListSidebar from "@/components/jobListSidebar/JobListSidebar";

const JobLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full flex flex-row">
      <div className="md:w-1/5 hidden md:block bg-primary ">
        <JobListSidebar></JobListSidebar>
      </div>
      <div className="md:w-4/5 w-full">
        <JobNavbar></JobNavbar>
        <div className="md:px-6 w-full">{children}</div>
      </div>
    </div>
  );
};

export default JobLayout;
