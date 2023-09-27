import clsx from "clsx";
import { Logo } from "./Logo";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Dispatch, useReducer, useState } from "react";
import { Delete, X } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Separator } from "./ui/separator";
import {
  BucketValidationIsOptionalInputValues,
  BucketValidationIsUniqueInputValues,
  BucketValidationTypeInputValues,
} from "@/constants/settings";
import {
  BucketStructureItem,
  IBucketData,
  IBucketDataWithStats,
} from "@/interfaces";

export function DataStructureBuilder({
  bucket,
  structure,
  structureDispatch,
}: {
  bucket: IBucketDataWithStats;
  structure: BucketStructureItem[];
  structureDispatch: Dispatch<any>;
}) {
  const [newInputName, setNewInputName] = useState("");
  const [newInputType, setNewInputType] = useState("text");
  const [newInputIsUnique, setNewInputIsUnique] = useState(false);
  const [newInputDefaultValue, setNewInputDefaultValue] = useState("none");
  const [newInputIsOptional, setNewInputIsOptional] = useState(true);

  const handleAddItem = () => {
    structureDispatch({
      type: "ADD_ITEM",
      payload: {
        name: newInputName,
        type: newInputType,
        unique: newInputIsUnique,
        default: newInputDefaultValue,
        required: newInputIsOptional,
      },
    });

    setNewInputName("");
    setNewInputType("text");
    setNewInputDefaultValue("none");
  };

  return (
    <div>
      <div className="mb-4">
        {"{"}
        {structure.length === 0 && (
          <p className="px-4 py-px text-sm italic text-muted-foreground">
            Flexible: ...Any data sent would be collected
          </p>
        )}
        {structure.map((item, index) => (
          <div key={index} className="flex items-center gap-2 px-4 py-px">
            <p className="mb-2 text-sm text-muted-foreground">
              {item.name}: {item.type} |{" "}
              {item.required ? "optional" : "required"},{" "}
              {item.unique ? "unique" : ""}, {item.default}
            </p>
            <Button
              className=""
              onClick={() => {
                structureDispatch({
                  type: "REMOVE_ITEM",
                  payload: item.name,
                });
              }}
              size="icon"
              variant="ghost"
            >
              <X size={12} />
            </Button>
          </div>
        ))}
        {"}"}
      </div>
      <Separator />
      <div className="my-4 mt-2 px-4 py-2">
        {/* <p className="font-semibold">Add new data input</p> */}
        <div className="mb-2">
          <Label htmlFor="text">New Input Name</Label>

          <Input
            placeholder="New Input Name"
            value={newInputName}
            onChange={(e) => setNewInputName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <Label htmlFor="text">Input Type</Label>

          <Select
            onValueChange={(value) => {
              setNewInputType(value);
            }}
            value={newInputType}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a input type" />
            </SelectTrigger>
            <SelectContent className="h-36">
              {BucketValidationTypeInputValues.map((validationItem) => (
                <SelectItem value={validationItem.value}>
                  <span className="font-medium">{validationItem.name}</span>
                  <span className="hidden text-muted-foreground md:inline">
                    {" "}
                    - {validationItem.description}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="mb-2">
          <Label htmlFor="text">Optional</Label>

          <RadioGroup
            className="py-4"
            value={newInputIsOptional ? "yes" : "no"}
            onValueChange={(value: "yes" | "no") =>
              setNewInputIsOptional(value === "yes")
            }
          >
            {BucketValidationIsOptionalInputValues.map((item) => (
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={item.value} id={item.value} />
                <Label htmlFor={item.value}>
                  {item.name}
                  <span className="hidden text-muted-foreground md:inline">
                    {" "}
                    - {item.description}
                  </span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        <div className="mb-2">
          <Label htmlFor="text">Unique</Label>

          <RadioGroup
            className="py-4"
            value={newInputIsUnique ? "yes" : "no"}
            onValueChange={(value: "yes" | "no") =>
              setNewInputIsUnique(value === "yes")
            }
          >
            {BucketValidationIsUniqueInputValues.map((item) => (
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={item.value} id={item.value} />
                <Label htmlFor={item.value}>
                  {item.name}
                  <span className="hidden text-muted-foreground md:inline">
                    {" "}
                    - {item.description}
                  </span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="mb-2">
          <Label htmlFor="text">Input Default Value</Label>

          <Select
            value={newInputDefaultValue}
            onValueChange={(value) => {
              setNewInputDefaultValue(value);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a default value" />
            </SelectTrigger>
            <SelectContent className="h-36">
              <SelectItem value="none">
                <span className="font-medium">None</span>
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - No default value
                </span>
              </SelectItem>
              <SelectItem value="current-time">
                <span className="font-medium">Current Time</span>
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - The current time
                </span>
              </SelectItem>
              <SelectItem value="current-date">
                <span className="font-medium">Current Date</span>
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - The current date
                </span>
              </SelectItem>
              <SelectItem value="current-date-time">
                <span className="font-medium">Current Date & Time</span>
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - The current date & time
                </span>
              </SelectItem>
              <SelectItem value="custom">
                <span className="font-medium">Custom</span>
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - A custom value
                </span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          disabled={newInputName.trim() === ""}
          onClick={handleAddItem}
          variant="outline"
        >
          Add Input
        </Button>
      </div>
      {/* <Separator /> */}
    </div>
  );
}
