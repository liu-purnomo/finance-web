/* eslint-disable @next/next/no-img-element */

import { Metadata } from "next";
import ForgotPasswordForm from "./form";

export const metadata: Metadata = {
    title: "Forgot Password",
};

const Verify = () => {
    return <ForgotPasswordForm />;
};

export default Verify;
