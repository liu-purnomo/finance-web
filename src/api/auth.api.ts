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
    ): Promise<DefaultSuccessResponse> {
        const { data } = await instance({
            method: "POST",
            url: "api/v1/auth/register",
            data: formValues,
        });
        return data;
    }

    static async verify(
        formValues: FormVerify,
    ): Promise<DefaultSuccessResponse> {
        const { data } = await instance({
            method: "POST",
            url: "api/v1/auth/verify",
            data: formValues,
        });
        return data;
    }

    static async resendCode(formValues: {
        email: string;
    }): Promise<DefaultSuccessResponse> {
        const { data } = await instance({
            method: "POST",
            url: "api/v1/auth/resend-code",
            data: formValues,
        });
        return data;
    }

    static async forgotPassword(formValues: {
        email: string;
    }): Promise<DefaultSuccessResponse> {
        const { data } = await instance({
            method: "POST",
            url: "api/v1/auth/forgot-password",
            data: formValues,
        });
        return data;
    }

    static async resetPassword(formValues: {
        email: string;
        code: string;
        password: string;
    }): Promise<DefaultSuccessResponse> {
        const { data } = await instance({
            method: "POST",
            url: "api/v1/auth/reset-password",
            data: formValues,
        });
        return data;
    }
}
