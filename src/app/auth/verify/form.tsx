/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { AuthApi } from "@/api";
import { Alert } from "@/components/common/alert";
import { Button } from "@/components/elements";
import IconChecks from "@/components/icons/icon/icon-checks";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const AuthVerifyForm = () => {
    const router = useRouter();
    const [attempt, setAttempt] = useState(0);
    const params = useSearchParams();

    const email = params.get("email");
    const code = params.get("code");

    const { mutateAsync: verify, isSuccess } = useMutation({
        mutationFn: AuthApi.verify,
    });

    const onSubmit = async (values: FormVerify) => {
        try {
            await verify(values);
            setAttempt(attempt + 1);
        } catch (error: any) {
            Alert.error(error?.response?.data?.message);
        }
    };

    useEffect(() => {
        if (email && code && attempt === 0) {
            onSubmit({ email, code });
        }
    }, [email, code, attempt]);

    return (
        <div>
            {isSuccess ? (
                <div className="flex flex-col justify-center items-center mt-10">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <div className="border rounded-full p-4 h-24 w-24 flex justify-center items-center border-primary">
                            <IconChecks className="w-10 h-10 text-primary" />
                        </div>
                        <div className="text-2xl text-primary">
                            Verification successful!
                        </div>
                    </div>
                </div>
            ) : (
                <Button
                    type="button"
                    onClick={() => router.push("/auth/register")}
                    label="Register"
                />
            )}

            <div className="mt-5 mb-10">
                <Button
                    type="button"
                    onClick={() => router.push("/auth/login")}
                    label="Login"
                />
            </div>
        </div>
    );
};

export default AuthVerifyForm;
