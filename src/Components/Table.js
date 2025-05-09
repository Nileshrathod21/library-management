import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,
} from "material-react-table";

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

// Mock Data
import { data } from "../../src/Components/TableData";
import { useMemo } from "react";

const Example = () => {
  const columns = useMemo(
    () => [
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

  const table = useMaterialReactTable({
    columns,
    data, // data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableColumnFilterModes: false,
    enableColumnOrdering: true,
    enableGrouping: true,
    enableColumnPinning: true,
    enableFacetedValues: true,
    enableRowActions: true,
    enableColumnActions: false,
    enableSorting: false,
    enableColumnDragging: false,
    // enableRowSelection: true,
    initialState: {
      showColumnFilters: false,
      showGlobalFilter: true,
      columnPinning: {
        left: ["mrt-row-expand", "mrt-row-select"],
        right: ["mrt-row-actions"],
      },
    },
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    muiSearchTextFieldProps: {
      size: "small",
      variant: "outlined",
      InputProps: {
        // disableUnderline: true, // Optional: disable underline for the text field
        endAdornment: null, // Remove the clear (X) icon from the end
      },
    },
    muiPaginationProps: {
      color: "secondary",
      rowsPerPageOptions: [10, 20, 30],
      shape: "rounded",
      variant: "outlined",
    },
    // renderDetailPanel: ({ row }) => <></>,
    renderRowActionMenuItems: ({ closeMenu }) => [
      <MenuItem
        key={0}
        onClick={() => {
          // View profile logic...

          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        Edit
      </MenuItem>,
      <MenuItem
        key={1}
        onClick={() => {
          // Send email logic...
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <Send />
        </ListItemIcon>
        Delete
      </MenuItem>,
    ],

    renderTopToolbar: ({ table }) => {
      return (
        <Box
          sx={(theme) => ({
            backgroundColor: lighten(theme.palette.background.default, 0.05),
            display: "flex",
            gap: "0.5rem",
            p: "25px",

            justifyContent: "space-between",
            // alignItems: "center",
          })}
        >
          <Box
            sx={{
              display: "flex",
              gap: "0.5rem",
            }}
          >
            <Button
              color="inherit"
              // disabled={!table.getIsSomeRowsSelected()}
              // onClick={handleContact}
              variant="contained"
              sx={{
                borderTopLeftRadius: "12px",
                borderBottomLeftRadius: "12px",
              }}
            >
              Borrowed Books
            </Button>
            <Button
              // color="black"
              // disabled={!table.getIsSomeRowsSelected()}
              // onClick={handleContact}
              variant="contained"
              sx={{
                backgroundColor: "black",
                color: "white",
                borderTopRightRadius: "12px",
                borderBottomRightRadius: "12px",
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
            >
              Overdue Borrowers
            </Button>
          </Box>
          <MRT_GlobalFilterTextField table={table} />
        </Box>
      );
    },
  });

  return (
    <div className="custom-table-wrapper w-[95%]">
      <MaterialReactTable table={table} />
    </div>
  );
};

// Date Picker Imports - these should just be in your Context Provider

const ExampleWithLocalizationProvider = () => (
  // App.tsx or AppProviders file
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Example />
  </LocalizationProvider>
);

export default ExampleWithLocalizationProvider;
