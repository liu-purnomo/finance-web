import queryString from "query-string";
import { instance } from "./instance";

export class WalletApi {
    static async index(params: any) {
        const paramsActual = {} as any;

        Object.keys(params)?.forEach((key) => {
            if (params[key]) {
                paramsActual[key] = params[key];
            }
        });

        const { data } = await instance({
            method: "GET",
            url: `api/v1/finance/wallet?${queryString.stringify(paramsActual)}`,
        });

        return data;
    }

    static async create(
        formValues: FormCreateWallet,
    ): Promise<DefaultSuccessResponse> {
        const { data } = await instance({
            method: "POST",
            url: "api/v1/finance/wallet",
            data: formValues,
        });
        return data;
    }

    static async update(
        formValues: FormCreateWallet,
    ): Promise<DefaultSuccessResponse> {
        const { data } = await instance({
            method: "PUT",
            url: `api/v1/finance/wallet/${formValues.id}`,
            data: formValues,
        });
        return data;
    }

    static async delete(id: string) {
        const { data } = await instance({
            method: "DELETE",
            url: "api/v1/finance/wallet/" + id,
        });
        return data;
    }

    static async getAll(): Promise<any> {
        const { data } = await instance({
            method: "GET",
            url: "api/v1/finance/wallet/get-all",
        });
        return data;
    }
}
