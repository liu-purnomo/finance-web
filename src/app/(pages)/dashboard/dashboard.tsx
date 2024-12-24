"use client";
import { TransactionCard } from "./transaction/transaction";
import { WalletList } from "./wallet/wallet";

export const Dashboard = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <WalletList />
            </div>
            <div className="mt-5">
                <TransactionCard />
            </div>
        </div>
    );
};
