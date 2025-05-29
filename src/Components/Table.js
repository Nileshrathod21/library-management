import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "../Components/Table.css";
// Material UI Imports
import { Typography } from "@material-tailwind/react";
import { CustomMaterialReactTable } from "./NewTable";

// Date Picker Imports - these should just be in your Context Provider

const ExampleWithLocalizationProvider = ({
  btnTitle,
  isCatalog,
  title,
  columns,
  data,
  fetchData,
  form,
  formTitle,
}) => (
  // App.tsx or AppProviders file
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <CustomMaterialReactTable
      title={title}
      columns={columns}
      isCatalog={isCatalog}
      data={data}
      fetchData={fetchData}
      btnTitle={btnTitle}
      form={form}
      formTitle={formTitle}
    />
  </LocalizationProvider>
);

export default ExampleWithLocalizationProvider;
