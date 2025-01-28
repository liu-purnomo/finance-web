import { Metadata } from "next";
import { MyProfile } from "./my-profile";

export const metadata: Metadata = {
    title: "Profile",
};

const Page = () => {
    return <MyProfile />;
};

export default Page;
