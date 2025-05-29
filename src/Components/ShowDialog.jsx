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

export function DialogBox({
  open,
  formData,
  handleOpen,
  onClick,
  fetchData,
  form,
  formTitle,
}) {
  // const handleOnChange = (key, value) => {
  //   console.log("key and value", key, value);

  //   setInitialState({ ...initialState, [key]: value });
  // };
  // console.log("initialstate", initialState);
  return (
    <>
      {/* <Button onClick={handleOpen} variant="gradient">
        Add Product
      </Button> */}
      <Dialog size="sm" open={open} className="p-4">
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            {formTitle}
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
        <DialogBody className="space-y-4 pb-6">{form}</DialogBody>
        {/* <DialogFooter>
      
        </DialogFooter> */}
      </Dialog>
    </>
  );
}
