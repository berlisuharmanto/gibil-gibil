import React from "react";
import FormSignUp from "../FormSignUp";
import { FormObject2 } from "./Data";
import useLoading from "../actions/useLoading";
import Loading from "../Loading";

function SignUp() {
  const loadingPage = useLoading();

  if (loadingPage) {
    return <Loading />;
  }
  return <FormSignUp {...FormObject2} />;
}

export default SignUp;
