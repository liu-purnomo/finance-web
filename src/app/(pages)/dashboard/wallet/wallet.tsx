import { WalletApi } from "@/api";
import { walletLogo } from "@/utilities/constants/options";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { WalletForm } from "./form";

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

export const WalletList = () => {
    const { data: wallets, refetch } = useQuery({
        queryKey: ["wallets"],
        queryFn: () => WalletApi.index({}),
    });

    return (
        <div className="panel h-full">
            <div className="mb-4 flex items-center justify-between dark:text-white-light">
                <h5 className="text-lg font-semibold">Wallets</h5>
                <div>
                    <WalletForm onSubmitForm={() => refetch()} />
                </div>
            </div>
            <hr className="mb-5" />
            <div className="space-y-6">
                {wallets?.data?.map((wallet: WalletsProps) => {
                    return (
                        <div key={wallet.id}>
                            <div className="flex">
                                <span className="grid h-9 w-9 shrink-0 place-content-center rounded-md bg-white border shadow-sm">
                                    <Image
                                        src={`/assets/logo/${walletLogo(wallet?.name)}`}
                                        alt="wallet"
                                        width={24}
                                        height={24}
                                    />
                                </span>
                                <div className="flex-1 px-3">
                                    <div className="font-bold">
                                        {wallet?.name}
                                    </div>
                                    <div className="text-xs text-white-dark dark:text-gray-500">
                                        {wallet?.type}
                                    </div>
                                </div>
                                <span className="whitespace-pre px-1 text-base text-primary ltr:ml-auto rtl:mr-auto">
                                    {wallet?.currency}{" "}
                                    {Number(
                                        wallet?.balance || 0,
                                    )?.toLocaleString("id-ID", {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
