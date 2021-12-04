import React from "react";
import FormSignIn from "../FormSignIn";
import { FormObject1 } from "./Data";
import useLoading from "../actions/useLoading";
import Loading from "../Loading";

function SignIn() {
  const loadingPage = useLoading();

  if (loadingPage) {
    return <Loading />;
  }
  return <FormSignIn {...FormObject1} />;
}

export default SignIn;
