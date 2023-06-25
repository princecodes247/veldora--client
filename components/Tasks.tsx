import path from "path";
import { Metadata } from "next";
import Image from "next/image";
import { z } from "zod";
import rawTasks from "@/constants/mock/tasks.json";
import { columns } from "@/constants/mock/Columns";
import { DataTable } from "@/components/Table/DataTable";
import { UserNav } from "@/components/UserNav";
import { taskSchema } from "@/constants/index";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

// Simulate a database read for tasks.
function getTasks() {
  const tasks = JSON.parse(rawTasks.toString());
  console.log({ tasks });
  return z.array(taskSchema).parse(tasks);
  return tasks;
}

export default async function TaskPage() {
  const tasks = getTasks();

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      {/* <div className="flex-col flex-1 hidden h-full p-8 space-y-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div> */}
    </>
  );
}
