import { instance } from "./instance";

export class UserApi {
    static async getMyProfile(): Promise<any> {
        const { data } = await instance({
            method: "GET",
            url: "api/v1/user/my-profile",
        });

        return data;
    }

    static async updateMyProfile(data: any): Promise<any> {
        const response = await instance({
            method: "PUT",
            url: "api/v1/user/update",
            data,
        });

        return response;
    }

    static async changePassword(data: any): Promise<any> {
        const response = await instance({
            method: "PUT",
            url: "api/v1/user/change-password",
            data,
        });

        return response;
    }

    static async deleteAccount(): Promise<any> {
        const response = await instance({
            method: "DELETE",
            url: "api/v1/user/delete",
        });

        return response;
    }
}
