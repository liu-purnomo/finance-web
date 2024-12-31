"use client";
import { TransactionApi, WalletApi } from "@/api";
import { Alert } from "@/components/common/alert";
import { Button } from "@/components/elements";
import { Field, SelectField } from "@/components/formik/field";
import { Modal } from "@/components/modal/default-modal";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useMemo } from "react";
import * as Yup from "yup";

interface WalletTransferProps {
    onSubmitForm: (values: any) => void;
    showModal: boolean;
    setShowModal: (values: boolean) => void;
}

export const WalletTransfer = ({
    onSubmitForm,
    showModal,
    setShowModal,
}: WalletTransferProps) => {
    const initialValues = {
        originWalletId: undefined,
        destinationWalletId: undefined,
        amount: 0,
        transactionDate: new Date(),
    };

    const { mutateAsync: create } = useMutation({
        mutationFn: TransactionApi.transfer,
    });

    const onSubmit = async (values: any) => {
        try {
            const response = await create(values);
            Alert.success(response?.message);
            onSubmitForm(values);
            setShowModal(false);
        } catch (error: any) {
            Alert.error(error?.response?.data?.message);
        }
    };

    const validationSchema = Yup.object().shape({
        originWalletId: Yup.string().required().label("Origin Wallet"),
        destinationWalletId: Yup.string()
            .required()
            .label("Destination Wallet"),
        amount: Yup.number().required().label("Amount"),
    });

    const walletData = useQuery({
        queryKey: ["ListWalletForSelectOptionsOnTransfer"],
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

    return (
        <>
            <Button
                label="Transfer Money"
                type="button"
                onClick={() => setShowModal(true)}
                width="w-[300px]"
            />

            {showModal && (
                <Modal
                    modal={showModal}
                    setModal={setShowModal}
                    width="md:w-[500px] w-full"
                >
                    <div className="panel">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            {(formik) => (
                                <Form className="space-y-5 dark:text-white">
                                    <div className="grid grid-cols-1 gap-5">
                                        <SelectField
                                            options={walletOption}
                                            name="originWalletId"
                                            label="Origin Wallet"
                                            required
                                            additionalFunction={() =>
                                                formik.setFieldValue(
                                                    "destinationWalletId",
                                                    undefined,
                                                )
                                            }
                                        />
                                        <SelectField
                                            options={walletOption?.filter(
                                                (wallet: any) =>
                                                    wallet.id !==
                                                    formik.values
                                                        .originWalletId,
                                            )}
                                            name="destinationWalletId"
                                            label="Destination Wallet"
                                            disabled={
                                                !formik.values.originWalletId
                                            }
                                            required
                                        />
                                        <Field
                                            name="amount"
                                            label="Amount"
                                            type="qty"
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
            )}
        </>
    );
};
