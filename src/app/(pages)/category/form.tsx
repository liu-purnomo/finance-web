"use client";
import { CategoryApi } from "@/api";
import { Alert } from "@/components/common/alert";
import { Button } from "@/components/elements";
import { Field, SelectField } from "@/components/formik/field";
import { Modal } from "@/components/modal/default-modal";
import { useMutation } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { CategoryIcon, iconList } from "./icon";

interface CategoryFormProps {
    data?: any;
    showModal: boolean;
    setShowModal: (value: boolean) => void;
    onSubmitForm: (values: any) => void;
}

export const CategoryForm = ({
    data,
    onSubmitForm,
    showModal,
    setShowModal,
}: CategoryFormProps) => {
    const initialValues = {
        icon: "wallet",
        name: "",
        type: "INCOME",
    };

    const { mutateAsync: create } = useMutation({
        mutationFn: CategoryApi.create,
    });

    const onSubmit = async (values: any) => {
        try {
            const response: any = await create(values);
            Alert.default(response?.message);
            onSubmitForm(values);
            setShowModal(false);
        } catch (error: any) {
            Alert.error(error?.response?.data?.message);
        }
    };

    const validationSchema = Yup.object().shape({
        icon: Yup.string().required().label("Type"),
        name: Yup.string().required().label("Name"),
        type: Yup.string().required().label("Type"),
    });

    return (
        <Modal
            modal={showModal}
            setModal={setShowModal}
            width="w-full md:w-[500px]"
        >
            <div className="panel">
                <div className="mb-4 flex items-center justify-between dark:text-white-light">
                    <h5 className="text-lg font-semibold">Create Category</h5>
                    <div>
                        <button
                            onClick={() => setShowModal(false)}
                            type="button"
                            className="rounded-full border btn btn-outline-danger p-0"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <hr className="mb-5" />
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {(formik) => (
                        <Form className="space-y-5 dark:text-white">
                            <div className="flex items-center justify-center text-center">
                                <button
                                    type="button"
                                    className={`btn w-full rounded-r-none ${formik.values.type === "INCOME" ? "btn-primary" : "btn-outline-primary"}`}
                                    onClick={() =>
                                        formik.setFieldValue("type", "INCOME")
                                    }
                                >
                                    INCOME
                                </button>
                                <button
                                    type="button"
                                    className={`btn w-full rounded-l-none ${formik.values.type === "EXPENSE" ? "btn-primary" : "btn-outline-primary"}`}
                                    onClick={() =>
                                        formik.setFieldValue("type", "EXPENSE")
                                    }
                                >
                                    EXPENSE
                                </button>
                            </div>

                            <div className="w-full">
                                <SelectField
                                    name="icon"
                                    options={
                                        iconList?.map(
                                            (icon: string, index: number) => {
                                                return {
                                                    label: (
                                                        <CategoryIcon
                                                            icon={icon}
                                                        />
                                                    ),
                                                    value: icon,
                                                };
                                            },
                                        ) as any
                                    }
                                />
                                <Field
                                    name="name"
                                    label="Category Name"
                                    required
                                />
                            </div>

                            <Button
                                loading={formik.isSubmitting}
                                label="Submit"
                            />
                        </Form>
                    )}
                </Formik>
            </div>
        </Modal>
    );
};
