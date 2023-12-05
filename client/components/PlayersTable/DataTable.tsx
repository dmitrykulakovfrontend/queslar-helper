import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Input from "components/Input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { SiCheckmarx } from "react-icons/si";
import { ArrowDown, ArrowUp, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Player } from "types/googleSheet";
import { ScrollArea } from "@/components/ui/scroll-area";
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    "36": false,
    "37": false,
    "count scores": false,
    "cummulative count": false,
    "Diff scores": false,
    "House Barrel": false,
    "House Basket": false,
    "House Chair": false,
    "House Sink": false,
    "House Stove": false,
    "Target Enchant": false,
    G1_LH_enchant_boost: false,
    G2_RH_enchant_boost: false,
    G3_Head_enchant_boost: false,
    G4_Chest_enchant_boost: false,
    G5_Hands_enchant_boost: false,
    G6_Legs_enchant_boost: false,
    G7_Feet_enchant_boost: false,
    Decorations: false,
  } as Record<keyof Player, boolean>);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <>
      <div className="flex items-center py-4">
        <Input
          label="Search"
          placeholder="Filter players by name"
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm p-1 rounded-lg"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-4">
              Show/Hide Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="z-20 overflow-y-scroll bg-white rounded-lg shadow-lg max-h-96"
            align="start"
          >
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    onSelect={(e) => e.preventDefault()}
                    className="flex items-center gap-2 p-2 capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="w-full overflow-auto h-[70vh]">
        <Table className="bg-white border rounded-md ">
          <TableHeader className="sticky top-0 z-10 bg-gray-100 hover:cursor-pointer">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      onClick={() =>
                        header.column.toggleSorting(
                          !(header.column.getIsSorted() === "desc"),
                        )
                      }
                      className="relative"
                      key={header.id}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                      {header.column.getIsSorted() === "asc" ? (
                        <ArrowUp className="absolute top-0 -right-2" />
                      ) : header.column.getIsSorted() === "desc" ? (
                        <ArrowDown className="absolute top-0 -right-2" />
                      ) : (
                        ""
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel()?.rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell, index) => (
                    <TableCell key={cell.id} className="text-center">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
