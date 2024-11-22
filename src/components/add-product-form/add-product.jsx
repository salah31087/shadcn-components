import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function AddProduct() {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col gap-6 max-w-screen-sm">
        <div className="flex flex-col gap-2">
          <Label>Product Name</Label>
          <Input placeholder="Product Name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Product Description</Label>
          <Textarea placeholder="Product Description" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Product Category</Label>
          <Select className="">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
