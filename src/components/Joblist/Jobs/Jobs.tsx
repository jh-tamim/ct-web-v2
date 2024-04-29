import { JobDataTypes } from "@/app/job/list/page";
import { Card, CardHeader, CardBody, Button, Badge } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import {
  FaPuzzlePiece,
  FaMoneyBillWave,
  FaBook,
  FaMale,
  FaFemale,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { BiMaleFemale } from "react-icons/bi";
import Image from "next/image";
import TextDecoration from "@/components/TextDecoration/TextDecoration";
import { Flex, Tag } from "antd";
import Button1 from "@/components/UI/Button/Button1";

interface jobTypes {
  key: number;
  items: JobDataTypes;
}

const Jobs = (props: jobTypes) => {
  return (
    <div>
      <div
        // shadow="sm"
        className="w-full relative p-6 border-b py-7 border-zinc-300  hidden md:block"
        // radius="sm"
        // isHoverable={true}
      >
        {/* image */}

        <Image
          src={
            props.items.class_image
              ? props.items.class_image
              : "https://back-office-api.caretutors.com/uploads/photo-1576675216641.svg"
          }
          height={200}
          width={200}
          className="w-[8rem] h-[8rem] absolute  bottom-6 right-0"
          alt="project image"
        />

        {/* Job Title */}

        <div className="flex md:justify-between items-start w-full">
          <div>
            <TextDecoration
              type={"subheading"}
              text={`${props.items.title}`}
              extraClass="font-semibold"
            ></TextDecoration>
            <div className="flex justify-between mt-2 w-full gap-10">
              <TextDecoration
                type={"paragraph"}
                text={`Job Id: ${props.items.job_id}`}
                extraClass="text-grayCot"
              ></TextDecoration>

              <TextDecoration
                type={"paragraph"}
                text={`Tuition Type : ${props.items.tuition_type}`}
                extraClass="text-grayCot"
              ></TextDecoration>
              <TextDecoration
                type={"paragraph"}
                text={`Posted Date : ${props.items.posted_date}`}
                extraClass="text-grayCot"
              ></TextDecoration>
            </div>
          </div>

          <div className="flex flex-col ">
            <TextDecoration
              type={"subheading"}
              text={`${props.items.salary}`}
              extraClass="flex flex-wrap"
              mode="bold"
            ></TextDecoration>
            <TextDecoration
              type={"paragraph"}
              text={`Salary`}
              extraClass="text-grayCot self-end"
              mode="bold"
            ></TextDecoration>
          </div>
        </div>

        <div className="my-6 flex gap-10 items-center">
          {/* location */}
          <div className="flex flex-row items-center gap-2">
            <HiLocationMarker color="#0675c1"></HiLocationMarker>
            <TextDecoration
              type={"paragraph"}
              text={`Location :${props.items.city}, ${props.items.location} `}
              extraClass="text-grayCot"
            ></TextDecoration>
          </div>

          {/*  */}

          {props.items.preferred_gender === "Male" ? (
            <div className="flex gap-4 items-center">
              <FaMale color="#00a65a"></FaMale>
              <TextDecoration
                type={"paragraph"}
                text={`Male tutor preferred `}
                extraClass="text-grayCot"
              ></TextDecoration>
            </div>
          ) : props.items.preferred_gender === "Female" ? (
            <div className="flex gap-4 items-center">
              <FaFemale color="#d81b60"></FaFemale>
              <TextDecoration
                type={"paragraph"}
                text={`Female tutor preferred `}
                extraClass="text-grayCot"
              ></TextDecoration>
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <BiMaleFemale color="#614BC3"></BiMaleFemale>
              <TextDecoration
                type={"paragraph"}
                text={`Any tutor preferred `}
                extraClass="text-grayCot"
              ></TextDecoration>
            </div>
          )}
        </div>

        {/* other */}

        <div className="flex flex-row gap-2 items-center w-full justify-between">
          <div className="flex items-center gap-2">
            <FaBook color="#0675c1"></FaBook>
            <TextDecoration
              type={"paragraph"}
              text={`Subjects :`}
              extraClass="text-grayCot"
            ></TextDecoration>
            {/* <Flex gap="4px 0" wrap="wrap">
              {props.items.subjects?.split(",")?.map((eText, index) => {
                return (
                  <Tag key={index} color="blue">
                    <TextDecoration
                      mode="bold"
                      text={`${eText}`}
                      type="paragraph"
                    ></TextDecoration>
                  </Tag>
                );
              })}
            </Flex> */}

            <div className="flex gap-2 flex-wrap">
              {/* {props.items.subjects?.split(",")?.map((eText, index) => {
                return (
                  <Badge
                    content={eText}
                    shape="circle"
                    color="primary"
                    key={index}
                  ></Badge>
                );
              })} */}
            </div>
          </div>

          <Button1>Details</Button1>
        </div>
      </div>

      <div className="md:hidden p-2 border-b border-zinc-300">
        <div className="flex flex-col space-y-2 ">
          <Image
            src={props.items.class_image ? props.items.class_image : `null`}
            alt=""
            className="absolute  h-[8rem] w-[8rem] right-0 bottom-5"
            height={150}
            width={150}
          ></Image>

          <TextDecoration
            type={"subheading"}
            text={`${props.items.title}  -${props.items.salary}`}
            mode="bold"
          ></TextDecoration>
          <TextDecoration
            type={"paragraph"}
            mode="bold"
            text={`Job Id: ${props.items.job_id}`}
            extraClass="text-grayCot"
          ></TextDecoration>

          <TextDecoration
            type={"paragraph"}
            text={`Tuition Type : ${props.items.tuition_type}`}
            extraClass="text-grayCot"
          ></TextDecoration>
          <TextDecoration
            type={"paragraph"}
            text={`Posted Date : ${props.items.posted_date}`}
            extraClass="text-grayCot"
          ></TextDecoration>

          <div className="flex flex-row items-center gap-2">
            <HiLocationMarker color="#0675c1"></HiLocationMarker>
            <TextDecoration
              type={"paragraph"}
              text={`Location : ${props.items.city}, ${props.items.location} `}
              extraClass="text-grayCot"
            ></TextDecoration>
          </div>

          {props.items.preferred_gender === "Male" ? (
            <div className="flex gap-4 items-center">
              <FaMale color="#00a65a"></FaMale>
              <TextDecoration
                type={"paragraph"}
                text={`Male tutor preferred `}
                extraClass="text-grayCot"
              ></TextDecoration>
            </div>
          ) : props.items.preferred_gender === "Female" ? (
            <div className="flex gap-4 items-center">
              <FaFemale color="#d81b60"></FaFemale>
              <TextDecoration
                type={"paragraph"}
                text={`Female tutor preferred `}
                extraClass="text-grayCot"
              ></TextDecoration>
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <BiMaleFemale color="#614BC3"></BiMaleFemale>
              <TextDecoration
                type={"paragraph"}
                text={`Any tutor preferred `}
                extraClass="text-grayCot"
              ></TextDecoration>
            </div>
          )}

          <TextDecoration
            type={"paragraph"}
            text={`Subjects :`}
            extraClass="text-grayCot"
          ></TextDecoration>
          <Flex gap="4px 0" wrap="wrap">
            {props.items.subjects?.split(",")?.map((e, index) => {
              return (
                <Tag key={index} color="blue">
                  <TextDecoration
                    mode="bold"
                    text={`${e}`}
                    type="paragraph"
                  ></TextDecoration>
                </Tag>
              );
            })}
          </Flex>

          <div className="flex justify-end items-end">
            <Button1>Details</Button1>
          </div>

          {/* <div className="flex flex-row gap-2 items-center w-full justify-between">
            <div className="flex items-center gap-2">
              <FaBook color="#0675c1"></FaBook>
              <TextDecoration
                type={"paragraph"}
                text={`Subjects :`}
                extraClass="text-grayCot"
              ></TextDecoration>
              <Flex gap="4px 0" wrap="wrap">
                {props.items.subjects?.split(",")?.map((e, index) => {
                  return (
                    <Tag key={index} color="blue">
                      <TextDecoration
                        mode="bold"
                        text={`${e}`}
                        type="paragraph"
                      ></TextDecoration>
                    </Tag>
                  );
                })}
              </Flex>
            </div>

            <Button1>Details</Button1>
          </div> */}

          {/* <TextDecoration
            type={"subheading"}
            text={`Salary: ${props.items.salary}`}
            extraClass="flex flex-wrap"
            mode="bold"
          ></TextDecoration> */}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
