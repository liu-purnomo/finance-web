"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export const Modal = ({
    modal,
    setModal,
    children,
    width = "w-full max-w-3xl",
}: {
    modal: boolean;
    setModal: (arg: boolean) => void;
    children: React.ReactNode;
    width?: string;
}) => {
    return (
        <Transition appear show={modal} as={Fragment}>
            <Dialog as="div" open={modal} onClose={setModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0" />
                </Transition.Child>
                <div className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                    <div className="flex min-h-screen items-start justify-center px-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className={`my-8 ${width} overflow-hidden`}
                            >
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
