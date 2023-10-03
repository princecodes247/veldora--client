// import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useReducer, useState } from "react";
import { BucketStructureItem, IBucketDataWithStats } from "@/interfaces";
import { useMutate } from "@/hooks/useMutate";
import { updateBucket, updateBucketStructure } from "@/services/BucketService";

import { DataStructureBuilder } from "./DataStructureBuilder";
type Action =
  | { type: "ADD_ITEM"; payload: BucketStructureItem }
  | { type: "REMOVE_ITEM"; payload: string };

export function BucketStructure({ bucket }: { bucket: IBucketDataWithStats }) {
  function dataStructureReducer(
    state: BucketStructureItem[],
    action: Action,
  ): BucketStructureItem[] {
    switch (action.type) {
      case "ADD_ITEM":
        return [...state, action.payload];
      case "REMOVE_ITEM":
        return state.filter(
          (item) => item.name.toLowerCase() !== action.payload.toLowerCase(),
        );
      default:
        return state;
    }
  }
  const [dataStructure, dataStructureDispatch] = useReducer(
    dataStructureReducer,
    bucket.structure,
  );

  const updateBucketMutation = useMutate(updateBucketStructure, {
    loadingMessage: "Updating Bucket",
  });

  const handleSubmitDataStructure = () =>
    updateBucketMutation.mutate({
      id: bucket?._id ?? "",
      bucketStructure: dataStructure,
    });

  return (
    <>
      <Card className="max-w-[700px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Validations</CardTitle>
          <CardDescription>Restrict data from being saved</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="text"></Label>
            <DataStructureBuilder
              structure={dataStructure}
              structureDispatch={dataStructureDispatch}
              bucket={bucket}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button onClick={handleSubmitDataStructure} className="w-full">
            Update Data Structure
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
