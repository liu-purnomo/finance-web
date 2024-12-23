"use client";
import { AuthApi } from "@/api";
import { Alert } from "@/components/common/alert";
import { Button } from "@/components/elements";
import { FieldAuthEmail, FieldAuthPassword } from "@/components/formik/field";
import { FieldAuthName } from "@/components/formik/field/auth/name";
import { auth } from "@/components/formik/validation/yup/auth";
import { useMutation } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const AuthRegisterForm = () => {
    const router = useRouter();

    const initialValues = {
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
    };

    const { mutateAsync: register } = useMutation({
        mutationFn: AuthApi.register,
    });

    const onSubmit = async (values: any) => {
        try {
            const response: any = await register(values);
            Alert.default(response?.message);

            setTimeout(() => {
                router.replace("/auth/confirm?email=" + values.email);
            }, 1000);
        } catch (error: any) {
            Alert.error(error?.response?.data?.message);
        }
    };

    const validationSchema = Yup.object().shape({
        email: auth.email,
        name: auth.name,
        password: auth.registerPassword,
        confirmPassword: auth.confirmPassword,
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(formik) => (
                <Form className="space-y-5 dark:text-white">
                    <FieldAuthEmail required />
                    <FieldAuthName required />
                    <FieldAuthPassword
                        required
                        isShowConfirm
                        confirmName="confirmPassword"
                    />
                    <Button loading={formik.isSubmitting} label="Sign up" />
                </Form>
            )}
        </Formik>
    );
};

export default AuthRegisterForm;
