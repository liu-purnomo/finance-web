"use client";

import { BudgetApi } from "@/api";
import Table from "@/components/common/table";
import { DateFormat } from "@/utilities/functions/format/date";
import { NumberFormat } from "@/utilities/functions/format/number";
import { useMemoQuery } from "@/utilities/hooks/useMemoQuery";
import { useQuery } from "@tanstack/react-query";
import Tippy from "@tippyjs/react";
import { MRT_ColumnDef } from "mantine-react-table";
import { useCallback, useMemo, useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import "tippy.js/dist/tippy.css";
import { FormCreate } from "./form";

export const DataTable = () => {
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
        queryKey: ["BudgetsData", memoQuery],
        queryFn: () => BudgetApi.index(memoQuery),
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

    const columns = useMemo<MRT_ColumnDef<Budget>[]>(
        () => [
            {
                accessorKey: "category",
                header: "Category",
                Cell: ({ row }) => (
                    <div className="">{row?.original?.Category?.name}</div>
                ),
            },
            {
                accessorKey: "description",
                header: "Description",
                Cell: ({ row }) => (
                    <div className="truncate">{row?.original?.description}</div>
                ),
            },
            {
                accessorKey: "periodStart",
                header: "From",
                Cell: ({ row }) => (
                    <div className="">
                        {DateFormat.dmY(row?.original?.periodStart)}
                    </div>
                ),
            },
            {
                accessorKey: "periodEnd",
                header: "To",
                Cell: ({ row }) => (
                    <div className="">
                        {DateFormat.dmY(row?.original?.periodEnd)}
                    </div>
                ),
            },
            {
                accessorKey: "amount",
                header: "Amount",
                Cell: ({ row }) => (
                    <div className="flex justify-end">
                        <div>
                            {NumberFormat.amount(
                                Number(row?.original?.amount || 0),
                            )}
                        </div>
                    </div>
                ),
            },
        ],
        [],
    );

    return (
        <div>
            <FormCreate
                onSubmitForm={handleOnSubmitForm}
                setShowModal={handleOnCloseForm}
                showModal={showForm}
                data={dataToEdit}
            />

            <Table
                tableName="Budget"
                columns={columns as any}
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
                rowClickAction={(row) => handleEditData(row.original)}
            />
        </div>
    );
};
