/* eslint-disable @next/next/no-img-element */
"use client";

import { IconCaretsDown } from "@/components/icons";
import IconSettings from "@/components/icons/icon/icon-settings";
import { IRootState } from "@/stores";
import { toggleSidebar } from "@/stores/themeConfigSlice";

import {
    BriefcaseIcon,
    BugAntIcon,
    ChartPieIcon,
    FolderOpenIcon,
    HomeIcon,
    LifebuoyIcon,
    MinusIcon,
    Squares2X2Icon,
    UserIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { BsPiggyBank } from "react-icons/bs";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
    const dispatch = useDispatch();
    const pathname = usePathname();
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector(
        (state: IRootState) => state.themeConfig.semidark,
    );

    useEffect(() => {
        const selector = document.querySelector(
            '.sidebar ul a[href="' + window.location.pathname + '"]',
        );
        if (selector) {
            selector.classList.add("active");
            const ul: any = selector.closest("ul.sub-menu");
            if (ul) {
                let ele: any =
                    ul.closest("li.menu").querySelectorAll(".nav-link") || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        setActiveRoute();
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
    }, [pathname]);

    const setActiveRoute = () => {
        // eslint-disable-next-line prefer-const
        let allLinks = document.querySelectorAll(".sidebar ul a.active");
        for (let i = 0; i < allLinks.length; i++) {
            const element = allLinks[i];
            element?.classList.remove("active");
        }
        const selector = document.querySelector(
            '.sidebar ul a[href="' + window.location.pathname + '"]',
        );
        selector?.classList.add("active");
    };

    return (
        <div className={semidark ? "dark" : ""}>
            <nav
                className={`sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300 ${semidark ? "text-white-dark" : ""}`}
            >
                <div className="h-full bg-white dark:bg-black">
                    <div className="flex items-center justify-between px-4 py-3">
                        <Link
                            href="/"
                            className="main-logo flex shrink-0 items-center"
                        >
                            <img
                                className="ml-[5px] w-8 flex-none"
                                src="/logo.png"
                                alt="logo"
                            />
                        </Link>

                        <button
                            type="button"
                            className="collapse-icon flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 rtl:rotate-180 dark:text-white-light dark:hover:bg-dark-light/10"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <IconCaretsDown className="m-auto rotate-90" />
                        </button>
                    </div>
                    <PerfectScrollbar className="relative h-[calc(100vh-80px)]">
                        <ul className="relative space-y-0.5 p-4 py-0 font-semibold">
                            <li>
                                <div className="my-10"></div>
                            </li>
                            <li className="nav-item">
                                <Link href="/" className="group">
                                    <div className="flex items-center !ps-0">
                                        <HomeIcon className=" shrink-0 group-hover:!text-primary" />
                                        <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                                            Dashboard
                                        </span>
                                    </div>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="/report" className="group">
                                    <div className="flex items-center">
                                        <BriefcaseIcon className="shrink-0 group-hover:!text-primary" />
                                        <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                                            Report
                                        </span>
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <div className="my-5"></div>
                            </li>

                            <h2 className="-mx-4 mb-2 mt-4 flex items-center bg-white-light/30 px-7 py-3 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
                                <MinusIcon className="hidden h-5 w-4 flex-none" />
                                <span>WALLET</span>
                            </h2>

                            <li className="nav-item">
                                <Link href="/wallet" className="group">
                                    <div className="flex items-center">
                                        <Squares2X2Icon className=" shrink-0 group-hover:!text-primary" />
                                        <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                                            Wallet
                                        </span>
                                    </div>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="/transaction" className="group">
                                    <div className="flex items-center">
                                        <ChartPieIcon className="shrink-0 group-hover:!text-primary" />
                                        <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                                            Transactions
                                        </span>
                                    </div>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="/saving-goal" className="group">
                                    <div className="flex items-center">
                                        <BsPiggyBank className=" shrink-0 group-hover:!text-primary" />
                                        <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                                            Saving Goal
                                        </span>
                                    </div>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="/budget" className="group">
                                    <div className="flex items-center">
                                        <ChartPieIcon className="shrink-0 group-hover:!text-primary" />
                                        <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                                            Budget
                                        </span>
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <div className="my-5"></div>
                            </li>

                            <h2 className="-mx-4 mb-2 mt-4 flex items-center bg-white-light/30 px-7 py-3 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
                                <MinusIcon className="hidden h-5 w-4 flex-none" />
                                <span>USER</span>
                            </h2>

                            <li className="nav-item">
                                <Link href="/profile" className="group">
                                    <div className="flex items-center">
                                        <UserIcon className="shrink-0 group-hover:!text-primary" />
                                        <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                                            Profile
                                        </span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/setting" className="group">
                                    <div className="flex items-center">
                                        <IconSettings className="shrink-0 group-hover:!text-primary" />
                                        <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                                            Settings
                                        </span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#" className="group">
                                    <div className="flex items-center">
                                        <FolderOpenIcon className="shrink-0 group-hover:!text-primary" />
                                        <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                                            Archive
                                        </span>
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <div className="my-5"></div>
                            </li>
                            <h2 className="-mx-4 mb-2 mt-4 flex items-center bg-white-light/30 px-7 py-3 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
                                <MinusIcon className="hidden h-5 w-4 flex-none" />
                                <span>Support</span>
                            </h2>
                            <li className="nav-item">
                                <Link href="#" className="group">
                                    <div className="flex items-center">
                                        <BugAntIcon className="shrink-0 group-hover:!text-primary" />
                                        <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                                            QNA
                                        </span>
                                    </div>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="/docs" className="group">
                                    <div className="flex items-center">
                                        <LifebuoyIcon className="shrink-0 group-hover:!text-primary" />
                                        <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                                            Documentation
                                        </span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <div className="pb-10"></div>
                            </li>
                        </ul>
                    </PerfectScrollbar>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
