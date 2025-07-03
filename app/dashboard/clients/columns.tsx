import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

export type Client = {
  id: number;
  name: string;
  email: string;
  programId: string;
  assignedTo: string;
  status: "active" | "on-hold" | "withdrawn";
  createdAt: string;
};

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="flex items-center">
        <span className="font-medium">{row.getValue("name")}</span>
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <a href={`mailto:${row.getValue("email")}`} className="text-blue-600 hover:underline">
        {row.getValue("email")}
      </a>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge
          variant={
            status === "active"
              ? "default"
              : status === "on-hold"
              ? "secondary"
              : "destructive"
          }
          className={
            status === "active"
              ? "bg-green-100 text-green-800 hover:bg-green-200"
              : status === "on-hold"
              ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
              : "bg-red-100 text-red-800 hover:bg-red-200"
          }
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row }) => format(new Date(row.getValue("createdAt")), "dd MMM yyyy"),
  },
]; 