"use client";

import Image from "next/image";
import { TutoringOption } from "./TutoringOption";
import { Card } from "@nextui-org/react";
import TextDecoration from "@/components/TextDecoration/TextDecoration";

interface tutionTypes {
  key: number;
  items: TutoringOption;
}

const TutoringCard = (props: tutionTypes) => {
  return (
    <div className="flex justify-between items-center gap-4 hover:bg-white hover:border-2 border-primary border rounded-lg p-2 lg:p-5">
      <Image
        src={props.items.img}
        alt="home tutoring"
        height={100}
        width={90}
      />
      <div>
        <TextDecoration
          type={"subheading"}
          text={`${props.items.name}`}
          mode="bold"
          extraClass="text-blue-500"
        ></TextDecoration>

        <TextDecoration
          type={"paragraph"}
          text={`${props.items.description}`}
        ></TextDecoration>
      </div>
    </div>
  );
};

export default TutoringCard;
