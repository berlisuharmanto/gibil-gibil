import React from 'react';
import FormSignIn from "../FormSignIn";
import {FormObject1} from "./Data";

function signin() {
    return (
        <FormSignIn {...FormObject1}/>
    )
}

export default signin
