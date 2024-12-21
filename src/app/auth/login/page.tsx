/* eslint-disable @next/next/no-img-element */

import { Metadata } from "next";
import Link from "next/link";
import AuthLoginForm from "./form";

export const metadata: Metadata = {
    title: "Login",
};

const Login = () => {
    return (
        <div className="">
            <AuthLoginForm />

            <div className="mt-5 text-center dark:text-white">
                Don&rsquo;t have an account?{" "}
                <Link
                    href="/auth/register"
                    className=" text-primary underline transition hover:text-black dark:hover:text-white"
                >
                    Register Now
                </Link>
            </div>
        </div>
    );
};

export default Login;
