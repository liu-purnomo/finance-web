"use client";
import { BudgetApi, CategoryApi } from "@/api";
import { Alert } from "@/components/common/alert";
import { Button } from "@/components/elements";
import { Field, SelectField } from "@/components/formik/field";
import { Modal } from "@/components/modal/default-modal";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useMemo } from "react";
import * as Yup from "yup";

interface FormCreateProps {
    data?: any;
    showModal: boolean;
    setShowModal: (value: boolean) => void;
    onSubmitForm: (values: any) => void;
}

export const FormCreate = ({
    data,
    onSubmitForm,
    showModal,
    setShowModal,
}: FormCreateProps) => {
    const initialValues = {
        id: data?.id || "",
        categoryId: data?.categoryId || undefined,
        amount: data?.amount || "0",
        description: data?.description || "",
        periodStart: data?.periodStart || new Date(),
        periodEnd: data?.periodEnd || new Date(),
    };

    const { mutateAsync: create } = useMutation({
        mutationFn: BudgetApi.create,
    });

    const { mutateAsync: edit } = useMutation({
        mutationFn: BudgetApi.update,
    });

    const onSubmit = async (values: any) => {
        try {
            const response = data ? await edit(values) : await create(values);
            Alert.success(response?.message);
            onSubmitForm(values);
            setShowModal(false);
        } catch (error: any) {
            Alert.error(error?.response?.data?.message);
        }
    };

    const categoryData = useQuery({
        queryKey: ["ListCategoryForSelectOptions"],
        queryFn: CategoryApi.getAll,
    });

    const categoryOption = useMemo(
        () =>
            categoryData?.data?.map((category: any) => ({
                value: category.id,
                label: category.name,
                ...category,
            })) || [],
        [categoryData?.data],
    );

    const validationSchema = Yup.object().shape({
        amount: Yup.string().required().label("Amount"),
        categoryId: Yup.string().required().label("Category"),
        description: Yup.string().required().label("Description"),
        periodEnd: Yup.string().required().label("Period End"),
        periodStart: Yup.string().required().label("Period Start"),
    });

    return (
        <Modal
            modal={showModal}
            setModal={setShowModal}
            width="w-full md:w-[500px]"
        >
            <div className="panel">
                <div className="mb-4 flex items-center justify-between dark:text-white-light">
                    <h5 className="text-lg font-semibold">
                        {data?.id ? "Edit" : "Create"} Budget
                    </h5>
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
                            <SelectField
                                name="categoryId"
                                label="Category"
                                options={categoryOption}
                                required
                            />

                            <Field
                                name="description"
                                label="Description"
                                type="textarea"
                                required
                                row={1}
                            />

                            <Field
                                name="amount"
                                label="Amount"
                                type="amount"
                                required
                            />

                            <Field
                                name="periodStart"
                                label="Period Start"
                                type="date"
                                required
                            />

                            <Field
                                name="periodEnd"
                                label="Period End"
                                type="date"
                                required
                            />

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
