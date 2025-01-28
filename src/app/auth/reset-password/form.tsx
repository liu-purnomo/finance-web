/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { AuthApi } from "@/api";
import { Alert } from "@/components/common/alert";
import { Button } from "@/components/elements";
import { FieldAuthPassword } from "@/components/formik/field";
import { auth } from "@/components/formik/validation/yup/auth";
import { useMutation } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import * as Yup from "yup";

const AuthResetPasswordForm = () => {
    const router = useRouter();
    const params = useSearchParams();

    const email = params.get("email");
    const code = params.get("code");

    const initialValues = {
        email: email || "",
        code: code || "",
        password: "",
        confirmPassword: "",
    };

    const validationSchema = Yup.object().shape({
        email: auth.email,
        code: auth.code,
        password: auth.registerPassword,
        confirmPassword: auth.confirmPassword,
    });

    const { mutateAsync: resetPassword, isSuccess } = useMutation({
        mutationFn: AuthApi.resetPassword,
    });

    const onSubmit = async (values: {
        email: string;
        code: string;
        password: string;
        confirmPassword: string;
    }) => {
        try {
            const response = await resetPassword(values);
            Alert.success(response?.message);
            router.push("/auth/login");
        } catch (error: any) {
            Alert.error(error?.response?.data?.message);
        }
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {(formik) => (
                    <Form className="space-y-5 dark:text-white">
                        <FieldAuthPassword
                            required
                            isShowConfirm
                            confirmName="confirmPassword"
                        />
                        <Button
                            loading={formik.isSubmitting}
                            label="Reset Password"
                        />
                    </Form>
                )}
            </Formik>

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

export default AuthResetPasswordForm;
