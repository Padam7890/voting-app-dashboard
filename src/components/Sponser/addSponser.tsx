"use client";
import React, { useEffect } from "react";
import Input from "../smallComponents/Input";
import { useFormik } from "formik";
import Button from "../smallComponents/Button";
import {
  SponsersInitialValue,
  ValidationSchema,
} from "./SchemaValidation/SchemaVal";
import { useAddSponserMutation } from "@/redux/api/sponserApi/sponserAPi";
import { dismissToast, successToast } from "@/utils/toastNotification";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { handleError } from "@/helper/errorHandler";

const addSponser = () => {
  const router = useRouter();
  const [addSponser, { isError, isLoading, isSuccess, error }] =
    useAddSponserMutation();
  const formik = useFormik({
    initialValues: SponsersInitialValue,
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("contact", values.contact);
      formData.append("largeTitle", values.largeTitle);
      formData.append("shortContent", values.shortContent);
      if (values.logo) {
        formData.append("logo", values.logo as File);
      }
      addSponser(formData);
    },
  });

  useEffect(() => {
    if (isError) {
      handleError(error);
    } else if (isSuccess) {
      successToast("Sponser created successfully");
      console.log("Success")
      router.push("/sponser");
    } else {
      dismissToast();
    }
  }, [isError, isSuccess]);
  
  
  return (
    <div className="container ml-6 w-full">
      <form className="form" action="" onSubmit={formik.handleSubmit}>
        <div className=" flex w-full gap-7 ">
          <Input
            type="text"
            formik={formik}
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Sponser Title"
            title="Sponser Title"
          />
          <Input
            type="text"
            formik={formik}
            id="contact"
            name="contact"
            value={formik.values.contact}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Sponser Contact"
            title="Sponser Contact"
          />
        </div>
        <div className="pr-9">
          <Input
            type="text"
            formik={formik}
            id="largeTitle"
            name="largeTitle"
            value={formik.values.largeTitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Large Title"
            title="Large Title"
          />
        </div>
        <div className="flex gap-7 ">
          <Input
            type="text"
            formik={formik}
            id="shortContent"
            name="shortContent"
            value={formik.values.shortContent}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Short Content"
            title="Short Content"
          />
          <Input
            formik={formik}
            id="logo"
            name="logo"
            type="file"
            onChange={(event: any) => {
              formik.setFieldValue("logo", event.currentTarget.files[0]);
            }}
            onBlur={formik.handleBlur}
            placeholder="Choose Sponser Logo"
            title="Sponser Logo"
            accept="image/*"
            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
          />
          {formik.values.logo && (
            <div className="image-preview mt-6">
              <img
                src={URL.createObjectURL(formik.values.logo as File)}
                width={100}
                alt=""
              />
            </div>
          )}
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          label={` ${isLoading ? "Submitting Please Wait" : "Submit"}`}
        />
      </form>
    </div>
  );
};

export default addSponser;
