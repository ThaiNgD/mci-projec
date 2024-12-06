/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { MantineTableCustomProps } from "@/components/MantineTableCustom";
export const configTableManagerAccount: MantineTableCustomProps<UserInfo>["column"] =
  [
    {
      accessor: "uid",
      title: "Mã KH",
      sortable: true,
    },
    {
      accessor: "full_name",
      title: "Họ và tên",
    },
    {
      accessor: "phone_number",
      title: "SĐT",
    },
    {
      accessor: "email",
      title: "Email",
    },
    {
      accessor: "client",
      title: "Người tiếp thị",
    },
    {
      accessor: "source",
      title: "Nguồn",
    },
    {
      accessor: "notes",
      title: "Ghi chú",
    },
    {
      accessor: "created_at",
      title: "Ngày tạo",
    },
  ];
export const StateInfo: MantineTableCustomProps<UserInfo>["column"] = [
  {
    accessor: "uid",
    title: "Ngày",
    sortable: true,
  },
  {
    accessor: "result",
    title: "Kết quả chăm sóc",
  },
  {
    accessor: "status",
    title: "Cập nhật trạng thái",
  },
];
