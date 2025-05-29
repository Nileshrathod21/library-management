import React, { useMemo, useState } from "react";
import Table from "../Components/Table";
import ExampleWithLocalizationProvider from "../Components/Table";
import { BooksData } from "../Components/BooksData";
import { useEffect } from "react";
import AddBookForme from "./AddBookForme";

function BooksPage() {
  const [showData, setShowData] = useState([]);
  const [showDialog, setShowDialog] = useState(false);

  const BooksColumns = useMemo(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "name", header: "Name" },
      { accessorKey: "language", header: "Language" },
      { accessorKey: "type", header: "Type" },
      { accessorKey: "quantity", header: "Quantity" },
      {
        accessorKey: "available",
        header: "Enrolled",
        Cell: ({ cell }) => (cell.getValue() ? "Yes" : "No"),
      },
    ],
    []
  );

  useEffect(() => {
    // if (showData.length < 0)
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(BooksData, {
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
        btnTitle={"Add Book"}
        title={"Book Management"}
        columns={BooksColumns}
        data={showData}
        fetchData={fetchData}
        form={<AddBookForme fetchData={fetchData} />}
        formTitle={"Add Book Details"}

        // showDialog={}
      />
    </div>
  );
}

export default BooksPage;
