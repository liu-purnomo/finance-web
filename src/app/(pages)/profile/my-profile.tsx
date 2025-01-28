"use client";

import { UserApi } from "@/api/user.api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { DeleteAccount } from "./delete-account";

export const MyProfile = () => {
    const { data: profile, isLoading } = useQuery({
        queryKey: ["user/my-profile"],
        queryFn: UserApi.getMyProfile,
    });
    return (
        <div className="w-full max-w-xl mx-auto panel">
            <div className="text-center font-bold text-xl pb-2 border-b">
                My Profile
            </div>
            <div className="mt-2 flex justify-between p-2 rounded shadow bg-primary-light">
                <div>Name</div>
                <div className="font-bold">{profile?.data?.name}</div>
            </div>
            <div className="mt-2 flex justify-between p-2 rounded shadow ">
                <div>Email</div>
                <div className="font-bold">{profile?.data?.email}</div>
            </div>
            <div className="mt-2 flex justify-between p-2 rounded shadow bg-primary-light">
                <div>First Day</div>
                <div className="font-bold">{profile?.data?.firstDayOfWeek}</div>
            </div>
            <div className="mt-2 flex justify-between p-2 rounded shadow ">
                <div>First Date</div>
                <div className="font-bold">
                    {profile?.data?.firstDayOfTheMonth}
                </div>
            </div>
            <div className="mt-2 flex justify-between p-2 rounded shadow ">
                <div>First Month</div>
                <div className="font-bold">
                    {profile?.data?.firstMonthOfTheYear}
                </div>
            </div>
            <Link href="/setting" className="btn mt-5 btn-outline-primary">
                Setting
            </Link>

            <div className="mt-5">
                <DeleteAccount />
            </div>
        </div>
    );
};
