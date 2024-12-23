import { Metadata } from "next";
import { Dashboard } from "./dashboard/dashboard";

export const metadata: Metadata = {
    title: "Dashboard",
};

const Page = async () => {
    return <Dashboard />;
};

export default Page;
