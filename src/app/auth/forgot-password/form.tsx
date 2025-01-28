/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { AuthApi } from "@/api";
import { Alert } from "@/components/common/alert";
import { Button } from "@/components/elements";
import { FieldAuthEmail } from "@/components/formik/field";
import { auth } from "@/components/formik/validation/yup/auth";
import { useMutation } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const ForgotPasswordForm = () => {
    const router = useRouter();

    const initialValues = {
        email: "",
    };

    const validationSchema = Yup.object().shape({
        email: auth.email,
    });

    const { mutateAsync: verify, isSuccess } = useMutation({
        mutationFn: AuthApi.forgotPassword,
    });

    const onSubmit = async (values: { email: string }) => {
        try {
            const response = await verify(values);
            Alert.success(response?.message);
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
                    <Form className="space-y-4 dark:text-white">
                        <FieldAuthEmail />
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

export default ForgotPasswordForm;
