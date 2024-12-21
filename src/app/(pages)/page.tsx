import { IconDollarSignCircle } from "@/components/icons/dollar-sign-circle";
import IconMenuUsers from "@/components/icons/menu/icon-menu-users";
import Link from "next/link";

const HomePage = async () => {
    return (
        <div>
            <div className="flex items-center">
                <ul className="mx-auto content-center flex justify-center items-center gap-5 py-4.5 xl:gap-8 flex-wrap">
                    <Link href="#">
                        <li className="group shadow-xl tracking-wide border-b-2 hover:border-blue-500 hover:dark:border-success border-slate-100 dark:border-black  flex w-[120px] cursor-pointer flex-col items-center justify-center gap-4 rounded-md px-8 py-2.5 text-center text-primary dark:text-danger duration-300 bg-slate-300 hover:bg-white hover:text-primary dark:hover:text-danger dark:hover:bg-black dark:bg-[#1B2E4B]">
                            <div className=" rounded-full h-10 w-10 flex border border-white bg-primary dark:bg-danger justify-center items-center">
                                <IconMenuUsers className="w-6 h-6 text-white" />
                            </div>
                            <h5 className="font-bold">HR</h5>
                        </li>
                    </Link>
                    <Link href="#">
                        <li className="group shadow-xl tracking-wide border-b-2 hover:border-blue-500 hover:dark:border-success border-slate-100 dark:border-black  flex w-[120px] cursor-pointer flex-col items-center justify-center gap-4 rounded-md px-8 py-2.5 text-center text-primary dark:text-danger duration-300 bg-slate-300 hover:bg-white hover:text-primary dark:hover:text-danger dark:hover:bg-black dark:bg-[#1B2E4B]">
                            <div className=" rounded-full h-10 w-10 flex border border-white bg-primary dark:bg-danger justify-center items-center">
                                <IconDollarSignCircle className="w-6 h-6 text-white" />
                            </div>
                            <h5 className="font-bold">Finance</h5>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default HomePage;
