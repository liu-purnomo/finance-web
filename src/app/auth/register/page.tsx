/* eslint-disable @next/next/no-img-element */

import { Metadata } from "next";
import Link from "next/link";
import AuthRegisterForm from "./form";

export const metadata: Metadata = {
    title: "Register",
};

const Register = () => {
    return (
        <>
            <AuthRegisterForm />
            <div className="mt-5 text-center dark:text-white">
                Already registered?{" "}
                <Link
                    href="/auth/login"
                    className=" text-primary underline transition hover:text-black dark:hover:text-white"
                >
                    Login Now
                </Link>
            </div>
        </>
    );
};

export default Register;
