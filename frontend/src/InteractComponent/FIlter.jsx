import {
  Box,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import dayjs from "dayjs";
import MultiSelectDropdown from "./DropDownMulti";
import MySmartRangePicker from "./DataRangePicker";

export default function FilterForm() {
  const theme = useTheme();
  const [site, setSite] = useState([]);
  const [device, setDevice] = useState([]);
  const [devicetype, setDeviceType] = useState([]);
  const [timeRange, setTimeRange] = useState([
    dayjs().startOf("day"),
    dayjs().endOf("day"),
  ]);
  const [quickTime, setQuickTime] = useState("Today");
  const [severity, setSeverity] = useState([]);
  const [ackStatus, setAckStatus] = useState([]);
  const [alarmStatus, setAlarmStatus] = useState("Active");
  const [type, setType] = useState([]);

  const devices = ["Device 1", "Device 2", "Device 3"];
  const types = ["All Categories", "Category A", "Category B"];

  const handleReset = () => {
    setSite([]);
    setDevice([]);
    setDeviceType([]);
    setTimeRange([dayjs().startOf("day"), dayjs().endOf("day")]);
    setQuickTime("Today");
    setSeverity([]);
    setAckStatus([]);
    setAlarmStatus("Active");
    setType([]);
  };

  const options = [
    "Full Capability",
    "Partial Capability",
    "Service Setpoints",
    "Environment out of Spec",
    "Low Irradiance",
    "Temperature Range",
    "Requested Shutdown",
    "Startup",
    "DC Electrical Disturbance",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "10px",
        color: theme.palette.text.option,
        "& .MuiToggleButton-root": {
          "&.Mui-selected": {
            color: theme.palette.text.button,
            backgroundColor: theme.palette.background.button,
          },
        },
      }}
    >
      {/* Site */}
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Box sx={{ marginRight: "100px", width: "10%" }}>Site:</Box>
        <Box sx={{ width: "20%" }}>
          <MultiSelectDropdown
            options={options}
            label={"Selected Sites"}
            value={site}
            onChange={setSite}
          />
        </Box>
      </Box>

      {/* Device */}
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Box sx={{ marginRight: "100px", width: "10%" }}>Device:</Box>
        <Box sx={{ width: "20%", marginRight: "20px" }}>
          <MultiSelectDropdown
            options={options}
            label={"Select Device Types"}
            value={devicetype}
            onChange={setDeviceType}
          />
        </Box>
        <Box sx={{ width: "20%" }}>
          <MultiSelectDropdown
            options={options}
            label={"Select Device"}
            value={device}
            onChange={setDevice}
          />
        </Box>
      </Box>

      {/* Time */}
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Box sx={{ marginRight: "100px", width: "10%" }}>Time:</Box>
        <Box sx={{ width: "80%" }}>
          <ToggleButtonGroup
            exclusive
            value={quickTime}
            onChange={(e, val) => val && setQuickTime(val)}
            color="primary"
            sx={{
              "& .MuiToggleButton-root": {
                borderColor: theme.palette.text.header_option,
                color: theme.palette.text.header_option,
              },
              "& .Mui-selected": {
                background: theme.palette.text.header_option,
                color: theme.palette.background.default,
                "&:hover": {
                  background: theme.palette.text.option,
                },
              },
            }}
          >
            <ToggleButton value="Today">Today</ToggleButton>
            <ToggleButton value="Last 3 Days">Last 3 Days</ToggleButton>
            <ToggleButton value="Current Month">Current Month</ToggleButton>
            <ToggleButton value="Last 3 Months">Last 3 Months</ToggleButton>
            <MySmartRangePicker
              value={timeRange}
              onChange={(newValue) => setTimeRange(newValue)}
            />
          </ToggleButtonGroup>
        </Box>
      </Box>

      {/* ACK Status */}
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Box sx={{ marginRight: "100px", width: "10%" }}>ACK Status:</Box>
        <Box sx={{ width: "80%" }}>
          <ToggleButtonGroup
            value={ackStatus}
            onChange={(e, val) => setAckStatus(val)}
            color="primary"
            multiple
            sx={{
              "& .MuiToggleButton-root": {
                borderColor: theme.palette.text.header_option,
                color: theme.palette.text.header_option,
              },
              "& .Mui-selected": {
                background: theme.palette.text.header_option,
                color: theme.palette.background.default,
                "&:hover": {
                  background: theme.palette.text.option,
                },
              },
            }}
          >
            <ToggleButton value="ACK">Acknowledged (ACK)</ToggleButton>
            <ToggleButton value="UNACK">Unacknowledged (UNACK)</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>

      {/* Alarm Status */}
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Box sx={{ marginRight: "100px", width: "10%" }}>Alarm Status:</Box>
        <Box sx={{ width: "80%" }}>
          <ToggleButtonGroup
            exclusive
            value={alarmStatus}
            onChange={(e, val) => val && setAlarmStatus(val)}
            color="primary"
            sx={{
              "& .MuiToggleButton-root": {
                borderColor: theme.palette.text.header_option,
                color: theme.palette.text.header_option,
              },
              "& .Mui-selected": {
                background: theme.palette.text.header_option,
                color: theme.palette.background.default,
                "&:hover": {
                  background: theme.palette.text.option,
                },
              },
            }}
          >
            <ToggleButton value="Active">Active</ToggleButton>
            <ToggleButton value="Inactive">Inactive</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>

      {/* Type */}
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Box sx={{ marginRight: "100px", width: "10%" }}>Type:</Box>
        <Box sx={{ width: "20%" }}>
          <MultiSelectDropdown
            options={options}
            label={"Type"}
            value={type}
            onChange={setType}
          />
        </Box>
      </Box>

      {/* Buttons */}
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        <Button
          variant="outlined"
          sx={{
            color: theme.palette.text.header_option,
            borderColor: theme.palette.text.header_option,
            "&:hover": {
              borderColor: theme.palette.text.option,
              color: theme.palette.text.option,
            },
          }}
          onClick={handleReset}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          sx={{
            background: theme.palette.text.header_option,
            color: theme.palette.background.default,
            "&:hover": {
              background: theme.palette.text.option,
            },
          }}
          onClick={() =>
            console.log({
              site,
              device,
              quickTime,
              timeRange,
              severity,
              ackStatus,
              alarmStatus,
              type,
            })
          }
        >
          Apply
        </Button>
      </Box>
    </Box>
  );
}
