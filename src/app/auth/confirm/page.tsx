/* eslint-disable @next/next/no-img-element */

import { Metadata } from "next";
import AuthVerifyForm from "./form";

export const metadata: Metadata = {
    title: "Verify",
};

const Verify = () => {
    return <AuthVerifyForm />;
};

export default Verify;
