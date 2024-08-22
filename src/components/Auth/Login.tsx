"use client";

import React, { useEffect, useState } from "react";
import Input from "../smallComponents/Input";
import { useFormik } from "formik";
import Link from "next/link";
import Button from "../smallComponents/Button";
import { loginInitialValue } from "@/utils/validations/Login/loginInitial";
import { loginValidation } from "@/utils/validations/Login/loginValidation";
import { useLoginMutation } from "@/redux/api/usersApi/AuthApi";
import { EyeClosedIcon, EyeOpenIcon } from "@/helper/Icons/icon";
import { LoginPage } from "@/types/inputProps";
import { showToast } from "@/utils/toastNotification";
import { handleError } from "@/helper/errorHandler";
import { saveToken } from "@/utils/auth";
import { useRouter } from "next/navigation";

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigation = useRouter();
  const [login, { isLoading, isError, isSuccess, data, error }] =
    useLoginMutation();

  const toogleEye = () => {
    setShowPassword(!showPassword);
  };
  const formik = useFormik({
    initialValues: loginInitialValue,
    validationSchema: loginValidation,
    onSubmit: (values) => {
      console.log(values);
      handleLogin(values);
    },
  });

  const handleLogin = async (values: LoginPage) => {
    try {
      await login({ email: values.email, password: values.password });
    } catch (error) {
      console.error(error);
      showToast("error", "Login error");
    }
  };
  useEffect(() => {
    if (isLoading) {
      showToast("loading", "Login progress");
    } else if (isError) {
      if (error) {
        handleError(error);
      }
      console.log(error);
    } else if (isSuccess) {
      showToast("success", "Login success");
      if (data.data.token) {
        saveToken(data.data.token);
        // Redirect to dashboard page
        navigation.push("/");
      }
    }
  }, [isLoading, isError, isSuccess, error, data]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <Input
          type="text"
          formik={formik}
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter your Email Address"
          title="Email"
          childrens={[
            <svg
              className="fill-current"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5">
                <path
                  d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                  fill=""
                />
              </g>
            </svg>,
          ]}
        />
      </div>

      <div>
        <Input
          type={showPassword ? "text" : "password"}
          formik={formik}
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="********"
          title="Password"
          childrens={[
            <div onClick={toogleEye} className=" cursor-pointer">
              {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
            </div>,
          ]}
        />
      </div>

      <div className="mb-5">
        <Button type="submit" label="Sign In" />
      </div>

      <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50">
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_191_13499)">
              <path
                d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217"
                fill="#4285F4"
              />
              <path
                d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999"
                fill="#34A853"
              />
              <path
                d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
                fill="#FBBC05"
              />
              <path
                d="M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z"
                fill="#EB4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_191_13499">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        Sign in with Google
      </button>

      {/* <div className="mt-6 text-center">
        <p>
          Don’t have any account?{" "}
          <Link href="/auth/signup" className="text-primary">
            Sign Up
          </Link>
        </p>
      </div> */}
    </form>
  );
};

export default Login;
