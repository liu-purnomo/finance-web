import queryString from "query-string";
import { instance } from "./instance";

export class CategoryApi {
    static async index(params: any) {
        const paramsActual = {} as any;

        Object.keys(params)?.forEach((key) => {
            if (params[key]) {
                paramsActual[key] = params[key];
            }
        });

        const { data } = await instance({
            method: "GET",
            url: `api/v1/finance/category?${queryString.stringify(paramsActual)}`,
        });

        return data;
    }

    static async create(formValues: FormCreateCategory): Promise<any> {
        const { data } = await instance({
            method: "POST",
            url: "api/v1/finance/category",
            data: formValues,
        });
        return data;
    }

    static async update(formValues: FormCreateCategory): Promise<any> {
        const { data } = await instance({
            method: "PUT",
            url: "api/v1/finance/category/" + formValues.id,
            data: formValues,
        });
        return data;
    }

    static async delete(id: string): Promise<any> {
        const { data } = await instance({
            method: "DELETE",
            url: "api/v1/finance/category/" + id,
        });
        return data;
    }

    static async getAll(): Promise<any> {
        const { data } = await instance({
            method: "GET",
            url: "api/v1/finance/category/get-all",
        });

        return data;
    }
}
