import React, { useEffect, useState } from "react";
import { Select, MenuItem } from "@mui/material";
import {
  Input,
  Option,
  Select,
  Button,
  Dialog,
  Textarea,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { BooksData } from "./BooksData";

export function DialogBox({ open, currentRow, handleOpen, fetchData }) {
  console.log("curret row ", currentRow);

  const [initialState, setInitialState] = useState({
    name: "",
    type: "",
    language: "",
    available: "",
    quantity: "",
  });
  console.log("init va");
  useEffect(() => {
    if (currentRow) {
      setInitialState({
        ...currentRow,
        available: currentRow?.available?.toString(),
      });
    }
  }, [currentRow]);

  const handleOnChange = (key, value) => {
    console.log("key and value", key, value);

    setInitialState({ ...initialState, [key]: value });
  };
  console.log("initialstate", initialState);
  return (
    <>
      {/* <Button onClick={handleOpen} variant="gradient">
        Add Product
      </Button> */}
      <Dialog size="sm" open={open} className="p-4">
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Add Book Details
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={handleOpen}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="space-y-4 pb-6">
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Name
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="Enter Name"
              name="name"
              className="placeholder:opacity-100 focus:!border-t-gray-900"
              value={initialState.name}
              onChange={(e) => {
                handleOnChange("name", e.target.value);
              }}
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Language
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="Enter Subject"
              name="subject"
              className="placeholder:opacity-100 focus:!border-t-gray-900"
              value={initialState.language}
              onChange={(e) => {
                handleOnChange("language", e.target.value);
              }}
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>

          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Type
            </Typography>
            <Select
              label="Select Type"
              name="type"
              className="!min-w-full"
              value={initialState.type}
              onChange={(val) => {
                handleOnChange("type", val);
              }}
            >
              <Option className="hover:bg-gray-500" value="Investment">
                Investment
              </Option>
              <Option className="hover:bg-gray-500" value=" Philosophy">
                Philosophy
              </Option>
              <Option className="hover:bg-gray-500" value="Science">
                Science
              </Option>
              <Option className="hover:bg-gray-500" value="Math">
                Math
              </Option>
              <Option className="hover:bg-gray-500" value="History">
                History
              </Option>
              <Option className="hover:bg-gray-500" value="Programming">
                Programming
              </Option>
              <Option className="hover:bg-gray-500" value="Social Skill">
                Social Skill
              </Option>
              <Option className="hover:bg-gray-500" value="Spiritual">
                Spiritual
              </Option>
            </Select>
          </div>

          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              available
            </Typography>
            <Select
              label="Select Type"
              name="available"
              className="!min-w-full"
              value={initialState.available}
              onChange={(val) => {
                console.log("onClick available", val);
                handleOnChange("available", val);

                // handleOnChange("available", val);
              }}
            >
              <Option className="hover:bg-gray-500" value={"true"}>
                Yes
              </Option>
              <Option className="hover:bg-gray-500" value={"false"}>
                No
              </Option>
              {/* {options.map((option) => (
                <MenuItem key={option.key} value={option.value}>
                  {option.value}
                </MenuItem>
              ))} */}
            </Select>

            {/* <Input
              color="gray"
              size="lg"
              placeholder="Enter Enroll"
              name="enroll"
              className="placeholder:opacity-100 focus:!border-t-gray-900"
              value={initialState.enroll}
              onChange={(e) => {
                handleOnChange("enroll", { key:e.target.value.toLowerCase(),value:e.target.value});
              }}
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            /> */}
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              quantity
            </Typography>
            <Input
              type="number"
              color="gray"
              size="lg"
              placeholder="Enter QTY "
              name="quantity"
              className="placeholder:opacity-100 focus:!border-t-gray-900"
              value={initialState.quantity}
              onChange={(e) => {
                handleOnChange("quantity", e.target.value);
              }}
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            className="ml-auto"
            onClick={async (e) => {
              console.log("onSumib", initialState);
              try {
                let response;
                if (Object.keys(currentRow).length > 0) {
                  response = await fetch(BooksData + `/${currentRow.id}`, {
                    body: JSON.stringify(initialState),
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                  });
                } else {
                  response = await fetch(BooksData, {
                    body: JSON.stringify(initialState),
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                  });
                }
                if (response.ok) {
                  fetchData();
                }
                console.log("submit data ", response);
              } catch (e) {
                console.error("Can't get data:", e);
              }
              handleOpen();
              setInitialState({
                name: "",
                type: "",
                language: "",
                available: "",
                quantity: "",
              });
            }}
          >
            Submit
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
