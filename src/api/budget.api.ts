import queryString from "query-string";
import { instance } from "./instance";

export class BudgetApi {
    static async index(params: any) {
        const paramsActual = {} as any;

        Object.keys(params)?.forEach((key) => {
            if (params[key]) {
                paramsActual[key] = params[key];
            }
        });

        const { data } = await instance({
            method: "GET",
            url: `api/v1/finance/budget?${queryString.stringify(paramsActual)}`,
        });

        return data;
    }

    static async create(formValues: FormCreateBudget): Promise<any> {
        const { data } = await instance({
            method: "POST",
            url: "api/v1/finance/budget",
            data: formValues,
        });
        return data;
    }

    static async update(formValues: FormCreateBudget): Promise<any> {
        const { data } = await instance({
            method: "PUT",
            url: "api/v1/finance/budget/" + formValues.id,
            data: formValues,
        });
        return data;
    }

    static async delete(id: string): Promise<any> {
        const { data } = await instance({
            method: "DELETE",
            url: "api/v1/finance/budget/" + id,
        });
        return data;
    }

    static async getAll(): Promise<any> {
        const { data } = await instance({
            method: "GET",
            url: "api/v1/finance/budget/get-all",
        });

        return data;
    }
}
