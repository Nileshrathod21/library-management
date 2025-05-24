import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "../Components/Table.css";
// Material UI Imports

import { CustomMaterialReactTable } from "./NewTable";

// Date Picker Imports - these should just be in your Context Provider

const ExampleWithLocalizationProvider = ({
  isBook,
  title,
  columns,
  data,
  fetchData,
}) => (
  // App.tsx or AppProviders file
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <CustomMaterialReactTable
      isBook={isBook}
      title={title}
      columns={columns}
      data={data}
      fetchData={fetchData}
    />
  </LocalizationProvider>
);

export default ExampleWithLocalizationProvider;
