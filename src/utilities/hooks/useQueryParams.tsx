'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type QueryParams = {
    [key: string]: string | null | undefined;
};

export const useQueryParams = (
    keys: string[]
): [QueryParams, (params: QueryParams) => void, boolean] => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [queryParams, setQueryParams] = useState<QueryParams>({});
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        const params: QueryParams = {};

        keys.forEach((key: string) => {
            const value = searchParams?.get(key);

            if (value && value !== '') {
                params[key] = value;
            }
        });

        if (params !== queryParams) {
            setQueryParams(params);
            setIsLoaded(true);
        }
    }, [searchParams]);

    const updateQueryParams = (params: QueryParams) => {
        let stringParams: string = '';

        for (const key in params) {
            if (params[key]) {
                if (stringParams !== '') {
                    stringParams = `${stringParams}&${key}=${params[key]}`;
                } else {
                    stringParams = `${key}=${params[key]}`;
                }
            }
        }

        router.replace(`?${stringParams}`);
    };

    return [queryParams, updateQueryParams, isLoaded];
};
