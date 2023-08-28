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

export function DataStructureBuilder() {
  return (
    <div>
      <div>
        {"{"}
        <p></p>
        {"}"}
      </div>
      <div>
        <div className="mb-2">
          <Label htmlFor="text">Input Name</Label>

          <Input />
        </div>
        <div className="mb-2">
          <Label htmlFor="text">Input Type</Label>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a type" />
            </SelectTrigger>
            <SelectContent className="h-36">
              <SelectItem value="integer">
                <span className="font-medium">Integer</span> -{" "}
                <span className="text-muted-foreground">
                  A whole number, like 42
                </span>
              </SelectItem>
              <SelectItem value="pro">
                <span className="font-medium">Decimal</span> -{" "}
                <span className="text-muted-foreground">
                  A number with a decimal point, like 3.14
                </span>
              </SelectItem>

              <SelectItem value="text">
                <span className="font-medium">Text</span> -{" "}
                <span className="text-muted-foreground">
                  A short string of text, like "Hello World"
                </span>
              </SelectItem>
              <SelectItem value="longtext">
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
          <Label htmlFor="text">Input Default Value</Label>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a default value" />
            </SelectTrigger>
            <SelectContent className="h-36">
              <SelectItem value="null">
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
      </div>
    </div>
  );
}
