"use client";

import { CategoryApi } from "@/api";
import Table from "@/components/common/table";
import { useMemoQuery } from "@/utilities/hooks/useMemoQuery";
import { useQuery } from "@tanstack/react-query";
import Tippy from "@tippyjs/react";
import { MRT_ColumnDef } from "mantine-react-table";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import "tippy.js/dist/tippy.css";
import { CategoryForm } from "./form";

export const TablePage = () => {
    const {
        columnFilter,
        globalFilter,
        memoQuery,
        pagination,
        columnFilters,
        setColumnFilters,
        setGlobalFilter,
        setPagination,
        setSorting,
        sorting,
    } = useMemoQuery();

    const { data, refetch, isRefetching, isLoading, isError } = useQuery({
        queryKey: ["CategoriesData", memoQuery],
        queryFn: () => CategoryApi.index(memoQuery),
    });

    const [showForm, setShowForm] = useState<boolean>(false);
    const [dataToEdit, setDataToEdit] = useState<any>();

    const handleOnCloseForm = () => {
        setShowForm(false);
        setDataToEdit(null);
    };

    const handleOnSubmitForm = () => {
        refetch();
    };

    const handleEditData = useCallback((detailDataToEdit: any) => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        setShowForm(false);
        setDataToEdit(detailDataToEdit);

        setTimeout(() => {
            setShowForm(true);
        }, 10);
    }, []);

    const columns = useMemo<MRT_ColumnDef<any>[]>(
        () => [
            {
                accessorKey: "id",
                header: "ID",
                Cell: ({ row }) => (
                    <div className="">
                        <Link
                            className="text-primary  font-semibold cursor-pointer"
                            href={`/asset/${row?.original?.id}`}
                        >
                            {row?.original?.id}
                        </Link>
                    </div>
                ),
            },
            {
                accessorKey: "name",
                header: "Name",
                Cell: ({ row }) => <div>{row?.original?.name}</div>,
            },
            {
                accessorKey: "icon",
                header: "Icon",
            },
        ],
        [],
    );

    return (
        <div>
            <div>
                {showForm && (
                    <CategoryForm
                        data={dataToEdit}
                        onSubmitForm={handleOnSubmitForm}
                        setShowModal={handleOnCloseForm}
                        showModal={showForm}
                    />
                )}
            </div>
            <Table
                tableName="Category"
                columns={columns}
                data={data?.data}
                customButton={
                    <Tippy content="Add Data" placement="top-end">
                        <div
                            className="font-bold gap-2 p-0 ms-2  cursor-pointer"
                            onClick={() => setShowForm(true)}
                        >
                            <BsPlusCircle className="w-5 h-5" />
                        </div>
                    </Tippy>
                }
                tableOptions={{
                    manualFiltering: true,
                    manualPagination: true,
                    manualSorting: true,
                    onPaginationChange: setPagination,
                    onSortingChange: setSorting,
                    onColumnFiltersChange: setColumnFilters,
                    onGlobalFilterChange: setGlobalFilter,
                    rowCount: data?.totalItems || 0,
                    initialState: {
                        showGlobalFilter: false,
                    },
                    state: {
                        columnFilters: columnFilters,
                        globalFilter: globalFilter,
                        pagination: pagination,
                        isLoading: isLoading,
                        showAlertBanner: isError,
                        showProgressBars: isRefetching || isLoading,
                        sorting: sorting,
                    },
                }}
            />
        </div>
    );
};
