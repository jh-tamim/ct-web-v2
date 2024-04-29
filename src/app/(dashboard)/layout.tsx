import SignInProvider from "@/components/SigninProvider/SignInProvider";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <SignInProvider>{children}</SignInProvider>;
};

export default layout;
