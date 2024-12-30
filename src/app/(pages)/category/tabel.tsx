/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { CategoryApi } from "@/api";
import CategoryIcon from "@/assets/icons/catagoryIcon";
import { Alert } from "@/components/common/alert";
import Table from "@/components/common/table";
import { useMemoQuery } from "@/utilities/hooks/useMemoQuery";
import { useMutation, useQuery } from "@tanstack/react-query";
import Tippy from "@tippyjs/react";
import { MRT_ColumnDef } from "mantine-react-table";
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

    const { mutateAsync: deleteCategory } = useMutation({
        mutationFn: CategoryApi.delete,
    });

    const handleDeleteData = async (id: string) => {
        try {
            const response = await deleteCategory(id);
            refetch();
            Alert.success(response?.message);
        } catch (error: any) {
            Alert.error(error?.response?.data?.message);
        }
    };

    const confirmDelete = (id: string) => {
        Alert.confirm({
            callback() {
                handleDeleteData(id);
            },
        });
    };

    const columns = useMemo<MRT_ColumnDef<any>[]>(
        () => [
            {
                accessorKey: "icon",
                header: "Icon",
                Cell: ({ row }) => (
                    <div className="w-8 h-8">
                        {row?.original?.icon && (
                            <div className="text-[darkblue] w-8 h-8 rounded-full bg-blue-100  flex justify-center items-center">
                                <CategoryIcon icon={row?.original?.icon} />
                            </div>
                        )}
                    </div>
                ),
            },
            {
                accessorKey: "name",
                header: "Name",
            },
            {
                accessorKey: "type",
                header: "Type",
            },
            {
                accessorKey: "action",
                header: "Action",
                Cell: ({ row }) => (
                    <div className="flex items-center justify-center gap-2">
                        <button
                            onClick={() => handleEditData(row?.original)}
                            className="btn btn-outline-success btn-sm"
                            type="button"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => confirmDelete(row?.original?.id)}
                            className="btn btn-outline-danger btn-sm"
                        >
                            Delete
                        </button>
                    </div>
                ),
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
