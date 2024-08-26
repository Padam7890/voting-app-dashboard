import { mixed, object, string } from "yup"

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"]
const MAX_FILE_SIZE = 50 * 1024 // 50KB

export const SponsersInitialValue = {
  title: "",
  contact: "",
  largeTitle: "",
  shortContent: "",
  logo: null as string | File | null,
}

export const EditSponsersInitialValue = {
  title: "",
  contact: "",
  largeTitle: "",
  shortContent: "",
  logo: null as string | File | null,
  Existinglogo:''
}


export const EditValidationSchema = object({
  title: string().required("Title is required"),
  contact: string().required("Contact is required"),
  largeTitle: string().required("Large Title is required"),
  shortContent: string().required("Short Content is required"),
  Existinglogo:mixed(),
  logo: mixed()
    .test(
      "fileFormat",
      "Only JPG, JPEG, and PNG files are allowed",
      (value: File | null | any) => {
        if (value) {
          return SUPPORTED_FORMATS.includes(value.type)
        }
        return true
      },
    )
    .test(
      "fileSize",
      "File size must be less than 50KB",
      (value: File | null | any) => {
        if (value) {
          return value.size <= MAX_FILE_SIZE
        }
        return true
      },
    ),
})


export const ValidationSchema = object({
  title: string().required("Title is required"),
  contact: string().required("Contact is required"),
  largeTitle: string().required("Large Title is required"),
  shortContent: string().required("Short Content is required"),
  logo: mixed()
    .required("logo is required")
    .test(
      "fileFormat",
      "Only JPG, JPEG, and PNG files are allowed",
      (value: File | null | any) => {
        if (value) {
          return SUPPORTED_FORMATS.includes(value.type)
        }
        return true
      },
    )
    .test(
      "fileSize",
      "File size must be less than 50KB",
      (value: File | null | any) => {
        if (value) {
          return value.size <= MAX_FILE_SIZE
        }
        return true
      },
    ),
})
