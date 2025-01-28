/* eslint-disable @next/next/no-img-element */

import { Metadata } from "next";
import AuthResetPasswordForm from "./form";

export const metadata: Metadata = {
    title: "Reset Password",
};

const ResetPassword = () => {
    return <AuthResetPasswordForm />;
};

export default ResetPassword;
