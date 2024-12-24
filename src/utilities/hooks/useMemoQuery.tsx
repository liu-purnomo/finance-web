'use client';
import { MRT_ColumnFiltersState, MRT_PaginationState, MRT_SortingState } from 'mantine-react-table';
import { useMemo, useState } from 'react';

export const useMemoQuery = () => {
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>([]);

  const [globalFilter, setGlobalFilter] = useState(null);

  const columnFilter = (array: MRT_ColumnFiltersState, col: string) => {
    if (array.length === 0) {
      return null;
    } else {
      const filteredArray = array.filter((data: any) => data.id === col);
      return filteredArray[0]?.value as string;
    }
  };

  const [sorting, setSorting] = useState<MRT_SortingState>([
    {
      id: 'createdAt',
      desc: true,
    },
  ]);

  const memoQuery = useMemo<any>(() => {
    const query: any = {
      page: pagination.pageIndex + 1,
      size: pagination.pageSize,
      search: globalFilter,
      sort: sorting && sorting[0] ? sorting[0]?.id : null,
      order: sorting[0]?.desc ? 'DESC' : 'ASC',
    };

    columnFilters.forEach((filter: any) => {
      query[filter.id] = columnFilter(columnFilters, filter.id);
    });

    return query;
  }, [pagination, globalFilter, sorting, columnFilters]);

  return {
    pagination,
    setPagination,
    columnFilter,
    columnFilters,
    setColumnFilters,
    globalFilter,
    setGlobalFilter,
    sorting,
    setSorting,
    memoQuery,
  };
};
