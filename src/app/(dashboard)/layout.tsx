// import SignInProvider from "@/components/SigninProvider/SignInProvider";
import GuardianLayout from "@/components/UI/GuardianLayout/GuardianLayout";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <GuardianLayout>{children}</GuardianLayout>;
};

export default layout;
