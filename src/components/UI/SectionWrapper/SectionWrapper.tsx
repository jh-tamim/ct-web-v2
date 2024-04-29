import React from "react";

const SectionWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="container mx-auto  md:px-0 px-4">{children}</div>;
};

export default SectionWrapper;
