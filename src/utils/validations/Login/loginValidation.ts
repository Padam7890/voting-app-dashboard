import { object, string } from "yup";

export const loginValidation = object({
    email:string().required().email(),
    password: string().required().min(8)
})