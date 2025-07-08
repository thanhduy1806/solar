import MyRangeCalendar from "../InteractComponent/DataRangePicker";
import AvailabilityInfo from "../InteractComponent/AvailibilityInfo";
import MyLineChart from "../ChartComponents/LineChart2";
import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs"; // lib datetime using
import {
  alignItems,
  Box,
  display,
  flex,
  height,
  justifyContent,
  sizeHeight,
} from "@mui/system";
import DropDownButton from "../InteractComponent/DropDownButton";
import CombinedChart from "../ChartComponents/CombineChart";
import ThermometerGaugeSVG from "../ChartComponents/ThermometerGaugeSVG";
import RowBar from "../ChartComponents/RowBar";
import IconDropDown from "../InteractComponent/IconDropDown";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import TocIcon from "@mui/icons-material/Toc";
import MarginIcon from "@mui/icons-material/Margin";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import DonutChart from "../ChartComponents/DonutChart";
import HandymanIcon from "@mui/icons-material/Handyman";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MyButton from "../InteractComponent/myButton";
import MyCalendar from "../InteractComponent/myCalendar";
import MultiSelectDropdown from "../InteractComponent/DropDownMulti";
import SortTable from "../TableDevice/SortTable";
import ThreeBoxScrollableTable from "../TableDevice/StickyColumnTable";
import { useTheme } from "@mui/material/styles";
import DownLoadCSV from "../InteractComponent/DonwLoadCSV";

const options = ["Event", "Device", "None"];

const columns = [
  { field: "site", headerName: "Site" },
  { field: "content", headerName: "Alarm Content" },
  { field: "severity", headerName: "Severity" },
  { field: "start", headerName: "Start Time" },
  { field: "duration", headerName: "Duration" },

  { field: "endtime", headerName: "End Time" },
  { field: "device", headerName: "Device" },
  { field: "devicetype", headerName: "Device Type" },
  { field: "type", headerName: "Type" },
  { field: "allocation", headerName: "Allocation Category" },
  { field: "capicity", headerName: "Affected Capicity" },
  { field: "comment", headerName: "Comment" },
  { field: "operations", headerName: "Operations" },
];

const rows = [
  {
    site: "Site 1",
    content: "Voltage High",
    severity: "High",
    start: "12:00",
    duration: "2h",
  },
  {
    site: "Site 2",
    content: "Temp Low",
    severity: "Low",
    start: "13:00",
    duration: "1h",
  },
  {
    site: "Site 3",
    content: "Voltage High",
    severity: "High",
    start: "12:00",
    duration: "2h",
  },
  {
    site: "Site 4",
    content: "Temp Low",
    severity: "Low",
    start: "13:00",
    duration: "1h",
  },
  {
    site: "Site 5",
    content: "Voltage High",
    severity: "High",
    start: "12:00",
    duration: "2h",
  },
  {
    site: "Site 6",
    content: "Temp Low",
    severity: "Low",
    start: "13:00",
    duration: "1h",
  },
];

const option1 = [
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

const option2 = [
  "Full Capability",
  "Partial Capability",
  "Service Setpoints",
  "Environment out of Spec",
  "Low Irradiance",
  "Temperature Range",
];
const option3 = [
  "Full Capability",
  "Partial Capability",
  "Low Irradiance",
  "Temperature Range",
  "Requested Shutdown",
  "Startup",
  "DC Electrical Disturbance",
];
const option4 = [
  "Low Irradiance",
  "Temperature Range",
  "Requested Shutdown",
  "Startup",
  "DC Electrical Disturbance",
];

const testcsv = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"],
]


export default function ActiveAlarm() {
  const [site, setSite] = useState([]);
  const [time, setTime] = useState();
  const [pick, setPick] = useState("Event");
  const handleChange = (event) => {
    setPick(event.target.value);
    setTime(event.target.value);
    console.log("Selected:", event.target.value);
  };
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column", padding: "20px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "20px"
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1
              
            }}
          >
            <Box sx={{width: "150px"}}>
              <MultiSelectDropdown label={"Selected Site"} options={option1} value={site} onChange={setSite} />
            </Box>
            <Box sx={{width: "150px"}}>
              <MultiSelectDropdown label={"Alarm Severity"} options={option2} value={site} onChange={setSite} />
            </Box>
            <Box sx={{width: "150px"}}>
              <MultiSelectDropdown
                label={"Selected Categories"}
                options={option3}
                value={site} onChange={setSite}
              />
            </Box>
            <Box sx={{width: "150px"}}>
              <MultiSelectDropdown label={"Selected Site"} options={option4} value={site} onChange={setSite} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Box>Aggregate By</Box>
            <Box>
              <DropDownButton
                options={options}
                handleChange={handleChange}
                pick={pick}
              />
            </Box>
            <Box>
              <DownLoadCSV filename={"activealarm.csv"} data={testcsv}/>
            </Box>
          </Box> 
        </Box>

        <Box sx={{
          boxShadow: '5px 5px 15px rgba(0,0,0,0.3)',
        }}>
          <ThreeBoxScrollableTable rows={rows} columns={columns} />
        </Box>
      </Box>
    </div>
  );
}
