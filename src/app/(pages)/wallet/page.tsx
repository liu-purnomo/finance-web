import { Metadata } from "next";
import { Dashboard } from "./dashboard";

export const metadata: Metadata = {
    title: "Wallet",
};

const Page = async () => {
    return <Dashboard />;
};

export default Page;
