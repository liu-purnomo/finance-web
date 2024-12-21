/* eslint-disable @next/next/no-img-element */
/* eslint-disable prefer-const */
"use client";

import {
    IconLaptop,
    IconMail,
    IconMoon,
    IconSun,
    IconUser,
} from "@/components/icons";
import IconBellBing from "@/components/icons/icon/icon-bell-bing";
import IconInfoCircle from "@/components/icons/icon/icon-info-circle";
import IconLogout from "@/components/icons/icon/icon-logout";
import IconSettings from "@/components/icons/icon/icon-settings";
import IconXCircle from "@/components/icons/icon/icon-x-circle";
import { IRootState } from "@/stores";
import {
    toggleRTL,
    toggleSidebar,
    toggleTheme,
} from "@/stores/themeConfigSlice";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "./dropdown";

const Header = () => {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const router = useRouter();
    const session = useSession();

    useEffect(() => {
        const selector = document.querySelector(
            'ul.horizontal-menu a[href="' + window.location.pathname + '"]',
        );
        if (selector) {
            const all: any = document.querySelectorAll(
                "ul.horizontal-menu .nav-link.active",
            );
            for (let i = 0; i < all.length; i++) {
                all[0]?.classList.remove("active");
            }

            let allLinks = document.querySelectorAll(
                "ul.horizontal-menu a.active",
            );
            for (let i = 0; i < allLinks.length; i++) {
                const element = allLinks[i];
                element?.classList.remove("active");
            }
            selector?.classList.add("active");

            const ul: any = selector.closest("ul.sub-menu");
            if (ul) {
                let ele: any = ul
                    .closest("li.menu")
                    .querySelectorAll(".nav-link");
                if (ele) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele?.classList.add("active");
                    });
                }
            }
        }
    }, [pathname]);

    const isRtl =
        useSelector((state: IRootState) => state.themeConfig.rtlClass) ===
        "rtl";

    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const setLocale = (flag: string) => {
        if (flag.toLowerCase() === "ae") {
            dispatch(toggleRTL("rtl"));
        } else {
            dispatch(toggleRTL("ltr"));
        }
        router.refresh();
    };

    function createMarkup(messages: any) {
        return { __html: messages };
    }
    const [messages, setMessages] = useState([
        {
            id: 4,
            image: '<span class="grid place-content-center w-9 h-9 rounded-full bg-warning-light dark:bg-warning text-warning dark:text-warning-light"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">    <circle cx="12" cy="12" r="10"></circle>    <line x1="12" y1="8" x2="12" y2="12"></line>    <line x1="12" y1="16" x2="12.01" y2="16"></line></svg></span>',
            title: "Warning",
            message: "Your password strength is low.",
            time: "5days",
        },
    ]);

    const removeMessage = (value: number) => {
        setMessages(messages.filter((user) => user.id !== value));
    };

    const [notifications, setNotifications] = useState([
        {
            id: 1,
            profile: "user-profile.jpeg",
            message:
                '<strong class="text-sm mr-1">John Doe</strong>invite you to <strong>Prototyping</strong>',
            time: "45 min ago",
        },
    ]);

    const removeNotification = (value: number) => {
        setNotifications(notifications.filter((user) => user.id !== value));
    };

    const [search, setSearch] = useState(false);

    return (
        <header
            className={`z-40 ${themeConfig.semidark && themeConfig.menu === "horizontal" ? "dark" : ""}`}
        >
            <div className="shadow-sm">
                <div className="relative flex w-full items-center bg-white px-5 py-2.5 dark:bg-black">
                    <div className="horizontal-logo flex items-center justify-between ltr:mr-2 rtl:ml-2 lg:hidden">
                        <Link
                            href="/"
                            className="main-logo flex shrink-0 items-center"
                        >
                            <img
                                className="inline w-8 ltr:-ml-1 rtl:-mr-1"
                                src="/logo.png"
                                alt="logo"
                            />
                            <span className="hidden align-middle text-2xl  font-bold  transition-all duration-300 ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light md:inline">
                                FINANCE
                            </span>
                        </Link>
                        <button
                            type="button"
                            className="collapse-icon flex flex-none rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary ltr:ml-2 rtl:mr-2 dark:bg-dark/40 dark:text-[#d0d2d6] dark:hover:bg-dark/60 dark:hover:text-primary lg:hidden"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <Bars2Icon className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="flex items-center space-x-1.5 ltr:ml-auto rtl:mr-auto rtl:space-x-reverse dark:text-[#d0d2d6] sm:flex-1 ltr:sm:ml-0 sm:rtl:mr-0 lg:space-x-2">
                        <div className="sm:ltr:mr-auto sm:rtl:ml-auto"></div>
                        <div>
                            {themeConfig.theme === "light" ? (
                                <button
                                    className={`${
                                        themeConfig.theme === "light" &&
                                        "flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60"
                                    }`}
                                    onClick={() =>
                                        dispatch(toggleTheme("dark"))
                                    }
                                >
                                    <IconSun />
                                </button>
                            ) : (
                                ""
                            )}
                            {themeConfig.theme === "dark" && (
                                <button
                                    className={`${
                                        themeConfig.theme === "dark" &&
                                        "flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60"
                                    }`}
                                    onClick={() =>
                                        dispatch(toggleTheme("system"))
                                    }
                                >
                                    <IconMoon />
                                </button>
                            )}
                            {themeConfig.theme === "system" && (
                                <button
                                    className={`${
                                        themeConfig.theme === "system" &&
                                        "flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60"
                                    }`}
                                    onClick={() =>
                                        dispatch(toggleTheme("light"))
                                    }
                                >
                                    <IconLaptop />
                                </button>
                            )}
                        </div>

                        <div className="dropdown shrink-0">
                            <Dropdown
                                offset={[0, 8]}
                                placement={`${isRtl ? "bottom-start" : "bottom-end"}`}
                                btnClassName="relative block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                                button={
                                    <span>
                                        <IconBellBing />
                                        <span className="absolute top-0 flex h-3 w-3 ltr:right-0 rtl:left-0">
                                            <span className="absolute -top-[3px] inline-flex h-full w-full animate-ping rounded-full bg-success/50 opacity-75 ltr:-left-[3px] rtl:-right-[3px]"></span>
                                            <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-success"></span>
                                        </span>
                                    </span>
                                }
                            >
                                <ul className="w-[300px] divide-y !py-0 text-dark dark:divide-white/10 dark:text-white-dark sm:w-[350px]">
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <div className="flex items-center justify-between px-4 py-2 font-semibold">
                                            <h4 className="text-lg">
                                                Notification
                                            </h4>
                                            {notifications.length ? (
                                                <span className="badge bg-primary/80">
                                                    {notifications.length}New
                                                </span>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </li>
                                    {notifications.length > 0 ? (
                                        <>
                                            {notifications.map(
                                                (notification) => {
                                                    return (
                                                        <li
                                                            key={
                                                                notification.id
                                                            }
                                                            className="dark:text-white-light/90"
                                                            onClick={(e) =>
                                                                e.stopPropagation()
                                                            }
                                                        >
                                                            <div className="group flex items-center px-4 py-2">
                                                                <div className="grid place-content-center rounded">
                                                                    <div className="relative h-12 w-12">
                                                                        <img
                                                                            className="h-12 w-12 rounded-full object-cover"
                                                                            alt="profile"
                                                                            src="/assets/images/user.webp"
                                                                        />
                                                                        <span className="absolute bottom-0 right-[6px] block h-2 w-2 rounded-full bg-success"></span>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-auto ltr:pl-3 rtl:pr-3">
                                                                    <div className="ltr:pr-3 rtl:pl-3">
                                                                        <h6
                                                                            dangerouslySetInnerHTML={{
                                                                                __html: notification.message,
                                                                            }}
                                                                        ></h6>
                                                                        <span className="block text-xs font-normal dark:text-gray-500">
                                                                            {
                                                                                notification.time
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    <button
                                                                        type="button"
                                                                        className="text-neutral-300 opacity-0 hover:text-danger group-hover:opacity-100 ltr:ml-auto rtl:mr-auto"
                                                                        onClick={() =>
                                                                            removeNotification(
                                                                                notification.id,
                                                                            )
                                                                        }
                                                                    >
                                                                        <IconXCircle />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    );
                                                },
                                            )}
                                            <li>
                                                <div className="p-4">
                                                    <button className="btn btn-primary btn-small block w-full">
                                                        Read All Notifications
                                                    </button>
                                                </div>
                                            </li>
                                        </>
                                    ) : (
                                        <li
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <button
                                                type="button"
                                                className="!grid min-h-[200px] place-content-center text-lg hover:!bg-transparent"
                                            >
                                                <div className="mx-auto mb-4 rounded-full ring-4 ring-primary/30">
                                                    <IconInfoCircle
                                                        fill={true}
                                                        className="h-10 w-10 text-primary"
                                                    />
                                                </div>
                                                No data available.
                                            </button>
                                        </li>
                                    )}
                                </ul>
                            </Dropdown>
                        </div>
                        <div className="dropdown flex shrink-0">
                            <Dropdown
                                offset={[0, 8]}
                                placement={`${isRtl ? "bottom-start" : "bottom-end"}`}
                                btnClassName="relative group block"
                                button={
                                    <img
                                        className="h-9 w-9 rounded-full object-cover saturate-50 group-hover:saturate-100"
                                        src="/assets/images/user.webp"
                                        alt="userProfile"
                                    />
                                }
                            >
                                <ul className="w-[230px] !py-0 font-semibold text-dark dark:text-white-dark dark:text-white-light/90">
                                    <li>
                                        <div className="flex items-center px-4 py-4">
                                            <img
                                                className="h-10 w-10 rounded-md object-cover"
                                                src="/assets/images/user.webp"
                                                alt="userProfile"
                                            />
                                            <div className="truncate ltr:pl-4 rtl:pr-4">
                                                <h4 className="text-base">
                                                    {session?.data?.user?.name}
                                                </h4>
                                                <button
                                                    type="button"
                                                    className="text-black/60 hover:text-primary dark:text-dark-light/60 dark:hover:text-white"
                                                >
                                                    {session?.data?.user?.email}
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <Link
                                            href="/profile"
                                            className="dark:hover:text-white"
                                        >
                                            <IconUser className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" />
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/mail"
                                            className="dark:hover:text-white"
                                        >
                                            <IconMail className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" />
                                            Inbox
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/setting"
                                            className="dark:hover:text-white"
                                        >
                                            <IconSettings className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" />
                                            Setting
                                        </Link>
                                    </li>

                                    <li className="border-t border-white-light dark:border-white-light/10">
                                        <button
                                            onClick={() => signOut()}
                                            type="button"
                                            className="!py-3 text-danger"
                                        >
                                            <IconLogout className="h-4.5 w-4.5 shrink-0 rotate-90 ltr:mr-2 rtl:ml-2" />
                                            Sign Out
                                        </button>
                                    </li>
                                </ul>
                            </Dropdown>
                        </div>
                    </div>
                </div>

                {/* horizontal menu */}
            </div>
        </header>
    );
};

export default Header;
