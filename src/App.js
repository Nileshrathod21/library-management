import React, { useMemo } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import ExampleWithLocalizationProvider from "./Components/Table";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Dashboard from "./Components/dashboardgraph";
import { catlogData } from "../TableData";
import { Box } from "@mui/material";

function Applayout() {
  // return (
  //   <ThemeProvider>
  //     <div className="flex">
  //       <div className="w-[20%] h-screen ">
  //         <DefaultSidebar />
  //       </div>
  //       <div className="flex-1 h-screen overflow-hidden relative">
  //         <TopNavbar />
  //         <ExampleWithLocalizationProvider />
  //       </div>
  //     </div>
  //   </ThemeProvider>
  // );

  const studentColumns = useMemo(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "name", header: "Name" },
      { accessorKey: "grade", header: "Grade" },
      {
        accessorKey: "enrolled",
        header: "Enrolled",
        Cell: ({ cell }) => (cell.getValue() ? "Yes" : "No"),
      },
    ],
    []
  );

  const catalogTable = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        size: 100,
      },
      {
        accessorKey: "userId",
        header: "User ID",
        size: 150,
      },
      {
        accessorKey: "amount",
        header: "Amount",
        size: 120,
        Cell: ({ cell }) => `$${cell.getValue()?.toFixed(2)}`, // format as currency
      },
      {
        accessorFn: (row) => `${row.firstName} ${row.lastName}`, // accessorFn used to join multiple data into a single cell
        id: "name", // id is still required when using accessorFn instead of accessorKey
        header: "Name",
        size: 250,
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
            <span>{renderedCellValue}</span>
          </Box>
        ),
      },
      {
        accessorFn: (row) => new Date(row.startDate), // convert to Date for sorting and filtering
        id: "startDate",
        header: "Start Date",
        filterVariant: "date",
        filterFn: "lessThan",
        sortingFn: "datetime",
        Cell: ({ cell }) => cell.getValue()?.toLocaleDateString(), // render Date as a string
        Header: ({ column }) => <em>{column.columnDef.header}</em>, // custom header markup
        muiFilterTextFieldProps: {
          sx: {
            minWidth: "250px",
          },
        },
      },
      {
        accessorKey: "createdBy", // accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        enableClickToCopy: true,
        filterVariant: "autocomplete",
        header: "Created By",
        size: 300,
      },

      {
        accessorKey: "description", // hey a simple column for once
        header: "Description",
        size: 350,
      },
    ],
    []
  );

  const teacherColumns = useMemo(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "name", header: "Name" },
      { accessorKey: "subject", header: "Subject" },
      {
        accessorKey: "hireDate",
        header: "Hire Date",
        Cell: ({ cell }) => new Date(cell.getValue()).toLocaleDateString(),
      },
    ],
    []
  );

  const studentData = [
    { id: 1, name: "Alice", grade: "A", enrolled: true },
    { id: 2, name: "Bob", grade: "B", enrolled: false },
  ];

  const teacherData = [
    { id: 1, name: "Mr. Smith", subject: "Math", hireDate: "2019-08-15" },
    { id: 2, name: "Ms. Johnson", subject: "English", hireDate: "2020-01-10" },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/book"
            element={
              <ExampleWithLocalizationProvider
                isBook={true}
                title={"Book Management"}
                columns={teacherColumns}
                data={teacherData}
              />
            }
          />
          <Route
            path="/Users"
            element={
              <ExampleWithLocalizationProvider
                isBook={false}
                title={"Users Management"}
                columns={studentColumns}
                data={studentData}

                // column={useMemo(
                //   () => [
                //     {
                //       accessorKey: "id",
                //       header: "ID",
                //       size: 100,
                //     },
                //     {
                //       accessorKey: "userId",
                //       header: "User ID",
                //       size: 150,
                //     },
                //     {
                //       accessorKey: "amount",
                //       header: "Amount",
                //       size: 120,
                //       Cell: ({ cell }) => `$${cell.getValue()?.toFixed(2)}`, // format as currency
                //     },
                //     {
                //       accessorFn: (row) => `${row.firstName} ${row.lastName}`, // accessorFn used to join multiple data into a single cell
                //       id: "name", // id is still required when using accessorFn instead of accessorKey
                //       header: "Name",
                //       size: 250,
                //       Cell: ({ renderedCellValue, row }) => (
                //         <Box
                //           sx={{
                //             display: "flex",
                //             alignItems: "center",
                //             gap: "1rem",
                //           }}
                //         >
                //           {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
                //           <span>{renderedCellValue}</span>
                //         </Box>
                //       ),
                //     },
                //     {
                //       accessorFn: (row) => new Date(row.startDate), // convert to Date for sorting and filtering
                //       id: "startDate",
                //       header: "Start Date",
                //       filterVariant: "date",
                //       filterFn: "lessThan",
                //       sortingFn: "datetime",
                //       Cell: ({ cell }) => cell.getValue()?.toLocaleDateString(), // render Date as a string
                //       Header: ({ column }) => (
                //         <em>{column.columnDef.header}</em>
                //       ), // custom header markup
                //       muiFilterTextFieldProps: {
                //         sx: {
                //           minWidth: "250px",
                //         },
                //       },
                //     },
                //     {
                //       accessorKey: "createdBy", // accessorKey used to define `data` column. `id` gets set to accessorKey automatically
                //       enableClickToCopy: true,
                //       filterVariant: "autocomplete",
                //       header: "Created By",
                //       size: 300,
                //     },

                //     {
                //       accessorKey: "description", // hey a simple column for once
                //       header: "Description",
                //       size: 350,
                //     },
                //   ],
                //   []
                // )}
              />
            }
          />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route
            path="/Catalog"
            element={
              <ExampleWithLocalizationProvider
                columns={catalogTable}
                data={catlogData}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
