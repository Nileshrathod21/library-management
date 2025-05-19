import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "../Components/Table.css";
// Material UI Imports
import {
  Box,
  Button,
  ListItemIcon,
  MenuItem,
  Typography,
  lighten,
} from "@mui/material";

// Icons Imports
import { AccountCircle, Margin, Send } from "@mui/icons-material";
import { Add } from "@mui/icons-material";

// Mock Data

import { useMemo } from "react";
import { useParams } from "react-router";
import { CustomMaterialReactTable } from "./NewTable";

// Date Picker Imports - these should just be in your Context Provider

const ExampleWithLocalizationProvider = ({ isBook, title, columns, data }) => (
  // App.tsx or AppProviders file
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <CustomMaterialReactTable
      isBook={isBook}
      title={title}
      columns={columns}
      data={data}
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
      //       Header: ({ column }) => <em>{column.columnDef.header}</em>, // custom header markup
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
  </LocalizationProvider>
);

export default ExampleWithLocalizationProvider;
