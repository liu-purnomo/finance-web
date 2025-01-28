import { Metadata } from "next";
import { UpdateProfile } from "./form";

export const metadata: Metadata = {
    title: "Setting",
};

const Page = () => {
    return <UpdateProfile />;
};

export default Page;
