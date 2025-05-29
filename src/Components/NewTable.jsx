import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,
} from "material-react-table";

// Icons Imports
import { AccountCircle, Margin, Send, Subject } from "@mui/icons-material";
import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  ListItemIcon,
  MenuItem,
  Typography,
  lighten,
} from "@mui/material";
import { DialogBox } from "./ShowDialog";
import { useContext, useState } from "react";
import { BooksData } from "./BooksData";
import { FormDataContext } from "./FormDataContext";

export const CustomMaterialReactTable = ({
  btnTitle,
  isCatalog = false,
  title,
  columns,
  data,
  fetchData,
  form,
  formTitle,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const { formData, setFormData } = useContext(FormDataContext);
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
    enableStickyHeader: true,
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
    muiTableContainerProps: {
      sx: {
        maxHeight: "400px", // Or whatever height you want
        overflowY: "auto",
      },
    },
    // renderDetailPanel: ({ row }) => <></>,

    renderRowActionMenuItems: ({ row, closeMenu }) => [
      <MenuItem
        key={0}
        onClick={() => {
          // View profile logic...
          console.log("roeewww esit", row);

          setFormData(row.original);
          setOpen(true);
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
        onClick={async () => {
          console.log("row", row);

          try {
            await fetch(BooksData + `/${row.original.id}`, {
              method: "DELETE",
            });
            fetchData();
          } catch (e) {
            console.error("Can't get data:", e);
          }
          // Send email logic...
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        {/* <ListItemIcon>
          <Send />
        </ListItemIcon> */}
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
              alignItems: "center",
            }}
          >
            {!isCatalog ? (
              <h1 className="font-bold text-xl">{title}</h1>
            ) : (
              <>
                <Button
                  color="inherit"
                  variant="contained"
                  sx={{
                    borderTopLeftRadius: "12px",
                    borderBottomLeftRadius: "12px",
                  }}
                >
                  Borrowed Books
                </Button>
                <Button
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
              </>
            )}
          </Box>

          <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            {btnTitle && (
              <Button
                variant="contained"
                startIcon={<Add />}
                onClick={() => {
                  setFormData({});
                  handleOpen();
                }}
                //   async () => {
                //   // console.log(isBook ? "Add Book clicked" : "Add User clicked");
                //   const res = await fetch(BooksData, {
                //     method: "GET",
                //   });
                //   const data = await res.json();
                //   console.log(data);
                // }}
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  textTransform: "none",
                  borderRadius: "8px",
                  px: "16px",
                  "&:hover": {
                    backgroundColor: "#222",
                  },
                }}
              >
                {btnTitle}
              </Button>
            )}

            <MRT_GlobalFilterTextField table={table} />
          </Box>
        </Box>
      );
    },
  });

  return (
    <div className="custom-table-wrapper w-[95%]">
      <MaterialReactTable
        table={table}
        isCatalog={isCatalog}
        columns={columns}
        data={data}
      />
      <DialogBox
        open={open}
        form={form}
        handleOpen={handleOpen}
        fetchData={fetchData}
        formTitle={formTitle}
      />
    </div>
  );
};
