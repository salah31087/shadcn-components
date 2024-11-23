

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

import { labels, priorities, statuses } from "../data/data"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Task" />
    ),
    cell: ({ row }) => <div className="w-[80px] text-xs text-muted-foreground">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "orderStatus",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("orderStatus")
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.value === "onhold" && (
            <Badge variant="onhold">
              <status.icon size={14} className="mr-1.5" />
              {status.label}
            </Badge>
          )}
          {status.value === "completed" && (
            <Badge variant="active">
              <status.icon size={14} className="mr-1.5" />
              {status.label}
            </Badge>
          )}
          {status.value === "rejected" && (
            <Badge variant="deleted">
              <status.icon size={14} className="mr-1.5" />
              {status.label}
            </Badge>
          )}
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "orderName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order name" />
    ),
    cell: ({ row }) => {

      return (
        <span className="max-w-[500px] truncate font-medium">
          {row.getValue("orderName")}
        </span>
      )
    },
  },
  {
    accessorKey: "user",
    header: () => (
      <span className="text-xs select-none">User details</span>
    ),
    cell: ({ row }) => {
      const user = row.getValue("user");
      return (
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage
              src={user.avatar}
              className="object-cover"
              alt={user.fullName}
            />
            <AvatarFallback>{user.fullName.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-xs">@{user.userName}</div>
            <div className="text-xs text-gray-500 capitalize">{user.accountType}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "orderTotalCredit",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total amount" />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("orderTotalCredit"));
      return <Badge className="text-left">{amount} DZD</Badge>;
    },
    sortingFn: (rowA, rowB, columnId) => {
      const a = parseFloat(rowA.getValue(columnId));
      const b = parseFloat(rowB.getValue(columnId));
      return b - a;
    },
  },
  {
    accessorKey: "quantityOrdered",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity" />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("quantityOrdered"));
      return <span className="text-left text-xs font-semibold">{amount} units</span>;
    },
    sortingFn: (rowA, rowB, columnId) => {
      const a = parseFloat(rowA.getValue(columnId));
      const b = parseFloat(rowB.getValue(columnId));
      return b - a;
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Timeline" />
    ),
    cell: ({ row }) => {
      const formatDate = (dateValue) => {
        if (!dateValue) return 'Not delivered yet';

        try {
          return new Date(dateValue).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          });
        } catch (error) {
          return 'Not delivered yet';
        }
      };

      const createdDate = formatDate(row.original.createdAt);
      const deliveredDate = formatDate(row.original.deliveredAt);

      return (
        <div className="space-y-1">
          <div className="text-xs font-semibold">
            Created: {createdDate}
          </div>
          <div className="text-xs font-semibold text-gray-500">
            Delivered: {deliveredDate}
          </div>
        </div>
      );
    },
    sortingFn: (rowA, rowB, columnId) => {
      const getTime = (date) => {
        try {
          return new Date(date).getTime();
        } catch {
          return 0;
        }
      };

      const dateA = getTime(rowA.getValue(columnId));
      const dateB = getTime(rowB.getValue(columnId));
      return dateB - dateA;
    },
  },
  {
    accessorKey: "estimatedDeliveryDate",
    header: () => (
      <span className="text-xs select-none">Estimated Delivery</span>
    ),
    cell: ({ row }) => <Badge variant="outline" className="text-left font-medium select-none">{row.getValue("estimatedDeliveryDate")}</Badge>,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]