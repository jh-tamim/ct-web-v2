import { Button } from "@nextui-org/react";

const Button1 = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Button
      color="primary"
      className="bg-primary border text-white  rounded  hover:border-blue-500 hover:bg-white hover:text-blue-500"
    >
      {children}
    </Button>
  );
};

export default Button1;
