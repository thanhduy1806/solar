import { useTheme } from "@mui/material/styles";
import { Select, MenuItem, FormControl, OutlinedInput } from "@mui/material";

function DropDownButton({ options, handleChange, pick }) {
  let theme = useTheme();
  return (
    <Select
      value={pick}
      onChange={handleChange}
      sx={{
        color: theme.palette.text.header_option,

        width: "150px",
        height: "40px",
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            color: theme.palette.text.header_option,
            borderColor: theme.palette.text.header_option,
          },
        },
      }}
      input={
        <OutlinedInput
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.text.header_option, // màu viền bình thường
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.text.header_option, // màu viền khi hover
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.text.header_option, // màu viền khi focus
            },
          }}
        />
      }
    >
      {options.map((item) => (
        <MenuItem
          key={item}
          value={item}
          sx={{
            color: theme.palette.text.header_option,
            borderColor: theme.palette.text.header_option,
          }}
        >
          {item}
        </MenuItem>
      ))}
    </Select>
  );
}

export default DropDownButton;
