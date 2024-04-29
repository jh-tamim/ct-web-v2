import { TextType } from "./TextType";

const TextDecoration = (props: TextType) => {
  let styles = "";

  switch (props.mode) {
    case "normal":
      styles += " font-normal";
      break;
    case "bold":
      styles += " font-bold";
      break;
    case "extra-bold":
      styles += " font-extra-bold";
      break;
    default:
      styles = "";
      break;
  }

  // switch (props.color) {
  //   case "normal":
  //     fontClass += " font-normal";
  //     break;
  //   case "theme":
  //     fontClass += " font-bold";
  //     break;
  //   case "success":
  //     fontClass += " ";
  //     break;
  //   default:
  //     fontClass = "";
  //     break;
  // }

  if (props.type === "heading") {
    return (
      <h1 className={`${styles} md:text-3xl text-2xl ${props.extraClass}`}>
        {props.text}
      </h1>
    );
  }
  if (props.type === "subheading") {
    return (
      <h2 className={`${styles} md:text-xl text-base	 ${props.extraClass}`}>
        {props.text}
      </h2>
    );
  }
  if (props.type === "paragraph") {
    return (
      <p className={` ${styles} text-xs		md:text-base		 ${props.extraClass}`}>
        {props.text}
      </p>
    );
  }
};

export default TextDecoration;
