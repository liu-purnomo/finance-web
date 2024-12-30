import { Metadata } from "next";
import { DataTable } from "./table";

export const metadata: Metadata = {
    title: "Transaction",
};

const Page = async () => {
    return <DataTable />;
};

export default Page;
