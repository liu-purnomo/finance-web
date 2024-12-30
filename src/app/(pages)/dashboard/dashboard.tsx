"use client";
import { TransactionCard } from "./transaction/transaction";
import { WalletList } from "./wallet/wallet";

export const Dashboard = () => {
    return (
        <div>
            <div className="">
                <WalletList />
            </div>
            <div className="mt-5">
                <TransactionCard />
            </div>
        </div>
    );
};
