"use client";
import CategoryIcon, { iconList } from "@/assets/icons/catagoryIcon";
import { Modal } from "@/components/modal/default-modal";
import { useFormikContext } from "formik";
import { useState } from "react";

export const IconModal = () => {
    const [showModal, setShowModal] = useState(false);
    const formik: any = useFormikContext();
    const selectedIcon = formik?.values?.icon;

    return (
        <div>
            <div
                className="flex cursor-pointer  w-10 h-10 rounded-full bg-blue-100  text-[darkblue]  justify-center items-center"
                onClick={() => setShowModal(true)}
            >
                <CategoryIcon icon={selectedIcon} />
            </div>

            <Modal
                modal={showModal}
                setModal={setShowModal}
                width="w-full md:w-[500px]"
            >
                <div className="panel">
                    <div className="flex gap-4 flex-wrap justify-center items-center">
                        {iconList?.map((icon: string, index: number) => (
                            <div
                                key={index}
                                onClick={() => {
                                    formik.setFieldValue("icon", icon);
                                    setShowModal(false);
                                }}
                                className="cursor-pointer text-[darkblue] w-10 h-10 rounded-full bg-blue-100  flex justify-center items-center"
                            >
                                <CategoryIcon icon={icon} />
                            </div>
                        ))}
                    </div>
                </div>
            </Modal>
        </div>
    );
};
