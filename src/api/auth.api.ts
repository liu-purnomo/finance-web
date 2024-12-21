import { instance } from "./instance";

export class AuthApi {
    static async login(formValues: FormLogin): Promise<ILoginSuccessResponse> {
        const { data } = await instance({
            method: "POST",
            url: "api/v1/auth/login",
            data: formValues,
        });
        return data;
    }
    static async register(
        formValues: FormRegister,
    ): Promise<ILoginSuccessResponse> {
        const { data } = await instance({
            method: "POST",
            url: "api/v1/auth/register",
            data: formValues,
        });
        return data;
    }
}
