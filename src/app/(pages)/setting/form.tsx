"use client";

import { UserApi } from "@/api/user.api";
import { Alert } from "@/components/common/alert";
import { Button } from "@/components/elements";
import { Field, SelectField } from "@/components/formik/field";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { ChangePassword } from "./change-password";

export const UpdateProfile = () => {
    const [showChangePassword, setShowChangePassword] = useState(false);
    const { data: profile, isLoading } = useQuery({
        queryKey: ["user/my-profile"],
        queryFn: UserApi.getMyProfile,
    });

    const { mutateAsync: updateProfile } = useMutation({
        mutationFn: UserApi.updateMyProfile,
    });

    const initialValues = {
        name: profile?.data?.name,
        firstDayOfWeek: profile?.data?.firstDayOfWeek,
        firstDayOfTheMonth: profile?.data?.firstDayOfTheMonth,
        firstMonthOfTheYear: profile?.data?.firstMonthOfTheYear,
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required().label("Name"),
        firstDayOfWeek: Yup.string().required().label("First Day"),
        firstDayOfTheMonth: Yup.string().required().label("First Date"),
        firstMonthOfTheYear: Yup.string().required().label("First Month"),
    });

    const onSubmit = async (values: any) => {
        try {
            const response = await updateProfile(values);
            Alert.success(response?.data?.message);
        } catch (error: any) {
            Alert.error(error?.response?.data?.message);
        }
    };

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return (
        <div className="w-full max-w-md mx-auto panel">
            <div className="w-full grid grid-cols-2 pb-2 gap-0.5">
                <button
                    type="button"
                    onClick={() => setShowChangePassword(false)}
                    className={`btn ${showChangePassword ? "btn-outline-primary" : "btn-primary"} rounded-r-none`}
                >
                    Edit Profile
                </button>
                <button
                    onClick={() => setShowChangePassword(true)}
                    type="button"
                    className={`btn ${!showChangePassword ? "btn-outline-primary" : "btn-primary"} rounded-l-none`}
                >
                    Change Password
                </button>
            </div>

            {isLoading ? (
                <div className="flex justify-center items-center h-96">
                    <span className="loading loading-spinner text-primary"></span>
                </div>
            ) : showChangePassword ? (
                <ChangePassword />
            ) : (
                <div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {(formik) => (
                            <Form>
                                <div className="my-5 space-y-5">
                                    <Field name="name" label="Name" required />
                                    <SelectField
                                        options={days.map((day) => ({
                                            value: day,
                                            label: day,
                                        }))}
                                        label="First day of the Week"
                                        name="firstDayOfWeek"
                                        required
                                    />
                                    <Field
                                        number
                                        label="First date of the Month"
                                        name="firstDayOfTheMonth"
                                        required
                                        max={31}
                                    />
                                    <SelectField
                                        options={months.map((month) => ({
                                            value: month,
                                            label: month,
                                        }))}
                                        label="First Month of the Year"
                                        name="firstMonthOfTheYear"
                                        required
                                    />
                                </div>
                                {formik.dirty && (
                                    <Button
                                        type="submit"
                                        label="Save"
                                        loading={formik.isSubmitting}
                                    />
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>
            )}
        </div>
    );
};
