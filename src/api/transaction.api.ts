import queryString from "query-string";
import { instance } from "./instance";

export class TransactionApi {
    static async index(params: any) {
        const paramsActual = {} as any;

        Object.keys(params)?.forEach((key) => {
            if (params[key]) {
                paramsActual[key] = params[key];
            }
        });

        const { data } = await instance({
            method: "GET",
            url: `api/v1/finance/transaction?${queryString.stringify(paramsActual)}`,
        });

        return data;
    }

    static async create(formValues: FormCreateTransaction): Promise<any> {
        const { data } = await instance({
            method: "POST",
            url: "api/v1/finance/transaction",
            data: formValues,
        });
        return data;
    }

    static async update(formValues: FormCreateTransaction): Promise<any> {
        const { data } = await instance({
            method: "PUT",
            url: "api/v1/finance/transaction/" + formValues.id,
            data: formValues,
        });
        return data;
    }

    static async delete(id: string): Promise<any> {
        const { data } = await instance({
            method: "DELETE",
            url: "api/v1/finance/transaction/" + id,
        });
        return data;
    }
}
