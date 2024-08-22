import React from "react";
import { FormikProps } from "formik";

export interface InputProps {
  type: string;
  formik: any; // Update this with the correct type
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<any>) => void;
  onBlur: (event: React.FocusEvent<any>) => void;
  multiple?: boolean;
  className?: string;
  placeholder?: string;
  title: string;
  checked?: boolean;
  hidden?: boolean;
  childrens?: Array<any>;
}
export interface LoginPage{
    email: string;
    password: string;
}