"use client";
import { TransactionApi } from "@/api";
import { NumberFormat } from "@/utilities/functions/format/number";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const Summary = () => {
    const { data: summary } = useQuery({
        queryKey: ["dataSummary"],
        queryFn: () => TransactionApi.summary({}),
    });

    const [showBalance, setShowBalance] = useState<boolean>(false);

    return (
        <div className="panel h-full">
            <div className=" grid grid-cols-1 gap-6 text-white md:grid-cols-2">
                {summary?.data?.SummaryWallet?.map(
                    (
                        wallet: { currency: string; balance: number },
                        index: number,
                    ) => {
                        return (
                            <div
                                key={index}
                                className={`panel bg-gradient-to-r ${
                                    index % 2 === 0
                                        ? "from-violet-500 to-violet-400"
                                        : "from-blue-500 to-blue-400"
                                }`}
                            >
                                <div className="flex justify-start">
                                    <div className="text-md font-semibold ltr:mr-1 rtl:ml-1">
                                        {wallet?.currency}
                                    </div>
                                </div>
                                <div className="mt-5 flex items-center">
                                    <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3">
                                        {showBalance
                                            ? NumberFormat.amount(
                                                  wallet?.balance || 0,
                                              )
                                            : "********"}
                                    </div>
                                </div>
                                <div
                                    className="mt-5 flex cursor-pointer items-center font-semibold"
                                    onClick={() => setShowBalance(!showBalance)}
                                >
                                    {showBalance ? (
                                        <EyeSlashIcon className=" h-5" />
                                    ) : (
                                        <EyeIcon className=" h-5" />
                                    )}
                                </div>
                            </div>
                        );
                    },
                )}
            </div>
        </div>
    );
};
