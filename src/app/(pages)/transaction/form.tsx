"use client";
import { CategoryApi, TransactionApi, WalletApi } from "@/api";
import { Alert } from "@/components/common/alert";
import { Button } from "@/components/elements";
import { Field, SelectField } from "@/components/formik/field";
import { Modal } from "@/components/modal/default-modal";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useMemo, useState } from "react";
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
    const [transactionType, setTransactionType] = useState("EXPENSE");
    const [selectedWallet, setSelectedWallet] = useState<any>(
        data?.Wallet || {},
    );
    const [selectedCategory, setSelectedCategory] = useState<any>(
        data?.Category || {},
    );

    const initialValues = {
        id: data?.id || "",
        walletId: data?.walletId || undefined,
        amount: data?.amount || "0",
        description: data?.description || "",
        transactionDate: data?.transactionDate || new Date(),
        categoryId: data?.categoryId || undefined,
    };

    const { mutateAsync: create } = useMutation({
        mutationFn: TransactionApi.create,
    });

    const { mutateAsync: edit } = useMutation({
        mutationFn: TransactionApi.update,
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

    const walletData = useQuery({
        queryKey: ["ListWalletForSelectOptions"],
        queryFn: WalletApi.getAll,
    });

    const walletOption = useMemo(
        () =>
            walletData?.data?.map((wallet: any) => ({
                value: wallet.id,
                label: wallet.name,
                ...wallet,
            })) || [],
        [walletData?.data],
    );

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
        walletId: Yup.string().required().label("Wallet"),
        amount: Yup.string().required().label("Amount"),
        categoryId: Yup.string().required().label("Category"),
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
                                    className={`btn w-full rounded-r-none ${transactionType === "INCOME" ? "btn-primary" : "btn-outline-primary"}`}
                                    onClick={() => {
                                        setTransactionType("INCOME");
                                        formik.resetForm();
                                    }}
                                >
                                    INCOME
                                </button>
                                <button
                                    type="button"
                                    className={`btn w-full rounded-l-none ${transactionType === "EXPENSE" ? "btn-primary" : "btn-outline-primary"}`}
                                    onClick={() => {
                                        setTransactionType("EXPENSE");
                                        formik.resetForm();
                                    }}
                                >
                                    EXPENSE
                                </button>
                            </div>

                            <SelectField
                                options={categoryOption?.filter(
                                    (category: any) =>
                                        category?.type === transactionType,
                                )}
                                name="categoryId"
                                label="Category"
                                additionalFunction={(selectedOption: any) =>
                                    setSelectedCategory(selectedOption)
                                }
                                required
                            />

                            <SelectField
                                options={walletOption}
                                name="walletId"
                                label="Wallet"
                                additionalFunction={(selectedOption: any) =>
                                    setSelectedWallet(selectedOption)
                                }
                                required
                            />

                            <Field
                                name="amount"
                                label={`Amount (${selectedWallet?.currency ? selectedWallet?.currency : "IDR"})`}
                                required
                                type="qty"
                            />

                            <Field
                                name="description"
                                label="Description"
                                type="textarea"
                            />

                            <Field
                                name="transactionDate"
                                label="Transaction Date"
                                type="date"
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
