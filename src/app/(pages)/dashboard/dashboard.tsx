"use client";
import { Summary } from "./summary/summary";
import { TransactionCard } from "./transaction/transaction";
import { WalletList } from "./wallet/wallet";

export const Dashboard = () => {
    return (
        <div>
            <div className="">
                <Summary />
            </div>
            <div className="mt-5">
                <WalletList />
            </div>
            <div className="mt-5">
                <TransactionCard />
            </div>
        </div>
    );
};
