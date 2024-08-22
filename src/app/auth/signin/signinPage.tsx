"use client";

import Login from "@/components/Auth/Login";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SigninPage = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Login />
    </Provider>
  );
};

export default SigninPage;
