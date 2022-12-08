import {
  ActiveExploration,
  ExplorationBoosts,
  OverviewElement,
  Tile,
} from "../types/api";
import { data } from "../utils/mockApi";

type Kingdom = {
  tiles: Tile[];
  overview: Array<OverviewElement[]>;
  explorationBoosts: ExplorationBoosts;
  activeExploration: ActiveExploration;
  gods: { [key: string]: number };
};
// const columnHelper = createColumnHelper<Kingdom>();

import * as React from "react";
import { ApiData } from "../types/api";

import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

console.log(data.kingdom);

const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
];

const defaultData2: ApiData[] = [data];

const columnHelper = createColumnHelper<ApiData>();

const columns = [
  columnHelper.group({
    header: "Gods",
    columns: [
      columnHelper.group({
        header: "The Holy Kingdom Cat",
        columns: [
          columnHelper.accessor("kingdom.gods.cats_roar", {
            header: "Cat's Roar",
            cell: (info) => info.getValue(),
          }),
          columnHelper.accessor("kingdom.gods.cats_claw", {
            header: "Cat's Claw",
            cell: (info) => info.getValue(),
          }),
          columnHelper.accessor("kingdom.gods.cats_cut", {
            header: "Cat's Cut",
            cell: (info) => info.getValue(),
          }),
          columnHelper.accessor("kingdom.gods.cats_fur", {
            header: "Cat's Fur",
            cell: (info) => info.getValue(),
          }),
        ],
      }),
      columnHelper.group({
        header: "Kingdom PvP Boosts",
        columns: [
          columnHelper.accessor("kingdom.gods.inspired", {
            header: "Inspired",
            cell: (info) => info.getValue(),
          }),
          columnHelper.accessor("kingdom.gods.proficiency", {
            header: "Proficiency",
            cell: (info) => info.getValue(),
          }),
          columnHelper.accessor("kingdom.gods.last_stand", {
            header: "Last Stand",
            cell: (info) => info.getValue(),
          }),
          columnHelper.accessor("kingdom.gods.consume", {
            header: "Consume",
            cell: (info) => info.getValue(),
          }),
        ],
      }),
    ],
  }),
];

export default function Table() {
  const [data, setData] = React.useState(() => [...defaultData2]);
  const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <table className="p-1 border">
        <thead className="p-1 border">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className="p-1 border" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="p-1 border"
                  key={header.id}
                  colSpan={header.colSpan}
                >
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
        <tbody className="p-1 border">
          {table.getRowModel().rows.map((row) => (
            <tr className="p-1 border" key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className="p-1 border" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot className="p-1 border">
          {table.getFooterGroups().map((footerGroup) => (
            <tr className="p-1 border" key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th
                  className="p-1 border"
                  key={header.id}
                  colSpan={header.colSpan}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
      <button onClick={() => rerender()} className="p-2 border">
        Rerender
      </button>
    </div>
  );
}
