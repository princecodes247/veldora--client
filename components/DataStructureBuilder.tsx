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
import { useReducer, useState } from "react";
import { Delete, X } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

interface DataItem {
  id: number;
  name: string;
  type: string;
  isOptional: boolean;
  defaultValue: string;
}

type Action =
  | { type: "ADD_ITEM"; payload: DataItem }
  | { type: "REMOVE_ITEM"; payload: number };

const initialState: DataItem[] = [];

function dataStructureReducer(state: DataItem[], action: Action): DataItem[] {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

export function DataStructureBuilder() {
  const [dataStructure, dispatch] = useReducer(
    dataStructureReducer,
    initialState,
  );

  const [newInputName, setNewInputName] = useState("");
  const [newInputType, setNewInputType] = useState("text");
  const [newInputDefaultValue, setNewInputDefaultValue] = useState("none");
  const [newInputIsOptional, setNewInputIsOptional] = useState(false);

  const handleAddItem = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: dataStructure.length,
        name: newInputName,
        type: newInputType,
        defaultValue: newInputDefaultValue,
        isOptional: false,
      },
    });

    setNewInputName("");
    setNewInputType("text");
    setNewInputDefaultValue("none");
  };

  return (
    <div>
      <div>
        {"{"}
        {dataStructure.length === 0 && (
          <p className="px-4 py-px text-sm italic text-muted-foreground">
            ...Any data you collect from your form will be stored...
          </p>
        )}
        {dataStructure.map((item, index) => (
          <div className="flex items-center gap-2 px-4 py-px">
            <p className="text-sm text-muted-foreground">
              {item.name}: {item.type} | {item.defaultValue},
            </p>
            <Button
              className=""
              onClick={() => {
                dispatch({
                  type: "REMOVE_ITEM",
                  payload: item.id,
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
      <div className="my-4 rounded border px-4 py-2 shadow">
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
              <SelectItem value="text">
                <span className="font-medium">Text</span> -{" "}
                <span className="text-muted-foreground">
                  A short string of text, like "Hello World"
                </span>
              </SelectItem>
              <SelectItem value="long-text">
                <span className="font-medium">Long Text</span> -{" "}
                <span className="text-muted-foreground">
                  A long string of text, like a blog post
                </span>
              </SelectItem>
              <SelectItem value="email">
                <span className="font-medium">Email</span> -{" "}
                <span className="text-muted-foreground">
                  An email address, like "support@veldora.io"
                </span>
              </SelectItem>
              <SelectItem value="integer">
                <span className="font-medium">Integer</span> -{" "}
                <span className="text-muted-foreground">
                  A whole number, like 42
                </span>
              </SelectItem>
              <SelectItem value="decimal">
                <span className="font-medium">Decimal</span> -{" "}
                <span className="text-muted-foreground">
                  A number with a decimal point, like 3.14
                </span>
              </SelectItem>
              <SelectItem value="url">
                <span className="font-medium">URL</span> -{" "}
                <span className="text-muted-foreground">
                  A URL, like "https://veldora.io"
                </span>
              </SelectItem>
              <SelectItem value="phone">
                <span className="font-medium">Phone</span> -{" "}
                <span className="text-muted-foreground">
                  A phone number, like "555-555-5555"
                </span>
              </SelectItem>

              <SelectItem value="boolean">
                <span className="font-medium">Boolean</span> -{" "}
                <span className="text-muted-foreground">
                  A true or false value
                </span>
              </SelectItem>
              <SelectItem value="date">
                <span className="font-medium">Date</span> -{" "}
                <span className="text-muted-foreground">
                  A date, like 2021-01-01
                </span>
              </SelectItem>
              <SelectItem value="photo">
                <span className="font-medium">Photo</span> -{" "}
                <span className="text-muted-foreground">
                  A photo, like "https://veldora.io/photo.png"
                </span>
              </SelectItem>
              <SelectItem value="file">
                <span className="font-medium">File</span> -{" "}
                <span className="text-muted-foreground">
                  A file, like "https://veldora.io/file.pdf"
                </span>
              </SelectItem>
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
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">
                Yes -{" "}
                <span className="text-muted-foreground">
                  The input is optional
                </span>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no">
                No -{" "}
                <span className="text-muted-foreground">
                  The input is required
                </span>
              </Label>
            </div>
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
                <span className="font-medium">None</span> -{" "}
                <span className="text-muted-foreground">No default value</span>
              </SelectItem>
              <SelectItem value="current-time">
                <span className="font-medium">Current Time</span> -{" "}
                <span className="text-muted-foreground">The current time</span>
              </SelectItem>
              <SelectItem value="current-date">
                <span className="font-medium">Current Date</span> -{" "}
                <span className="text-muted-foreground">The current date</span>
              </SelectItem>
              <SelectItem value="current-date-time">
                <span className="font-medium">Current Date & Time</span> -{" "}
                <span className="text-muted-foreground">
                  The current date & time
                </span>
              </SelectItem>
              <SelectItem value="custom">
                <span className="font-medium">Custom</span> -{" "}
                <span className="text-muted-foreground">A custom value</span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button onClick={handleAddItem} variant="outline">
          Add Input
        </Button>
      </div>
    </div>
  );
}
