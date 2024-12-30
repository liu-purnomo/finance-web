import { TransactionApi } from "@/api";
import { NumberFormat } from "@/utilities/functions/format/number";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import CategoryIcon from "../../../../assets/icons/catagoryIcon";

export const TransactionCard = () => {
    const { data: transactions, refetch } = useQuery({
        queryKey: ["transactionDashboard"],
        queryFn: () => TransactionApi.index({}),
    });

    return (
        <div className="panel h-full">
            <div className="mb-4 flex items-center justify-between dark:text-white-light">
                <h5 className="text-lg font-semibold">Latest Transactions</h5>
                <Link href={"/transaction"}>
                    <button className="btn btn-outline-primary" type="button">
                        See All
                    </button>
                </Link>
            </div>
            <hr className="mb-5" />
            <div className="">
                {transactions?.data?.map((transaction: Transaction) => {
                    return (
                        <div
                            key={transaction.id}
                            className="hover:bg-slate-100 hover:dark:bg-slate-800 rounded px-2 py-3"
                        >
                            <div className="flex">
                                <span>
                                    <CategoryIcon
                                        icon={transaction?.Category?.icon}
                                    />
                                </span>

                                <div className="flex-1 px-3">
                                    <div className="font-bold">
                                        {transaction?.description}
                                    </div>
                                    <div className="text-xs text-white-dark dark:text-gray-500">
                                        {transaction?.Category?.name}
                                    </div>
                                </div>
                                <span
                                    className={`whitespace-pre px-1 text-base ${transaction?.Category?.type === "EXPENSE" ? "text-danger" : "text-success"} ltr:ml-auto rtl:mr-auto`}
                                >
                                    {transaction?.Wallet?.currency}{" "}
                                    {NumberFormat.amount(
                                        Number(transaction?.amount || 0),
                                    )}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
