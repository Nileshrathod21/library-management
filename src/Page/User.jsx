import React from "react";
import React, { useMemo, useState } from "react";
import Table from "../Components/Table";
import ExampleWithLocalizationProvider from "../Components/Table";
import { UserData } from "../Components/UserData";
import { useEffect } from "react";
import UserForme from "./AddUserForme";

function Userpage() {
  const [showData, setShowData] = useState([]);
  const [showDialog, setShowDialog] = useState(false);

  const UserColumns = useMemo(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "name", header: "Name" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "username", header: "UserName" },
    ],
    []
  );

  useEffect(() => {
    // if (showData.length < 0)
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(UserData, {
        method: "GET",
      });

      const data = await response.json();
      setShowData(data);
      console.log("get data ", data);

      return data;
    } catch (e) {
      console.error("Can't get data:", e);
    }
  }
  return (
    <div>
      <ExampleWithLocalizationProvider
        btnTitle="Add User"
        title={"Users Management"}
        columns={UserColumns}
        data={showData}
        fetchData={fetchData}
        form={<UserForme fetchData={fetchData} />}
        formTitle={"Add User Details"}
      />
    </div>
  );
}

export default Userpage;
