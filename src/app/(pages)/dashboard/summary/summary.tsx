"use client";
import { TransactionApi } from "@/api";
import { DateFormat } from "@/utilities/functions/format/date";
import { NumberFormat } from "@/utilities/functions/format/number";
import { EyeIcon, EyeSlashIcon, WalletIcon } from "@heroicons/react/24/outline";
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import "flatpickr/dist/flatpickr.css";
import { useState } from "react";
import Flatpickr from "react-flatpickr";

export const Summary = () => {
    const [dateRange, setDateRange] = useState<
        "week" | "month" | "year" | "custom-range"
    >("month");

    const weeklyRange = DateFormat.thisWeekRange();
    const monthlyRange = DateFormat.thisMonthRange();
    const yearlyRange = DateFormat.thisYearRange();

    const [startDate, setStartDate] = useState<any>(monthlyRange.start);
    const [endDate, setEndDate] = useState<any>(monthlyRange.end);

    const { data: summary } = useQuery({
        queryKey: ["dataSummary", startDate, endDate],
        queryFn: () =>
            TransactionApi.summary({
                start: startDate,
                end: endDate,
            }),

        enabled: !!startDate && !!endDate,
    });

    const [showBalance, setShowBalance] = useState<boolean>(false);

    return (
        <div className="panel w-full">
            <div className="flex items-center justify-between mb-5 gap-5">
                <h5 className="text-lg font-semibold">Summary</h5>
                <div className="flex items-center gap-2">
                    {dateRange === "custom-range" ? (
                        <div className="">
                            <Flatpickr
                                options={{
                                    mode: "range",
                                    dateFormat: "d/m/Y",
                                    position: "auto right",
                                }}
                                className="btn btn-outline-primary text-center btn-sm"
                                placeholder="Custom Range"
                                defaultValue={`${DateFormat.dmY(startDate)} to ${DateFormat.dmY(endDate)}`}
                                onChange={(dateValues) => {
                                    setStartDate(dateValues[0]);
                                    setEndDate(dateValues[1]);
                                }}
                            />
                        </div>
                    ) : (
                        <div>
                            {DateFormat.dmY(startDate)} to
                            {DateFormat.dmY(endDate)}
                        </div>
                    )}
                    <div>
                        <div className="flex items-center">
                            <div
                                className={`border border-primary hover:bg-primary hover:text-white py-1 w-28 cursor-pointer rounded-l-md text-center ${dateRange === "year" ? "bg-primary text-white" : ""}`}
                                onClick={() => {
                                    setDateRange("year");
                                    setStartDate(yearlyRange.start);
                                    setEndDate(yearlyRange.end);
                                }}
                            >
                                Yearly
                            </div>
                            <div
                                className={`border border-primary hover:bg-primary hover:text-white py-1 w-28 cursor-pointer text-center ${dateRange === "month" ? "bg-primary text-white" : ""}`}
                                onClick={() => {
                                    setDateRange("month");
                                    setStartDate(monthlyRange.start);
                                    setEndDate(monthlyRange.end);
                                }}
                            >
                                Monthly
                            </div>
                            <div
                                className={`border border-primary hover:bg-primary hover:text-white py-1 w-28 cursor-pointer text-center ${dateRange === "week" ? "bg-primary text-white" : ""}`}
                                onClick={() => {
                                    setDateRange("week");
                                    setStartDate(weeklyRange.start);
                                    setEndDate(weeklyRange.end);
                                }}
                            >
                                Weekly
                            </div>
                            <div
                                className={`border border-primary rounded-r-md hover:bg-primary hover:text-white py-1 w-28 cursor-pointer text-center ${dateRange === "custom-range" ? "bg-primary text-white" : ""}`}
                                onClick={() => {
                                    setDateRange("custom-range");
                                }}
                            >
                                Custom
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {summary?.data?.SummaryWallet?.map(
                (
                    wallet: {
                        currency: string;
                        balance: number;
                        income: number;
                        expense: number;
                    },
                    index: number,
                ) => {
                    return (
                        <div key={index}>
                            <div className="flex items-center justify-between">
                                <div className="text-3xl font-bold mb-5">
                                    {wallet.currency}
                                </div>
                                <div>
                                    <div
                                        onClick={() =>
                                            setShowBalance(!showBalance)
                                        }
                                        className={`cursor-pointer ${showBalance ? "text-success" : "text-danger"}`}
                                    >
                                        {showBalance ? (
                                            <EyeIcon className="h-8 w-8" />
                                        ) : (
                                            <EyeSlashIcon className="h-8 w-8" />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
                                <div className="flex items-center gap-2 p-5 bg-gradient-to-tr to-teal-600 from-teal-700  rounded-xl text-white">
                                    <div className="h-20 w-20 flex justify-center items-center bg-green-200 rounded-xl text-success">
                                        <IconTrendingUp className="h-16 w-16" />
                                    </div>
                                    <div className="">
                                        <div>Income</div>
                                        <div className="font-bold text-2xl">
                                            {showBalance
                                                ? NumberFormat.amount(
                                                      wallet.income,
                                                  )
                                                : "******"}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 p-5 bg-gradient-to-tr to-orange-600 from-orange-700  rounded-xl text-white">
                                    <div className="h-20 w-20 flex justify-center items-center bg-red-200 rounded-xl text-danger">
                                        <IconTrendingDown className="h-16 w-16" />
                                    </div>
                                    <div className="">
                                        <div>Expense</div>
                                        <div className="font-bold text-2xl">
                                            {showBalance
                                                ? NumberFormat.amount(
                                                      wallet.expense,
                                                  )
                                                : "******"}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 p-5 bg-gradient-to-tr to-blue-600 from-blue-700  rounded-xl text-white">
                                    <div className="h-20 w-20 flex justify-center items-center bg-blue-200 rounded-xl text-primary">
                                        <WalletIcon className="h-16 w-16" />
                                    </div>
                                    <div className="">
                                        <div>Current Balance</div>
                                        <div className="font-bold text-2xl">
                                            {showBalance
                                                ? NumberFormat.amount(
                                                      wallet.balance,
                                                  )
                                                : "******"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                },
            )}
        </div>
    );
};
