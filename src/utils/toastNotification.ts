// src/utils/toastNotifications.ts
import { toast } from "react-toastify";

export const showToast = (
  status: "loading" | "success" | "error",
  message: string,
) => {
  switch (status) {
    case "loading":
      toast.info(message, { autoClose: false, toastId: "loading" });
      break;
    case "success":
      toast.update("loading", {
        render: message,
        type: "success",
        autoClose: 5000,
      });
      break;
    case "error":
      toast.update("loading", {
        render: message,
        type: "error",
        autoClose: 5000,
      });

      break;
    default:
      break;
  }
};


//dismiss toast 
export const dismissToast = ()=>{
  toast.dismiss();
}

