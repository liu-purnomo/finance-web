"use client";
import { WalletApi } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
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
    const [showModal, setShowModal] = useState(false);

    const { data: wallets, refetch } = useQuery({
        queryKey: ["wallets"],
        queryFn: () => WalletApi.index({}),
    });

    console.log(wallets);

    return (
        <div>
            <div className="panel h-full">
                <div className="mb-5 flex items-center justify-between dark:text-white-light">
                    <h5 className="text-lg font-semibold">Wallets</h5>
                    <div>
                        <WalletForm onSubmitForm={() => refetch()} />
                    </div>
                </div>
                <div className="space-y-6">
                    {wallets?.data?.map((wallet: WalletsProps) => {
                        return (
                            <div key={wallet.id}>
                                <WalletList data={wallet} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
