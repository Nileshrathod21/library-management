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
import { UserData } from "./UserData";

export function UserDialogBox({ open, formData, handleOpen, fetchData }) {
  console.log("curret row ", formData);

  const [initialState, setInitialState] = useState({
    name: "",
    type: "",
    language: "",
    available: "",
    quantity: {},
  });
  console.log("init va");
  useEffect(() => {
    if (formData) {
      setInitialState({
        ...formData,
        available: formData?.available?.toString(),
      });
    }
  }, [formData]);

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
            Add User Details
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
              Email
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="Enter Subject"
              name="subject"
              className="placeholder:opacity-100 focus:!border-t-gray-900"
              value={initialState.language}
              onChange={(e) => {
                handleOnChange("email", e.target.value);
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
              UserName
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="Enter Subject"
              name="username"
              className="placeholder:opacity-100 focus:!border-t-gray-900"
              value={initialState.language}
              onChange={(e) => {
                handleOnChange("email", e.target.value);
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
                if (Object.keys(formData).length > 0) {
                  response = await fetch(UserData + `/${formData.id}`, {
                    body: JSON.stringify(initialState),
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                  });
                } else {
                  response = await fetch(UserData, {
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
                email: "",
                username: "",
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
