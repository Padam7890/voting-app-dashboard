import { toast } from "react-toastify";

export const showToast = (
  status: "loading" | "success" | "error",
  message: string,
  toastId: string = "loading"
) => {
  switch (status) {
    case "loading":
      // Show loading toast with unique toastId
      toast.info(message, { autoClose: false, toastId });
      break;
    case "success":
      // Ensure toast exists before updating
      toast.update(toastId, {
        render: message,
        type: "success",
        autoClose: 5000,
      });
      break;
    case "error":
      toast.update(toastId, {
        render: message,
        type: "error",
        autoClose: 5000,
      });
      break;
    default:
      break;
  }
};

// Dismiss specific toast
export const dismissToast = (toastId: string = "loading") => {
  toast.dismiss(toastId);
};
