/* eslint-disable @next/next/no-img-element */

import { Metadata } from "next";
import AuthRegisterForm from "./form";

export const metadata: Metadata = {
    title: "Register",
};

const Register = () => {
    return <AuthRegisterForm />;
};

export default Register;
