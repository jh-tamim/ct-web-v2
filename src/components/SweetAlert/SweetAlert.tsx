"use client";
import "./module.sweetAlert.css";

import Swal from "sweetalert2";

export interface AlertProps {
  title: string;
  html?: string;
  width?: string;
  height?: string;
  text?: string;
  icon?: "success" | "error" | "warning" | "info";
  showCancelButton?: boolean;
  cancelButtonText?: string;
  confirmButtonText?: string;
}

export interface AlertFunctions {
  success: (props: AlertProps) => void;
  error: (props: AlertProps) => void;
  warning: (props: AlertProps) => void;
  info: (props: AlertProps) => void;
  infoCenter: (props: AlertProps, cb: (value: any) => void) => void;
  confirm: (props: AlertProps, cb: (value: any) => void) => void;
}

const useAlert = (): AlertFunctions => {
  const success = (props: AlertProps) => {
    Swal.fire({
      customClass: {
        icon: "custom-icon-class", // Add custom class for the icon
        title: "custom-title-class", // Add custom class for the title
      },
      width: 300,
      position: "top-end",
      icon: "success",
      title: props.title,
      showConfirmButton: false,
      timer: 3000,
    });
  };

  const error = (props: AlertProps) => {
    Swal.fire({
      customClass: {
        icon: "custom-icon-class", // Add custom class for the icon
        title: "custom-title-class", // Add custom class for the title
      },
      width: 300,
      position: "top-end",
      icon: "error",
      title: props.title,
      showConfirmButton: false,
      timer: 5000,
    });
  };

  const warning = (props: AlertProps) => {
    Swal.fire({
      customClass: {
        icon: "custom-icon-class", // Add custom class for the icon
        title: "custom-title-class", // Add custom class for the title
      },
      width: 300,
      position: "top-end",
      icon: "warning",
      title: props.title,
      showConfirmButton: false,
      timer: 5000,
    });
  };

  const info = (props: AlertProps) => {
    Swal.fire({
      customClass: {
        icon: "custom-icon-class", // Add custom class for the icon
        title: "custom-title-class", // Add custom class for the title
      },
      width: 300,
      position: "top-end",
      icon: "info",
      title: props.title,
      showConfirmButton: false,
      timer: 3000,
    });
  };

  const infoCenter = (props: AlertProps, cb: (value: any) => void) => {
    Swal.fire({
      customClass: {
        icon: "custom-icon-class", // Add custom class for the icon
        title: "custom-title-class", // Add custom class for the title
      },
      width: 300,
      html: props.html,
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

export default useAlert;
