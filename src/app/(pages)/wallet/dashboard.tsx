"use client";
import { WalletApi } from "@/api";
import { Alert } from "@/components/common/alert";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { WalletForm } from "./form";
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
    const [dataToEdit, setDataToEdit] = useState<any>();

    const handleOnSubmitForm = () => {
        setShowForm(false);
        setDataToEdit(null);
        refetch();
    };

    const handleOnCloseForm = (values: boolean) => {
        if (values) {
            setShowForm(true);
            setDataToEdit(null);
        } else {
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

    const { data: wallets, refetch } = useQuery({
        queryKey: ["wallets"],
        queryFn: () => WalletApi.index({}),
    });

    return (
        <div>
            <div className="panel h-full">
                <div className="mb-5 flex items-center justify-between dark:text-white-light">
                    <h5 className="text-lg font-semibold">Wallets</h5>
                    <div>
                        <WalletForm
                            data={dataToEdit}
                            showModal={showForm}
                            setShowModal={handleOnCloseForm}
                            onSubmitForm={handleOnSubmitForm}
                            confirmDelete={confirmDelete}
                        />
                    </div>
                </div>
                <div className="space-y-6">
                    {wallets?.data?.map((wallet: WalletsProps) => {
                        return (
                            <div
                                key={wallet.id}
                                onClick={() => handleEditData(wallet)}
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
