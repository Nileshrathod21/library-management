import {
  Input,
  Option,
  Select,
  Textarea,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { FormDataContext } from "../Components/FormDataContext";
import { UserData } from "../Components/UserData";
import { Button } from "@material-tailwind/react";

export default function UserForme({ handleOpen, fetchData }) {
  const { formData, setFormData } = useContext(FormDataContext);

  //   open,
  //   formData,
  //   handleOpen,
  //   fetchData,
  //   formTitle,
  //  {
  //   console.log("curret row ", formData);

  const [initialState, setInitialState] = useState({
    name: "",
    email: "",
    username: "",
  });
  console.log("curret row User", formData);
  useEffect(() => {
    if (formData) {
      setInitialState({
        ...formData,
        available: formData?.available?.toString(),
      });
    }
  }, [formData]);

  const handleSubmit = async () => {
    console.log("onSumib", formData);
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
        handleOpen(false);
        setFormData(null);
      }
      console.log("submit data ", response);
    } catch (e) {
      console.error("Can't get data:", e);
    }
    // handleOpen();
    setInitialState({
      name: "",
      email: "",
      username: "",
    });
  };

  const handleOnChange = (key, value) => {
    console.log("key and value", key, value);

    setInitialState({ ...initialState, [key]: value });
  };
  console.log("initialstate", initialState);
  return (
    <>
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
          value={initialState.name ?? ""}
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
          placeholder="Enter Email"
          name="email"
          className="placeholder:opacity-100 focus:!border-t-gray-900"
          value={initialState.email ?? ""}
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
          Username
        </Typography>
        <Input
          color="gray"
          size="lg"
          placeholder="Enter UserNeame"
          name="username"
          className="placeholder:opacity-100 focus:!border-t-gray-900"
          value={initialState.username ?? ""}
          onChange={(e) => {
            handleOnChange("username", e.target.value);
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
        <Button onClick={() => handleSubmit()}>Submit</Button>
      </div>
    </>
  );
}
