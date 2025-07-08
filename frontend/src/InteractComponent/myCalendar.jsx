
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

const MyCalendar = ({ mode = "full", value, onChange,}) => {
  const theme = useTheme();
  const [dateCalendar, setDateCalendar] = useState(value || dayjs());

  let views = ["year", "month", "day"];
  let label = "Choose date";
  let format = "DD/MM/YYYY";

  if (mode === "month") {
    views = ["year", "month"];
    label = "Choose month";
    format = "MM/YYYY";
  } else if (mode === "year") {
    views = ["year"];
    label = "Choose year";
    format = "YYYY";
  }

  const handleChange = (newValue) => {
    setDateCalendar(newValue);
    
    if (onChange) onChange(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        views={views}
        value={dateCalendar}
        onChange={handleChange}
        format={format}
        slotProps={{
          textField: {
            variant: "outlined",

            size: "small",
            sx: {
              width: "150px",
              height: "100%",
              "& .MuiOutlinedInput-root": {
                height: "100%",
                fontSize: "0.875rem",
                padding: "2px 8px",
                "& fieldset": {
                  borderColor: theme.palette.text.header_option,
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.text.option,
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#fbc02d",
                },
                "& input": {
                  color: theme.palette.text.header_option,
                },
              },
              "& .MuiSvgIcon-root": {
                fill: theme.palette.text.header_option,
              },
              "& label": {
                color: theme.palette.text.header_option,
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default MyCalendar;



