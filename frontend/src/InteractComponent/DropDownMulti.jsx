// import React, { useState } from "react";
// import {
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Checkbox,
//   ListItemText,
//   TextField,
// } from "@mui/material";

// const options = [
//   "Full Capability",
//   "Partial Capability",
//   "Service Setpoints",
//   "Environment out of Spec",
//   "Low Irradiance",
//   "Temperature Range",
//   "Requested Shutdown",
//   "Startup",
//   "DC Electrical Disturbance",
// ];

// export default function MultiSelectDropdown({ label, options, value, onChange }) {
//   const [search, setSearch] = useState("");

//   const handleChange = (event) => {
//     onChange(event.target.value);
//   };

//   const filteredOptions = options.filter(option =>
//     option.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <FormControl sx={{ width: "100%" }}>
//       <InputLabel>{label}</InputLabel>
//       <Select
//         multiple
//         value={value}
//         onChange={handleChange}
//         renderValue={(selected) => selected.join(", ")}
//         MenuProps={{
//           PaperProps: {
//             style: { maxHeight: 300 },
//           },
//         }}
//       >
//         <MenuItem disableRipple>
//           <TextField
//             autoFocus
//             size="small"
//             placeholder="Search..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             fullWidth
//           />
//         </MenuItem>

//         <MenuItem disabled divider />

//         {filteredOptions.map((option) => (
//           <MenuItem key={option} value={option}>
//             <Checkbox checked={value.indexOf(option) > -1} />
//             <ListItemText primary={option} />
//           </MenuItem>
//         ))}

//         {filteredOptions.length === 0 && (
//           <MenuItem disabled>No results</MenuItem>
//         )}
//       </Select>
//     </FormControl>
//   );
// }


import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function MultiSelectDropdown({ label, options, value, onChange }) {
  const [search, setSearch] = useState("");
  const theme = useTheme();

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel
        sx={{
          color: theme.palette.text.header_option,
          "&.Mui-focused": {
            color: theme.palette.text.option,
          },
        }}
      >
        {label}
      </InputLabel>
      <Select
        multiple
        value={value}
        onChange={handleChange}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={{
          PaperProps: {
            style: { 
              maxHeight: 300,
              background: theme.palette.background.paper,
              color: theme.palette.text.header_option,
            },
          },
        }}
        sx={{
          background: theme.palette.background.default,
          color: theme.palette.text.header_option,
          "& .MuiSelect-icon": {
            color: theme.palette.text.header_option,
          },
          "& fieldset": {
            borderColor: theme.palette.text.header_option,
          },
          "&:hover fieldset": {
            borderColor: theme.palette.text.option,
          },
          "&.Mui-focused fieldset": {
            borderColor: theme.palette.text.option,
          },
        }}
      >
        <MenuItem disableRipple>
          <TextField
            autoFocus
            size="small"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                color: theme.palette.text.header_option,
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.text.header_option,
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.text.option,
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.text.option,
              },
            }}
          />
        </MenuItem>

        <MenuItem disabled divider />

        {filteredOptions.map((option) => (
          <MenuItem key={option} value={option}>
            <Checkbox
              checked={value.indexOf(option) > -1}
              sx={{
                color: theme.palette.text.header_option,
                "&.Mui-checked": {
                  color: theme.palette.text.option,
                },
              }}
            />
            <ListItemText
              primary={option}
              sx={{ color: theme.palette.text.header_option }}
            />
          </MenuItem>
        ))}

        {filteredOptions.length === 0 && (
          <MenuItem disabled>No results</MenuItem>
        )}
      </Select>
    </FormControl>
  );
}
