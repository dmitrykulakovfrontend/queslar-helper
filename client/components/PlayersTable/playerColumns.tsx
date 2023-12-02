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
    accessorKey: "name",
    enableHiding: false,
    cell: ({ row }) => {
      return <div className="sticky left-0">{row.getValue("name")}</div>;
    },
  },
  {
    accessorKey: "Village_name",
  },
  {
    accessorKey: "Kingdom_name",
  },
  {
    accessorKey: "actions_remaining",
  },
  {
    accessorKey: "VIP time",
    cell: ({ row }) => {
      const time =
        new Date(row.getValue("VIP time")).getTime() - new Date().getTime();

      const days = time / (1000 * 3600 * 24);
      console.log(row.getValue("name"), days, time);
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
        <div className={`sticky left-0 ${color}`}>
          {row.getValue("VIP time")}
        </div>
      );
    },
  },
  {
    accessorKey: "QOL time",
    cell: ({ row }) => {
      const time =
        new Date(row.getValue("QOL time")).getTime() - new Date().getTime();

      const days = time / (1000 * 3600 * 24);
      console.log(row.getValue("name"), days, time);
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
        <div className={`sticky left-0 ${color}`}>
          {row.getValue("QOL time")}
        </div>
      );
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
