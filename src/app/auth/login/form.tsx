"use client";
import { AuthApi } from "@/api";
import { Alert } from "@/components/common/alert";
import { Button } from "@/components/elements";
import { FieldAuthEmail, FieldAuthPassword } from "@/components/formik/field";
import { useMutation } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import * as Yup from "yup";

const AuthLoginForm = () => {
    const router = useRouter();
    const params = useSearchParams();

    const error = params.get("error");
    const success = params.get("success");

    useEffect(() => {
        if (success) {
            Alert.success(success);
        } else if (error) {
            Alert.error(error);
        }
    }, [error, success]);

    const initialValues = {
        email: "",
        password: "",
    };

    const { mutateAsync: login } = useMutation({
        mutationFn: AuthApi.login,
    });

    const onSubmit = async (values: any) => {
        try {
            const response: any = await login(values);

            const { data, message } = response;

            const credentials = {
                ...data,
                redirect: false,
            };
            await signIn("credentials", credentials);
            Alert.success(message);
            router.replace("/");
        } catch (error: any) {
            Alert.error(error?.response?.data?.message);
        }
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(5).max(50).label("Password"),
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(formik) => (
                <Form className="space-y-5 dark:text-white">
                    <FieldAuthEmail />
                    <FieldAuthPassword isShowForgot />
                    <Button loading={formik.isSubmitting} label="Sign in" />
                </Form>
            )}
        </Formik>
    );
};

export default AuthLoginForm;
