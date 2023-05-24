"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";

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
    header: (info) => <span>id</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: () => <span>name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("position", {
    cell: (info) => info.getValue(),
    header: () => <span>position</span>,
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

  useEffect(() => {
    console.log(table);
  }, [table]);
  return (
    <table className={"border-2 border-amber-500"}>
      <thead className={"border-2 border-amber-500"}>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className={"border-2 border-amber-500 px-4"}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className={"border-2 border-amber-500 text-center"}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
