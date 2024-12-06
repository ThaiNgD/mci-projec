/* eslint-disable @typescript-eslint/no-explicit-any */
import sortBy from "lodash/sortBy";
import {
  DataTable,
  DataTableColumn,
  DataTableProps,
  DataTableSortStatus,
} from "mantine-datatable";
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
type DataTablePropsNew<T> = Omit<
  DataTableProps<T>,
  | "columns"
  | "records"
  | "groups"
  | "withBorder"
  | "borderRadius"
  | "loaderSize"
  | "loaderVariant"
  | "loaderColor"
  | "emptyState"
  | "customLoader"
  | "loaderType"
>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MantineTableCustomProps<T = any> = {
  column: Array<DataTableColumn<T>>;
  data: T[];
  tableHeight?: string;
  idAccessor: string;
  PAGE_SIZES?: number[];
  initSort?: DataTableSortStatus;
  isNoStt?: boolean;
  isSearch?: boolean;
  dependency?: T[];
  funcSearch?: (item?: T) => boolean;
  funcSearchSuccess?: (filteData?: T) => void;
  pase_size_active?:
    | "first_child"
    | "last_child"
    | ((data: number[]) => number);
  dependencyPageSize?: T[];
  clsTable?: string;
  isCustomLastColumn?: boolean;
  fucPageSizeChange?: (
    setPageSize: React.Dispatch<React.SetStateAction<number>>,
    PAGE_SIZES: number[]
  ) => void;
  selectedRecords?: T[];
  setSelectedRecords?: Dispatch<SetStateAction<T[]>>;
} & DataTablePropsNew<T>;

const MantineTableCustom: FC<MantineTableCustomProps> = ({
  column,
  data,
  PAGE_SIZES = [10, 20, 50, 100, 200],
  initSort = {
    columnAccessor: "invoice",
    direction: "asc",
  },
  isNoStt = false,
  isSearch,
  dependency = [],
  pase_size_active = "first_child",
  funcSearch,
  clsTable,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isCustomLastColumn,
  funcSearchSuccess,
  idAccessor,
  selectedRecords,
  setSelectedRecords,
  ...rest
}): JSX.Element => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(() => {
    let num = 0;
    if (typeof pase_size_active === "string") {
      num =
        pase_size_active === "first_child"
          ? PAGE_SIZES[0]
          : PAGE_SIZES[PAGE_SIZES.length - 1];
    } else {
      num = pase_size_active(PAGE_SIZES);
    }
    return num;
  });
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>(initSort);
  const [filteredData, setFilteredData] = useState(data);

  const sortedData = useMemo(() => {
    const sortedRecords = sortBy(filteredData, sortStatus.columnAccessor);
    return sortStatus.direction === "desc"
      ? sortedRecords.reverse()
      : sortedRecords;
  }, [filteredData, sortStatus]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return sortedData.slice(start, end);
  }, [sortedData, page, pageSize]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    if (isSearch && funcSearch) {
      const result = data.filter(funcSearch);
      setFilteredData(result);
      if (funcSearchSuccess) {
        funcSearchSuccess(result);
      }
    } else {
      setFilteredData(data);
    }
  }, [isSearch, data, ...dependency]);

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  const EmptyState = (): JSX.Element => (
    <div className="flex flex-col justify-center">Không có dữ liệu</div>
  );
  return (
    <div className={`custom-table h-full`}>
      <div className={`datatables pagination-padding h-full`}>
        <DataTable
          withTableBorder={true}
          className={`whitespace-nowrap !min-h-[25vh] ${clsTable} border table-hover rounded-lg`}
          noRecordsText={"Không có dữ liệu"}
          paginationText={({ from, to, totalRecords }): string =>
            `Hiển thị từ ${from} đến ${to} trong
             ${totalRecords} dữ liệu`
          }
          highlightOnHover
          idAccessor={idAccessor}
          {...rest}
          records={paginatedData}
          columns={
            isNoStt
              ? (column as DataTableColumn<Record<string, unknown>>[])
              : ([
                  {
                    accessor: "index",
                    title: "STT",
                    textAlignment: "right",
                    width: 60,
                    render: (record) =>
                      (page - 1) * pageSize + paginatedData.indexOf(record) + 1,
                  },
                  ...column,
                ] as DataTableColumn<Record<string, unknown>>[])
          }
          totalRecords={filteredData?.length}
          recordsPerPage={pageSize}
          page={page}
          onPageChange={(p): void => setPage(p)}
          recordsPerPageOptions={PAGE_SIZES}
          onRecordsPerPageChange={setPageSize}
          sortStatus={sortStatus}
          onSortStatusChange={setSortStatus}
          selectedRecords={selectedRecords}
          onSelectedRecordsChange={setSelectedRecords}
          noRecordsIcon={<EmptyState />}
          pinLastColumn={isCustomLastColumn}
        />
      </div>
    </div>
  );
};

export default MantineTableCustom;
