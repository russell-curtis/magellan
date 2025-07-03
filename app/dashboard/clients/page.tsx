"use client";

import useSWR from "swr";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function ClientsPage() {
  const { data: clients, isLoading } = useSWR("/api/clients", fetcher);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Clients</h1>
      <p className="text-muted-foreground text-sm">
        Manage all CRBI applicants here.
      </p>

      <div className="mt-4">
        <DataTable
          columns={columns}
          data={clients || []}
          isLoading={isLoading}
          searchableColumns={["name", "email"]}
        />
      </div>
    </div>
  );
} 