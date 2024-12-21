/* eslint-disable @next/next/no-img-element */

import { Metadata } from "next";
import AuthLoginForm from "./form";

export const metadata: Metadata = {
    title: "Login",
};

const Login = () => {
    return <AuthLoginForm />;
};

export default Login;
