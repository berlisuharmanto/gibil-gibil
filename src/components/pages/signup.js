import React from 'react';
import FormSignUp from "../FormSignUp";
import {FormObject2} from "./Data";

function signup() {
    return (
        <FormSignUp {...FormObject2}/>
    )
}

export default signup