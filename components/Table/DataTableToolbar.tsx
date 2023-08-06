import { Table } from "@tanstack/react-table";
import { Trash, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./DataTableViewOptions";
import { priorities, statuses } from "@/constants/data";
import { DataTableFacetedFilter } from "./DataTableFacetedFilter";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  onDelete: (table: Table<TData>) => void
}

export function DataTableToolbar<TData>({
  table,
  onDelete
}: DataTableToolbarProps<TData>) {
  const isFiltered =
    table.getPreFilteredRowModel().rows.length >
    table.getFilteredRowModel().rows.length;


  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center flex-1 space-x-2">
        <Input
          placeholder="Filter submissions..."
          value={(table.getColumn("_id")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("_id")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("priority") && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={priorities}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
      <div className="flex gap-2">
        <DataTableViewOptions table={table} />
        {
          table.getSelectedRowModel().rows.length > 0 &&
        <Button
        variant={"ghost"}
          className="h-8"
          disabled={false}
          onClick={() => onDelete(table)}
        >
          <Trash className="w-4 h-4 mr-2" />
          
          Delete {table.getSelectedRowModel().rows.length} row{table.getSelectedRowModel().rows.length > 1 && "s"}
        </Button>
        }
      </div>
    </div>
  );
}
