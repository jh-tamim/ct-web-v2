"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@nextui-org/react";

import { IoMdArrowRoundBack } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import Image from "next/image";
import Button1 from "@/components/UI/Button/Button1";

const JobNavbar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalPlacement, setModalPlacement] = useState("bottom");

  return (
    <main className=" sticky top-0 right-0 w-full bg-gray-50 transition-all z-[999] shadow-md ">
      <div className=" w-full h-[80px] bg-white border-b">
        <div className=" m-auto w-full h-full flex md:justify-end items-center">
          <div className="w-[100%] flex  flex-row justify-between px-4 md:hidden ">
            <Link href="/">
              <IoMdArrowRoundBack size={24}></IoMdArrowRoundBack>
            </Link>
            <h2>Jobs</h2>
            <IoFilterOutline size={24} onClick={onOpen}></IoFilterOutline>
          </div>

          <div className="hidden md:block  md:p-2 md:px-6 ">
            <div className="flex flex-row justify-end items-center gap-4">
              <Link href="/signin" passHref>
                <p className="text-black-500 hover:text-blue-500">Sign In</p>
              </Link>
              <Link href="/job/list" passHref>
                <p className="text-black-500 hover:text-blue-500">Job Board</p>
              </Link>
              <Button1>Become a Tutor</Button1>
            </div>
          </div>
        </div>
        {/* modals */}
      </div>

      <Modal isOpen={isOpen} placement="bottom" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </main>
  );
};

export default JobNavbar;
