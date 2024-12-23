"use client";
import { AuthApi } from "@/api";
import { Alert } from "@/components/common/alert";
import { Button } from "@/components/elements";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const AuthVerifyForm = () => {
    const params = useSearchParams();
    const email = params.get("email");
    const [count, setCount] = useState(60);

    useEffect(() => {
        if (count > 0) {
            const interval = setInterval(() => {
                setCount((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [count]);

    const { mutateAsync: resendCode } = useMutation({
        mutationFn: AuthApi.resendCode,
    });

    const handleResendCode = async () => {
        try {
            if (!email) {
                Alert.error("Something wrong");
            }
            await resendCode({ email: email! });
            setCount(60);
        } catch (error: any) {
            Alert.error(error?.response?.data?.message);
        }
    };

    return (
        <div className="text-center">
            <div>A verification link has been sent to {email}</div>

            {count > 0 ? (
                <div>
                    If you haven’t received the email yet, please wait a moment.
                    You can request a new verification link in {count} seconds.
                </div>
            ) : (
                <div className="mt-5">
                    <Button onClick={handleResendCode} label="Resend Link" />
                </div>
            )}
        </div>
    );
};

export default AuthVerifyForm;
