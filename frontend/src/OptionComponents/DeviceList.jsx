import { Button, Stack } from "@mui/material";
import MyBarChart from "../ChartComponents/BarChart";
import MyLineChart from "../ChartComponents/LineChart2";
import InverterRanking from "../DataComponents/InverterRanking";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { DatePicker } from "@mui/x-date-pickers/DatePicker"; // table to choose calendar
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"; // support datepicker to know: which lib?, format data?...
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"; // “bộ chuyển đổi” để MUI hiểu được thư viện Day.js mà bạn đang dùng.
import dayjs from "dayjs"; // lib datetime using
import MyButton from "../InteractComponent/myButton";
import MyCalendar from "../InteractComponent/myCalendar";
import { Box, sizeHeight } from "@mui/system";
import { ThemeContext } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
import PowerIcon from "@mui/icons-material/Power";
import { DiBackbone } from "react-icons/di";
import { PiPlugChargingBold } from "react-icons/pi";
import { GiCharging } from "react-icons/gi";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from "@mui/material";

const inverterData = [
  {
    name: "FULUH_Canteen 1_Inverter 1",
    status: "String normal",
    meter: 668561.81,
    power: 5.22,
    input: 5.37,
    efficiency: 97.26,
    production: 205.9,
    temp: 52.2,
    downString: 0,
    yield: 1.3,
  },
  {
    name: "FULUH_Canteen 1_Inverter 2",
    status: "String normal",
    meter: 695064.19,
    power: 5.57,
    input: 5.73,
    efficiency: 97.19,
    production: 227.8,
    temp: 52.3,
    downString: 0,
    yield: 1.3,
  },
  {
    name: "FULUH_Canteen 1_Inverter 3",
    status: "String normal",
    meter: 705464.08,
    power: 5.78,
    input: 5.93,
    efficiency: 97.58,
    production: 232.4,
    temp: 52.8,
    downString: 0,
    yield: 1.3,
  },
  {
    name: "FULUH_Canteen 2_Inverter 1",
    status: "String normal",
    meter: 671858.58,
    power: 5.5,
    input: 5.66,
    efficiency: 97.17,
    production: 216.3,
    temp: 53.4,
    downString: 0,
    yield: 1.3,
  },
  {
    name: "FULUH_Canteen 4_Inverter 2",
    status: "String normal",
    meter: 461407.13,
    power: 3.53,
    input: 3.63,
    efficiency: 97.18,
    production: 164.4,
    temp: 46.1,
    downString: 0,
    yield: 1.3,
  },
  {
    name: "FULUH_Parking Lot 1_Inverter 3",
    status: "String normal",
    meter: 52918.15,
    power: 3.65,
    input: 3.75,
    efficiency: 97.35,
    production: 151.0,
    temp: 38.8,
    downString: 0,
    yield: 1.3,
  },
  {
    name: "FULUH_Parking Lot 1_Inverter 4",
    status: "String normal",
    meter: 52918.15,
    power: 3.65,
    input: 3.75,
    efficiency: 97.35,
    production: 151.0,
    temp: 38.8,
    downString: 0,
    yield: 1.3,
  },
  {
    name: "FULUH_Parking Lot 1_Inverter 5",
    status: "String normal",
    meter: 52918.15,
    power: 3.65,
    input: 3.75,
    efficiency: 97.35,
    production: 151.0,
    temp: 38.8,
    downString: 0,
    yield: 1.3,
  },
  {
    name: "FULUH_Parking Lot 1_Inverter 6",
    status: "String normal",
    meter: 52918.15,
    power: 3.65,
    input: 3.75,
    efficiency: 97.35,
    production: 151.0,
    temp: 38.8,
    downString: 0,
    yield: 1.3,
  },
  {
    name: "FULUH_Parking Lot 1_Inverter 7",
    status: "String normal",
    meter: 52918.15,
    power: 3.65,
    input: 3.75,
    efficiency: 97.35,
    production: 151.0,
    temp: 38.8,
    downString: 0,
    yield: 1.3,
  },
];

const meterdata = [
  {
    name: "BK slot 1",
    state: "--",
    type: "Energy Meter",
    attribute: "Main Meter",
    active_generate: "3,342.758",
    active_consume: "193.32",
    reactive_generate: "18,235.12",
    reactive_consume: "10,323.11",
  },
  {
    name: "BK slot 2",
    type: "Energy Meter",
    state: "--",
    attribute: "Main Meter",
    active_generate: "623.789.12",
    active_consume: "193.32",
    reactive_generate: "18,235.12",
    reactive_consume: "10,323.11",
  },
  {
    name: "BK slot 3",
    type: "Energy Meter",
    state: "--",
    attribute: "Main Meter",
    active_generate: "3,342.78",
    active_consume: "116.32",
    reactive_generate: "18,235.12",
    reactive_consume: "10,323.11",
  },
  {
    name: "BK slot 4",
    type: "Energy Meter",
    state: "--",
    attribute: "Main Meter",
    active_generate: "452,222.3",
    active_consume: "289.23",
    reactive_generate: "18,235.12",
    reactive_consume: "10,323.11",
  },
  {
    name: "BK slot 4",
    type: "Energy Meter",
    state: "--",
    attribute: "Main Meter",
    active_generate: "567,137.23",
    active_consume: "71.23",
    reactive_generate: "18,235.12",
    reactive_consume: "10,323.11",
  },
];

const weatherdata = [
  {
    name: "BK slot 4",
    state: "--",
    poa: "--",
    poa2: "--",
    ghi: "--",
    ambient_temp: "--",
    module_temp_1: "--",
    module_temp_2: "--",
    module_temp_3: "--",
    humidity: "--",
    wind_direction: "--",
    wind_speed: "--",
    rainfall: "--",
  },
  {
    name: "BK slot 4",
    state: "--",
    poa: "--",
    poa2: "--",
    ghi: "--",
    ambient_temp: "--",
    module_temp_1: "--",
    module_temp_2: "--",
    module_temp_3: "--",
    humidity: "--",
    wind_direction: "--",
    wind_speed: "--",
    rainfall: "--",
  },
  {
    name: "BK slot 4",
    state: "--",
    poa: "--",
    poa2: "--",
    ghi: "--",
    ambient_temp: "--",
    module_temp_1: "--",
    module_temp_2: "--",
    module_temp_3: "--",
    humidity: "--",
    wind_direction: "--",
    wind_speed: "--",
    rainfall: "--",
  },
  {
    name: "BK slot 4",
    state: "--",
    poa: "--",
    poa2: "--",
    ghi: "--",
    ambient_temp: "--",
    module_temp_1: "--",
    module_temp_2: "--",
    module_temp_3: "--",
    humidity: "--",
    wind_direction: "--",
    wind_speed: "--",
    rainfall: "--",
  },
  {
    name: "BK slot 4",
    state: "--",
    poa: "--",
    poa2: "--",
    ghi: "--",
    ambient_temp: "--",
    module_temp_1: "--",
    module_temp_2: "--",
    module_temp_3: "--",
    humidity: "--",
    wind_direction: "--",
    wind_speed: "--",
    rainfall: "--",
  },
  {
    name: "BK slot 4",
    state: "--",
    poa: "--",
    poa2: "--",
    ghi: "--",
    ambient_temp: "--",
    module_temp_1: "--",
    module_temp_2: "--",
    module_temp_3: "--",
    humidity: "--",
    wind_direction: "--",
    wind_speed: "--",
    rainfall: "--",
  },
  {
    name: "BK slot 4",
    state: "--",
    poa: "--",
    poa2: "--",
    ghi: "--",
    ambient_temp: "--",
    module_temp_1: "--",
    module_temp_2: "--",
    module_temp_3: "--",
    humidity: "--",
    wind_direction: "--",
    wind_speed: "--",
    rainfall: "--",
  },
  {
    name: "BK slot 4",
    state: "--",
    poa: "--",
    poa2: "--",
    ghi: "--",
    ambient_temp: "--",
    module_temp_1: "--",
    module_temp_2: "--",
    module_temp_3: "--",
    humidity: "--",
    wind_direction: "--",
    wind_speed: "--",
    rainfall: "--",
  },
  {
    name: "BK slot 4",
    state: "--",
    poa: "--",
    poa2: "--",
    ghi: "--",
    ambient_temp: "--",
    module_temp_1: "--",
    module_temp_2: "--",
    module_temp_3: "--",
    humidity: "--",
    wind_direction: "--",
    wind_speed: "--",
    rainfall: "--",
  },
];

const StickyTable = ({ rows }) => {
  let theme = useTheme();
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: 500,
        overflow: "auto",
        backgroundColor: "#1b1b1b",
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                position: "sticky",
                left: 0,
                zIndex: 2,
                backgroundColor: theme.palette.text.header_option,
                color: "white",
                minWidth: 180,
              }}
            >
              Inverter Name
            </TableCell>
            <TableCell
              sx={{
                position: "sticky",
                left: 180,
                zIndex: 2,
                backgroundColor: theme.palette.text.header_option,
                color: "white",
                minWidth: 150,
              }}
            >
              Syst. Diag.
            </TableCell>

            {[
              "Meter-read",
              "Power",
              "Input",
              "Eff",
              "Temp",
              "Down String",
              "Yield",
            ].map((col) => (
              <TableCell
                key={col}
                align="right"
                sx={{
                  minWidth: 120,
                  backgroundColor: theme.palette.text.header_option,
                  color: "white",
                  zIndex: 1,
                }}
              >
                {col}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={i}
              sx={{
                backgroundColor: i % 2 === 0 ? "#1b1b1b" : "#2a2a2a",
              }}
            >
              <TableCell
                sx={{
                  position: "sticky",
                  left: 0,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                  color: theme.palette.table.text,
                  minWidth: 180,
                  zIndex: 1,
                }}
              >
                {row.name}
              </TableCell>
              <TableCell
                sx={{
                  position: "sticky",
                  left: 180,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                  color: theme.palette.table.text,
                  minWidth: 150,
                  zIndex: 1,
                }}
              >
                {row.status}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.meter}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.power}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.input}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.eff}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.temp}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.downString}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.yield}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const MeterTable = ({ rows }) => {
  let theme = useTheme();
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: 500,
        overflow: "auto",
      }}
    >
      <Table stickyHeader sx={{ minWidth: "1300px" }}>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                position: "sticky",
                left: 0,
                zIndex: 2,
                color: "white",
                backgroundColor: theme.palette.text.header_option,
              }}
            >
              Meter Name
            </TableCell>

            {[
              "Type",
              "Attribute",
              "State",
              "Active Generated",
              "Active Consumed",
              "Reactive Generated",
              "Reactive Consumed",
            ].map((col) => (
              <TableCell
                key={col}
                align="right"
                sx={{
                  minWidth: 120,
                  zIndex: 1,
                  backgroundColor: theme.palette.text.header_option,
                  color: "white",
                }}
              >
                {col}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody
          sx={{
            overflow: "scroll",
          }}
        >
          {rows.map((row, i) => (
            <TableRow key={i}>
              <TableCell
                sx={{
                  position: "sticky",
                  left: 0,
                  backgroundColor: "#f5f5f5",
                  zIndex: 1,
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.name}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.type}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.attribute}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.state}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.active_generate}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.active_consume}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.reactive_generate}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.reactive_consume}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const WeatherTable = ({ rows }) => {
  let theme = useTheme();
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: 500,
        overflow: "auto",
      }}
    >
      <Table stickyHeader sx={{ minWidth: "1300px" }}>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                position: "sticky",
                left: 0,
                zIndex: 2,
                backgroundColor: theme.palette.text.header_option,
                color: "white",
                minWidth: "150px",
              }}
            >
              Wheather Station Name
            </TableCell>

            {[
              "State",
              "POA(W/m",
              "POA2",
              "GHI",
              "Ambient Temp",
              "Module Temp. 1",
              "Module Temp. 2",
              "Module Temp. 3",
              "Humidity (%)",
              "Wind Direction ",
              "Wind Speed (m/s)",
              "Rainfall (mm)",
            ].map((col) => (
              <TableCell
                key={col}
                align="right"
                sx={{
                  minWidth: 120,
                  zIndex: 1,
                  backgroundColor: theme.palette.text.header_option,
                  color: "white",
                }}
              >
                {col}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody
          sx={{
            overflow: "scroll",
          }}
        >
          {rows.map((row, i) => (
            <TableRow key={i}>
              <TableCell
                sx={{
                  position: "sticky",
                  left: 0,
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                  zIndex: 1,
                }}
              >
                {row.name}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  width: "100px",
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.state}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  width: "100px",
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.poa}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  width: "100px",
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.poa2}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  width: "100px",
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.ghi}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  width: "100px",
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.ambient_temp}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  width: "100px",
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.module_temp_1}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  width: "100px",
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.module_temp_2}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  width: "100px",
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.module_temp_3}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  width: "100px",
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.humidity}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  width: "100px",
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.wind_direction}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  width: "100px",
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.wind_speed}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  width: "100px",
                  color: theme.palette.table.text,
                  backgroundColor:
                    i % 2 === 0
                      ? theme.palette.table.background_odd
                      : theme.palette.table.background_even,
                }}
              >
                {row.rainfall}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default function DeviceList() {
  const theme = useTheme();
  const buttons = ["INVERTER", "METER", "WHEATHER STATION"];
  const [selected, setSelected] = useState("INVERTER");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        gap: "5",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flex: 0.2,
          marginBottom: "10px",
        }}
      >
        {buttons.map((label) => (
          <Button
            key={label}
            variant="outlined"
            onClick={() => setSelected(label)}
            sx={{
              color: theme.palette.text.header_option,
              borderColor: theme.palette.text.header_option,
              backgroundColor:
                selected === label
                  ? theme.palette.background.option
                  : "transparent",
              "&:hover": {
                backgroundColor: "#d1cfcf",
              },
            }}
          >
            {label}
          </Button>
        ))}
      </Box>

      <Box
        sx={{
          flex: 3,
        }}
      >
        {selected === "INVERTER" ? (
          <StickyTable rows={inverterData} />
        ) : selected === "METER" ? (
          <MeterTable rows={meterdata} />
        ) : (
          <WeatherTable rows={weatherdata} />
        )}
      </Box>
    </Box>
  );
}
