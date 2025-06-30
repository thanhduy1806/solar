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
import { alignItems, Box, sizeHeight } from "@mui/system";
import { ThemeContext } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
import PowerIcon from "@mui/icons-material/Power";
import { DiBackbone } from "react-icons/di";
import { PiPlugChargingBold } from "react-icons/pi";
import { GiCharging } from "react-icons/gi";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import CombinedChart from "../ChartComponents/CombineChart";
import SingleBarChart from "../ChartComponents/SingleBar";

function LeaderBoard() {
  let theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        padding: 2,
        gap: 2,
      }}
    >
      <Box
        sx={{
          flex: "1",
          boxShadow: theme.shadows[1],
          backgroundColor: theme.palette.background.head_box,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          boxShadow: "0 4px 6px rgba(19, 16, 16, 0.1)",
        }}
      >
        <Box
          sx={{
            flex: 1,
          }}
        >
          Select Site
        </Box>
        <Box>
          <MyCalendar mode="year" />
        </Box>
      </Box>

      <Box
        sx={{
          flex: "8",
          boxShadow: "0 4px 6px rgba(19, 16, 16, 0.1)",
        }}
      >
        <div
          style={{
            backgroundColor: theme.palette.background.head_box,
          }}
        >
          Production Budget Completion Rate
        </div>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: theme.palette.background.box,
          }}
        >
          <Box
            sx={{
              flex: 3,
            }}
          >
            <div>Total</div>
            <div>1/ Bach khoa</div>
          </Box>
          <Box
            sx={{
              flex: 8,
            }}
          >
            <CombinedChart />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          flex: "8",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 4px 6px rgba(19, 16, 16, 0.1)",
        }}
      >
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            minHeight: "100%",
            backgroundColor: theme.palette.background.head_box,
            alignItems: "center",
          }}
        >
          <Box>Performance Ranking</Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                marginRight: "15px",
              }}
            >
              <MyButton label={"Yield"} />
              <MyButton label={"PR"} />
            </div>
            <div
              style={{
                marginRight: "15px",
              }}
            >
              <MyButton label={"Day"} />
              <MyButton label={"Month"} />
              <MyButton label={"Year"} />
              <MyButton label={"Total"} />
            </div>
            <div>
              <MyCalendar mode={"month"} />
            </div>
          </Box>
        </Box>
        <Box
          sx={{
            flex: "7",
            width: "100%",
            backgroundColor: theme.palette.background.box,
          }}
        >
          <SingleBarChart />
        </Box>
      </Box>
    </Box>
  );
}

export default LeaderBoard;
