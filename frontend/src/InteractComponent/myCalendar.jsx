import { DatePicker } from "@mui/x-date-pickers/DatePicker"; // table to choose calendar
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"; // support datepicker to know: which lib?, format data?...
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"; // “bộ chuyển đổi” để MUI hiểu được thư viện Day.js mà bạn đang dùng.
import dayjs from "dayjs"; // lib datetime using
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

const MyCalendar = () => {
  const theme = useTheme();
  let date = Date();
  const [dateCalendar, setDateCalendar] = useState(dayjs(date));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Choose your date"
        value={dateCalendar}
        onChange={(newValue) => setDateCalendar(newValue)}
        slotProps={{
          borderColor: theme.palette.text.header_option,
          textField: {
            sx: {
              
                maxHeight : "100%",
              // màu viền
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: theme.palette.text.header_option,
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.text.header_option,
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.palette.text.header_option,
                },
                "& input": {
                  color: theme.palette.text.header_option,
                },
                "& .MuiOutlinedInput-root:hover fieldset": {
                  borderColor: "#fbc02d", // vàng sáng chẳng hạn
                },
              },

              "& .MuiPickersOutlinedInput-root": {
                color: theme.palette.text.header_option,
                borderColor: theme.palette.text.header_option,
              },
              "& .css-1umw9bq-MuiSvgIcon-root": {
                fill: theme.palette.text.header_option,
              },
              // màu chữ
              input: {
                color: theme.palette.text.header_option,
              },
              // màu label
              label: {
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
