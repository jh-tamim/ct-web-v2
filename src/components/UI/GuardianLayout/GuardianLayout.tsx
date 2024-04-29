"use client";

import DropdownUser from "@/components/Dashboard/DropDownUser/DropdownUser";
import GuardianSidebar from "@/components/Dashboard/Guardian/Sidebar/GuardianSidebar";
import TopDashboardNavbar from "@/components/Dashboard/TopDashboardNavbar/TopDashboardNavbar";
import { useState } from "react";

const GuardianLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <GuardianSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}

          <TopDashboardNavbar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          ></TopDashboardNavbar>
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto md:p-6 px-4 md:px-4">{children}</div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
};

export default GuardianLayout;
