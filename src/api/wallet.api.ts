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
}
