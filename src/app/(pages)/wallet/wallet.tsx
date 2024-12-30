import { walletLogo } from "@/utilities/constants/options";
import Image from "next/image";
import { WalletsProps } from "./dashboard";

export const WalletList = ({ data }: { data: WalletsProps }) => {
    return (
        <div className="flex">
            <span className="grid h-9 w-9 shrink-0 place-content-center rounded-md bg-white border shadow-sm">
                {data?.name && (
                    <Image
                        src={`/assets/logo/${walletLogo(data?.name)}`}
                        alt="wallet"
                        width={24}
                        height={24}
                        className=""
                    />
                )}
            </span>
            <div className="flex-1 px-3">
                <div className="font-bold">{data?.name}</div>
                <div className="text-xs text-white-dark dark:text-gray-500">
                    {data?.type}
                </div>
            </div>
            <span className="whitespace-pre px-1 text-base text-primary ltr:ml-auto rtl:mr-auto">
                {data?.currency}{" "}
                {Number(data?.balance || 0)?.toLocaleString("id-ID", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })}
            </span>
        </div>
    );
};
