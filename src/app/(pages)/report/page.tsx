import { Metadata } from "next";
import { WalletList } from "../dashboard/wallet/wallet";

export const metadata: Metadata = {
    title: "Report",
};

const Page = async () => {
    return <WalletList />;
};

export default Page;
