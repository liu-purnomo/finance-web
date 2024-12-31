"use client";
import { WalletApi } from "@/api";
import { Alert } from "@/components/common/alert";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { WalletForm } from "./form";
import { WalletTransfer } from "./transfer";
import { WalletList } from "./wallet";

export interface WalletsProps {
    id: string;
    type: string;
    name: string;
    balance: number;
    currency: string;
    description: string | null;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}

export const Dashboard = () => {
    const [showForm, setShowForm] = useState<boolean>(false);
    const [showTransferFrom, setShowTransferFrom] = useState<boolean>(false);
    const [dataToEdit, setDataToEdit] = useState<any>();

    const { data: wallets, refetch } = useQuery({
        queryKey: ["listWallets"],
        queryFn: () => WalletApi.index({}),
    });

    const handleOnSubmitForm = () => {
        setShowForm(false);
        setShowTransferFrom(false);
        setDataToEdit(null);
        refetch();
    };

    const handleOnCloseForm = (values: boolean) => {
        if (values) {
            setShowForm(true);
            setDataToEdit(null);
        } else {
            setShowTransferFrom(false);
            setShowForm(false);
            setDataToEdit(null);
        }
    };

    const handleEditData = useCallback((detailDataToEdit: any) => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        setShowForm(false);
        setDataToEdit(detailDataToEdit);

        setTimeout(() => {
            setShowForm(true);
        }, 10);
    }, []);

    const { mutateAsync: deleteCategory } = useMutation({
        mutationFn: WalletApi.delete,
    });

    const handleDeleteData = async (id: string) => {
        try {
            await deleteCategory(id);
            refetch();
            Alert.success("Data deleted successfully");
            setShowForm(false);
            setDataToEdit(null);
        } catch (error: any) {
            console.error(error);
        }
    };

    const confirmDelete = (id: string) => {
        Alert.confirm({
            callback() {
                handleDeleteData(id);
            },
        });
    };

    return (
        <div>
            <div className="panel h-full">
                <div className="mb-5 flex items-center justify-between dark:text-white-light">
                    <h5 className="text-lg font-semibold">Wallets</h5>
                    <div className="flex gap-2 ">
                        <WalletTransfer
                            showModal={showTransferFrom}
                            setShowModal={() =>
                                setShowTransferFrom(!showTransferFrom)
                            }
                            onSubmitForm={handleOnSubmitForm}
                        />
                        <WalletForm
                            data={dataToEdit}
                            showModal={showForm}
                            setShowModal={handleOnCloseForm}
                            onSubmitForm={handleOnSubmitForm}
                            confirmDelete={confirmDelete}
                        />
                    </div>
                </div>
                <div className="">
                    {wallets?.data?.map((wallet: WalletsProps) => {
                        return (
                            <div
                                key={wallet.id}
                                onClick={() => handleEditData(wallet)}
                                className="hover:bg-slate-100 hover:dark:bg-slate-800 cursor-pointer rounded px-2 py-3"
                            >
                                <WalletList data={wallet} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
