"use client";

import { UserApi } from "@/api/user.api";
import { Alert } from "@/components/common/alert";
import { Button } from "@/components/elements";
import { useMutation } from "@tanstack/react-query";

export const DeleteAccount = () => {
    const { mutateAsync } = useMutation({
        mutationFn: UserApi.deleteAccount,
    });

    const deleteAccount = async () => {
        try {
            const response: any = await mutateAsync();
            Alert.default(response?.data?.message);
        } catch (error: any) {
            Alert.error(error?.response?.data?.message);
        }
    };

    const confirmDeleteAccount = () => {
        Alert.confirm({
            callback() {
                deleteAccount();
            },
            text: "All your data will be permanently deleted.",
        });
    };

    return (
        <Button
            type="button"
            onClick={confirmDeleteAccount}
            label="Delete Account"
            color="btn-outline-danger"
        />
    );
};
