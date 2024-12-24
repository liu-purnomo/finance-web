import { Metadata } from "next";
import { TablePage } from "./tabel";

export const metadata: Metadata = {
    title: "Category",
};

const Page = async () => {
    return <TablePage />;
};

export default Page;
