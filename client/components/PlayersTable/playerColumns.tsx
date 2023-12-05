import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Player } from "types/googleSheet";

export const columns: ColumnDef<Player>[] = [
  {
    accessorKey: "#",
    enableHiding: false,
    cell: ({ table, row }) => (
      <div>
        {table
          .getSortedRowModel()
          .rows.findIndex(
            (sortedRow) => sortedRow.getValue("name") == row.getValue("name"),
          ) + 1}
      </div>
    ),
  },
  {
    accessorKey: "name",
    enableHiding: false,
  },
  {
    accessorKey: "Village_name",
  },
  {
    accessorKey: "Kingdom_name",
  },
  {
    accessorKey: "actions_remaining",
    cell: ({ row }) => {
      const actionsLeft = +(row.getValue("actions_remaining") as string);
      let color = "text-green-500";

      switch (true) {
        case actionsLeft > 100_000:
          color = "text-green-500";
          break;
        case actionsLeft > 50_000:
          color = "text-yellow-500";
          break;
        case actionsLeft >= 1_000:
          color = "text-red-500";
          break;

        default:
          color = "text-red-500";
          break;
      }
      return <div className={`${color}`}>{actionsLeft || "#N/A"}</div>;
    },
  },
  {
    accessorKey: "VIP time",
    cell: ({ row }) => {
      const dateString = row.getValue("VIP time") as string;
      const [month, day, year, hour, minute, second] =
        dateString.split(/[\/ :]/);
      const customDate = new Date(
        +year,
        +month - 1,
        +day,
        +hour,
        +minute,
        +second,
      );

      const time = customDate.getTime() - new Date().getTime();

      const days = time / (1000 * 3600 * 24);
      let color = "text-green-500";
      switch (true) {
        case days > 30:
          color = "text-green-500";
          break;
        case days > 10:
          color = "text-yellow-500";
          break;
        case days >= 1:
          color = "text-red-500";
          break;

        default:
          color = "text-black/10";
          break;
      }
      return (
        <div className={`${color} w-max`} title={dateString}>
          {Math.floor(Math.max(days, 0)) + " days left"}
        </div>
      );
    },
    sortingFn: (a, b) => {
      if ((a.getValue("VIP time") as string).split(/[\/ :]/).length !== 6) {
        return -1;
      } else if (
        (b.getValue("VIP time") as string).split(/[\/ :]/).length !== 6
      ) {
        return 1;
      }
      const [monthA, dayA, yearA, hourA, minuteA, secondA] = (
        a.getValue("VIP time") as string
      ).split(/[\/ :]/);
      const [monthB, dayB, yearB, hourB, minuteB, secondB] = (
        b.getValue("VIP time") as string
      ).split(/[\/ :]/);

      const customDateA = new Date(
        +yearA,
        +monthA - 1,
        +dayA,
        +hourA,
        +minuteA,
        +secondA,
      );
      const customDateB = new Date(
        +yearB,
        +monthB - 1,
        +dayB,
        +hourB,
        +minuteB,
        +secondB,
      );

      const timeA = customDateA.getTime();
      const timeB = customDateB.getTime();

      return timeA - timeB;
    },
  },
  {
    accessorKey: "QOL time",
    cell: ({ row }) => {
      const dateString = row.getValue("QOL time") as string;
      const [month, day, year, hour, minute, second] =
        dateString.split(/[\/ :]/);
      // year: number, monthIndex: number, date?: number | undefined, hours?: number | undefined, minutes?: number | undefined, seconds?: number | undefined, ms?: number | undefined
      const customDate = new Date(
        +year,
        +month - 1,
        +day,
        +hour,
        +minute,
        +second,
      );

      const time = customDate.getTime() - new Date().getTime();

      const days = time / (1000 * 3600 * 24);

      let color = "text-green-500";
      switch (true) {
        case days > 30:
          color = "text-green-500";
          break;
        case days > 10:
          color = "text-yellow-500";
          break;
        case days >= 1:
          color = "text-red-500";
          break;

        default:
          color = "text-black/10";
          break;
      }
      return (
        <div className={`${color} w-max`} title={dateString}>
          {Math.floor(Math.max(days, 0)) + " days left"}
        </div>
      );
    },
    sortingFn: (a, b) => {
      if ((a.getValue("QOL time") as string).split(/[\/ :]/).length !== 6) {
        return -1;
      } else if (
        (b.getValue("QOL time") as string).split(/[\/ :]/).length !== 6
      ) {
        return 1;
      }
      const [monthA, dayA, yearA, hourA, minuteA, secondA] = (
        a.getValue("QOL time") as string
      ).split(/[\/ :]/);
      const [monthB, dayB, yearB, hourB, minuteB, secondB] = (
        b.getValue("QOL time") as string
      ).split(/[\/ :]/);

      const customDateA = new Date(
        +yearA,
        +monthA - 1,
        +dayA,
        +hourA,
        +minuteA,
        +secondA,
      );
      const customDateB = new Date(
        +yearB,
        +monthB - 1,
        +dayB,
        +hourB,
        +minuteB,
        +secondB,
      );

      const timeA = customDateA.getTime();
      const timeB = customDateB.getTime();

      return timeA - timeB;
    },
  },
  {
    accessorKey: "lvl",
  },
  {
    accessorKey: "Target Enchant",
  },
  {
    accessorKey: "G1_LH_enchant_boost",
  },
  {
    accessorKey: "G2_RH_enchant_boost",
  },
  {
    accessorKey: "G3_Head_enchant_boost",
  },
  {
    accessorKey: "G4_Chest_enchant_boost",
  },
  {
    accessorKey: "G5_Hands_enchant_boost",
  },
  {
    accessorKey: "G6_Legs_enchant_boost",
  },
  {
    accessorKey: "G7_Feet_enchant_boost",
  },
  {
    accessorKey: "Stat Strength",
  },
  {
    accessorKey: "Stat Health",
  },
  {
    accessorKey: "Stat Agility",
  },
  {
    accessorKey: "Stat Dexterity",
  },
  {
    accessorKey: "Sum Stats",
  },
  {
    accessorKey: "Dungeon lvl",
  },
  {
    accessorKey: "Decorations",
  },
  {
    accessorKey: "HS Mine",
  },
  {
    accessorKey: "HS Farm",
  },
  {
    accessorKey: "HS Logging",
  },
  {
    accessorKey: "HS Fishing",
  },
  {
    accessorKey: "House Chair",
  },
  {
    accessorKey: "House Stove",
  },
  {
    accessorKey: "House Sink",
  },
  {
    accessorKey: "House Basket",
  },
  {
    accessorKey: "House Barrel",
  },
  {
    accessorKey: "Gold gained",
  },
  {
    accessorKey: "Relics gained",
  },
  {
    accessorKey: "Res gained",
  },
  {
    accessorKey: "Total income",
  },
  {
    accessorKey: "Production Ratios",
  },
  {
    accessorKey: "36",
  },
  {
    accessorKey: "37",
  },
  {
    accessorKey: "Score",
  },
  {
    accessorKey: "Diff scores",
  },
  {
    accessorKey: "count scores",
  },
  {
    accessorKey: "cummulative count",
  },
];

// export const columns: ColumnDef<Player>[] = [
//   {
//     id: "number",
//     header: () => <div className="flex items-center justify-center">#</div>,
//     cell: ({ row }) => {
//       return (
//         <div className="flex items-center justify-center">{row.index + 1}</div>
//       );
//     },
//   },
//   {
//     accessorKey: "Diff scores",
//     // header: () => (
//     //   <div className="flex items-center justify-center">Status</div>
//     // ),
//     // cell: ({ row }) => {
//     //   return (
//     //     <div className="flex items-center justify-center">
//     //       {row.getValue("status")}
//     //     </div>
//     //   );
//     // },
//   },
//   {
//     accessorKey: "email",
//     header: () => <div className="flex items-center justify-center">Email</div>,
//     cell: ({ row }) => {
//       return (
//         <div className="flex items-center justify-center">
//           {row.getValue("email")}
//         </div>
//       );
//     },
//   },
//   {
//     accessorKey: "amount",
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         className="flex items-center justify-center mx-auto"
//         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//       >
//         Amount
//         {column.getIsSorted() === "asc" ? (
//           <ArrowUp className="w-4 h-4 ml-2" />
//         ) : (
//           <ArrowDown className="w-4 h-4 ml-2" />
//         )}
//       </Button>
//     ),
//     cell: ({ row }) => {
//       const amount = parseFloat(row.getValue("amount"));
//       const formatted = new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//       }).format(amount);

//       return (
//         <div className="flex items-center justify-center font-medium">
//           {formatted}
//         </div>
//       );
//     },
//   },
// ];
