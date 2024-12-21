"use client";
import { AuthApi } from "@/api";
import { Alert } from "@/components/common/alert";
import { Button } from "@/components/elements";
import { FieldAuthEmail, FieldAuthPassword } from "@/components/formik/field";
import { FieldAuthName } from "@/components/formik/field/auth/name";
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

            const { data, message } = response;

            Alert.success(message);
            router.replace("/");
        } catch (error: any) {
            Alert.error(error?.response?.data?.message);
        }
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
        name: Yup.string().required().min(3).max(50).label("Name"),
        password: Yup.string().required().min(5).max(50).label("Password"),
        confirmPassword: Yup.string()
            .required()
            .oneOf([Yup.ref("password")], "Passwords must match")
            .label("Confirm Password"),
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
                        isShowForgot
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
