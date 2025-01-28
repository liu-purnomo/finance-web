"use client";

import { UserApi } from "@/api/user.api";
import { Alert } from "@/components/common/alert";
import { Button } from "@/components/elements";
import { FieldAuthPassword } from "@/components/formik/field";
import { auth } from "@/components/formik/validation/yup/auth";
import { useMutation } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import * as Yup from "yup";

export const ChangePassword = () => {
    const initialValues = {
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
    };

    const { mutateAsync: changePassword } = useMutation({
        mutationFn: UserApi.changePassword,
    });

    const onSubmit = async (values: any) => {
        try {
            const response: any = await changePassword(values);
            Alert.default(response?.data?.message);
        } catch (error: any) {
            Alert.error(error?.response?.data?.message);
        }
    };

    const validationSchema = Yup.object().shape({
        oldPassword: auth.password,
        newPassword: auth.registerPassword,
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
                    <FieldAuthPassword
                        name="oldPassword"
                        label="Old Password"
                        required
                    />

                    <FieldAuthPassword
                        name="newPassword"
                        label="New Password"
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
