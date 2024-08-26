import { toast, ToastOptions } from "react-toastify"
const config: ToastOptions<unknown> = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
}
export const successToast = (message: string) => {
  if (message) {
    toast.success(message, config);
  }
};

export const warningToast = (message: string) => {  
  if (message) {
    toast.warning(message, config);
  }
};

export const errorToast = (message: string) => {
  if (message) {
    toast.error(message, config);
  }
};

export const loadingToast = (message: string) =>{
  if (message) {
    toast.loading(message , config);
  }
};
export const dismissToast = () => {
  toast.dismiss()
}
