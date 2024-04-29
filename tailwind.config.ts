import type { Config } from "tailwindcss";
// tailwind.config.js
import { nextui } from "@nextui-org/react";
import { AlertFunctions, AlertProps } from "@/components/SweetAlert/SweetAlert";
import Swal from "sweetalert2";

/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    // ...
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
    container2: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        primary: "#0675c1",
        white: "#fff",
        grayCot: "#8c8484",
        marin: "#d81b60",
        green: "#00a65a",
        purpleMode: "#614BC3",
      },
      container: {
        screens: {
          sm: "600px",
          md: "1100px",
        },
      },

      borderRadius: {
        "4xl": "32px",
      },
    },
  },

  darkMode: "class",

  plugins: [nextui()],
};

export default config;

export const useAlert = (): AlertFunctions => {
  const success = (props: AlertProps) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: props.title,
      showConfirmButton: false,
      timer: 3000,
    });
  };

  const error = (props: AlertProps) => {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: props.title,
      showConfirmButton: false,
      timer: 5000,
    });
  };

  const warning = (props: AlertProps) => {
    Swal.fire({
      position: "top-end",
      icon: "warning",
      title: props.title,
      showConfirmButton: false,
      timer: 5000,
    });
  };

  const info = (props: AlertProps) => {
    Swal.fire({
      position: "top-end",
      icon: "info",
      title: props.title,
      showConfirmButton: false,
      timer: 3000,
    });
  };

  const infoCenter = (props: AlertProps, cb: (value: any) => void) => {
    Swal.fire({
      html: props.html,
      width: props.width,
      title: props.title,
      showConfirmButton: false,
      showCloseButton: true,
      timer: 90000,
    }).then((result) => {
      cb(result.value);
    });
  };

  const confirm = (props: AlertProps, cb: (value: any) => void) => {
    Swal.fire({
      title: props.title,
      text: props.text,
      width: props.width,
      html: props.html,
      icon: props.icon,
      showCancelButton: props.showCancelButton,
      cancelButtonText: props.cancelButtonText
        ? props.cancelButtonText
        : "Cancel",
      confirmButtonText: props.confirmButtonText,
    }).then((result) => {
      if (result.value) {
        cb(result.value);
      }
    });
  };

  return { success, error, warning, info, infoCenter, confirm };
};
