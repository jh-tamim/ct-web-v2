"use client";
import { ReactNode } from "react";
import CountUp from "react-countup";
interface Props {
  children: ReactNode;
}
const CountDown = ({ children }: Props) => {
  const endValue = parseFloat(children as string);

  return <CountUp duration={5} end={endValue} />;
};

export default CountDown;
