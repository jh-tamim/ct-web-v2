"use client";

import SignInSwipper from "@/components/Signin/Swipper/SignInSwipper";
import TextDecoration from "@/components/TextDecoration/TextDecoration";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { ImEnter } from "react-icons/im";
import { FaCheckCircle } from "react-icons/fa";
import SignInSwipper2 from "@/components/Signin/Swipper/SignInSwipper2";
import useAlert from "@/components/SweetAlert/SweetAlert";

// sign in
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface ImageObject {
  img: string;
  id: number;
}
const imageArray: ImageObject[] = [
  { img: "/assets/img/illustration/forGuardian/sliders/001.png", id: 1 },
  { img: "/assets/img/illustration/forGuardian/sliders/002.png", id: 2 },
  { img: "/assets/img/illustration/forGuardian/sliders/003.png", id: 3 },
];

const SignIn = () => {
  const router = useRouter();

  const [emblaRef] = useEmblaCarousel({ loop: true });
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const alert = useAlert();

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.id);
  };

  // email and password

  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    try {
      e.preventDefault();

      // Handle form submission, e.g., send data to server
      if (selectedOption === null) {
        alert.info({ title: "Please select the user type!! " });
      }

      if (!email) {
        alert.warning({ title: "Please fill up all the required fields" });
      }
      if (!password) {
        alert.warning({ title: "Please fill up all the required fields" });
      }

      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
    } catch (error) {
      alert.error({ title: "An error occurred. Please try again later." });
    }
  };

  return (
    <div className="w-full mt-0 bg-[#f2f5fc]">
      <div className="container mx-auto grid md:grid-cols-2 px-4 md:px-0 items-center">
        <div className="hidden md:block">
          {selectedOption === null || selectedOption === "tutor" ? (
            <SignInSwipper2></SignInSwipper2>
          ) : (
            <>
              {" "}
              <SignInSwipper></SignInSwipper>
            </>
          )}
        </div>
        <div className="flex flex-col items-start justify-start mt-8">
          <TextDecoration
            type={"heading"}
            text={"Welcome"}
            mode="bold"
            extraClass="text-primary"
          ></TextDecoration>

          <TextDecoration
            type="paragraph"
            text="Sign In to Continue"
          ></TextDecoration>

          <div className="grid md:grid-cols-2 grid-cols-1 mt-4 gap-4">
            {/* guardian */}
            <label
              htmlFor="guardian"
              className="relative w-full cursor-pointer"
            >
              <input
                className="peer hidden"
                type="radio"
                id="guardian"
                name="userType"
                onChange={handleOptionChange}
                checked={selectedOption === "guardian"}
              />
              <div className="signIn-content p-4">
                <Image
                  src="/assets/img/avataaar/Guardian-01.png"
                  alt=""
                  width={66}
                  height={70}
                  className="guardian-image"
                />
                <div className="flex flex-col">
                  <TextDecoration
                    type={"paragraph"}
                    text={"Guardian or Student"}
                    mode="bold"
                  />
                  <TextDecoration
                    type={"paragraph"}
                    text={"Select, If you're looking for a tutor"}
                    mode="normal"
                  />
                </div>
                {selectedOption === "guardian" && (
                  <div
                    className="signIn-check"
                    style={{ marginLeft: "31px", position: "absolute" }}
                  >
                    <FaCheckCircle
                      color="#0675c1"
                      size={20}
                      style={{ marginLeft: "31px" }}
                    />
                  </div>
                )}
              </div>
            </label>

            {/* tutor */}
            <label htmlFor="tutor" className="relative w-full cursor-pointer">
              <input
                className="peer hidden"
                type="radio"
                id="tutor"
                name="userType"
                onChange={handleOptionChange}
                checked={selectedOption === "tutor"}
              />
              <div className="signIn-content p-4">
                <Image
                  src="/assets/img/avataaar/Tutor-01.png"
                  alt=""
                  width={66}
                  height={70}
                  className="tutor"
                />
                <div className="flex flex-col">
                  <TextDecoration
                    type={"paragraph"}
                    text={"Tutor"}
                    mode="bold"
                  />
                  <TextDecoration
                    type={"paragraph"}
                    text={"Select, If you're looking for a tutor"}
                    mode="normal"
                  />
                </div>
                {selectedOption === "tutor" && (
                  <div className="signIn-check">
                    <FaCheckCircle
                      color="#0675c1"
                      size={20}
                      style={{ marginLeft: "31px" }}
                    />
                  </div>
                )}
              </div>
            </label>
          </div>

          <Card className="py-4 w-full p-4 mt-4 mb-5">
            <CardBody>
              <form onSubmit={handleSubmit}>
                <Input
                  type="email"
                  variant="underlined"
                  label="Email"
                  isRequired
                  className="mb-5"
                  placeholder="name@example.com"
                  value={email}
                  onChange={handleEmailChange}
                />
                <Input
                  variant="underlined"
                  label="Password"
                  className="mb-5"
                  isRequired
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <FaRegEye className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <FaRegEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                />

                <Button
                  endContent={<ImEnter />}
                  type="submit"
                  color="primary"
                  className="bg-primary border text-white rounded hover:border-blue-500 hover:bg-white hover:text-blue-500 mb-5 w-full"
                >
                  Sign In
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
