import { Metadata } from "next";
import { DataTable } from "./table";

export const metadata: Metadata = {
    title: "Budget",
};

const Page = () => {
    return <DataTable />;
};

export default Page;
