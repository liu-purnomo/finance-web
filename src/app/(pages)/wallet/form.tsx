"use client";
import { WalletApi } from "@/api";
import { Alert } from "@/components/common/alert";
import { Button } from "@/components/elements";
import { Field, SelectField } from "@/components/formik/field";
import { Modal } from "@/components/modal/default-modal";
import {
    walletNameOptions,
    walletTypeOptions,
} from "@/utilities/constants/options";
import { useMutation } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import * as Yup from "yup";

interface WalletFormProps {
    data?: any;
    onSubmitForm: (values: any) => void;
    showModal: boolean;
    setShowModal: (values: boolean) => void;
    confirmDelete: (values: string) => void;
}

export const WalletForm = ({
    data,
    onSubmitForm,
    showModal,
    setShowModal,
    confirmDelete,
}: WalletFormProps) => {
    const initialValues = {
        id: data?.id || "",
        type: data?.type || "",
        name: data?.name || "",
        currency: data?.currency || "IDR",
        balance: data?.balance || 0,
        description: data?.description || "",
    };

    const { mutateAsync: create } = useMutation({
        mutationFn: WalletApi.create,
    });
    const { mutateAsync: update } = useMutation({
        mutationFn: WalletApi.update,
    });

    const onSubmit = async (values: any) => {
        try {
            const response = data ? await update(values) : await create(values);
            Alert.success(response?.message);
            onSubmitForm(values);
            setShowModal(false);
        } catch (error: any) {
            Alert.error(error?.response?.data?.message);
        }
    };

    const onDelete = () => {
        confirmDelete(data?.id);
    };

    const validationSchema = Yup.object().shape({
        type: Yup.string().required().label("Type"),
        name: Yup.string().required().label("Name"),
        currency: Yup.string().required().label("Currency"),
    });

    return (
        <>
            <Button
                label="Create Wallet"
                type="button"
                onClick={() => setShowModal(true)}
            />

            {showModal && (
                <Modal modal={showModal} setModal={setShowModal}>
                    <div className="panel">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            {(formik) => (
                                <Form className="space-y-5 dark:text-white">
                                    <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                                        <SelectField
                                            name="type"
                                            options={walletTypeOptions()}
                                            required
                                            creatable
                                            label="Wallet Type"
                                        />
                                        <SelectField
                                            name="currency"
                                            options={[
                                                { value: "IDR", label: "IDR" },
                                                { value: "USD", label: "USD" },
                                                { value: "EUR", label: "EUR" },
                                                { value: "JPY", label: "JPY" },
                                                { value: "GBP", label: "GBP" },
                                            ]}
                                            required
                                            creatable
                                            label="Currency"
                                        />
                                        <SelectField
                                            name="name"
                                            options={walletNameOptions()}
                                            required
                                            creatable
                                            label="Wallet Name"
                                        />
                                        <Field
                                            name="balance"
                                            label="Initial Balance"
                                            type="qty"
                                        />
                                    </div>
                                    <div>
                                        <Field
                                            name="description"
                                            label="Description"
                                            type="textarea"
                                        />
                                    </div>
                                    {data?.id && (
                                        <Button
                                            onClick={onDelete}
                                            color="btn-outline-danger"
                                            type="button"
                                            label="Delete"
                                        />
                                    )}
                                    <Button
                                        loading={formik.isSubmitting}
                                        label="Submit"
                                    />
                                </Form>
                            )}
                        </Formik>
                    </div>
                </Modal>
            )}
        </>
    );
};
