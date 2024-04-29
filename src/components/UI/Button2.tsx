import { Button } from "@nextui-org/react";

const Button2 = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Button
      color="primary"
      className="bg-primary border text-white  hover:border-blue-500 hover:bg-white hover:text-blue-500  rounded-md md:w-64 md:h-10 font-semibold w-[180px] h-10 "
    >
      {children}
    </Button>
  );
};

export default Button2;
