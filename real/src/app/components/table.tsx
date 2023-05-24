"use client";

import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

type Player = {
  id: number;
  name: string;
  position: string;
};

const tableData: Player[] = [
  {
    id: 0,
    name: "jimmy butler",
    position: "F",
  },
  {
    id: 1,
    name: "nikola jokic",
    position: "C",
  },
  {
    id: 2,
    name: "Chris Paul",
    position: "G",
  },
];

const columnHelper = createColumnHelper<Player>();

const columns = [
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
    header: (info) => <span>Id</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: () => <span>Id</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("position", {
    cell: (info) => info.getValue(),
    header: () => <span>Id</span>,
    footer: (info) => info.column.id,
  }),
];

const Table = () => {
  const [data, setData] = useState(tableData);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return <div></div>;
};

export default Table;
