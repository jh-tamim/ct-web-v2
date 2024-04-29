import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TextDecoration from "@/components/TextDecoration/TextDecoration";

const DropDownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <li className="relative p-4">
      <Link
        ref={trigger}
        onClick={() => {
          setNotifying(false);
          setDropdownOpen(!dropdownOpen);
        }}
        href="#"
        className="relative flex md:h-13 md:w-13 items-center justify-center  hover:text-primary "
      >
        {/* <span
          className={`absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1 ${
            notifying === false ? "hidden" : "inline"
          }`}
        >
          <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
        </span> */}

        <Image
          src={"/assets/img/icon/notification.png"}
          alt=""
          height={20}
          width={20}
        ></Image>
      </Link>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute -right-27 mt-3 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default  right-0 w-80 ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <div className="px-4 py-3">
          <TextDecoration
            type={"paragraph"}
            text={"Notification"}
          ></TextDecoration>
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto px-4">
          <li>
            <Link
              className="flex flex-col gap-2 border-t border-stroke px-4 py-3 hover:bg-gray-2 "
              href="#"
            >
              <TextDecoration
                type="paragraph"
                text={`  Edit your information in a swipe`}
                extraClass="text-start"
              ></TextDecoration>
              <TextDecoration
                type="paragraph"
                text={`Sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim.`}
                extraClass="text-start"
              ></TextDecoration>
              <TextDecoration
                type="paragraph"
                text={`12 May, 2025`}
                extraClass="text-start"
              ></TextDecoration>
            </Link>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default DropDownNotification;
