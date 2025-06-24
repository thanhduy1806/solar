import { Button, Grid } from "@mui/material";
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
import { Box } from "@mui/system";

function Dashboard() {
  let date = Date();
  const [BarData, setBarData] = useState([]);
  const [dateCalendar, setDateCalendar] = useState(dayjs(date));

  const path_bar = `http://localhost:8000/solardb/avr-data/`;
  const path_line = `http://localhost:8000/solardb/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await axios.get(path_bar);
        setBarData(reponse.data);
      } catch (err) {
        console.error("LOI KHI GOI API: ", err);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    // <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
    //   <div style={{ flex: 2 }}>
    //     <Grid
    //       container
    //       spacing={0}
    //       sx={{ width: "100%", display: "flex", maxHeight: "200px" }}
    //     >
    //       <Grid
    //         sx={{ minHeight: "200px", flex: 1, margin: " 0 20px 0 20px" }}
    //       ></Grid>
    //     </Grid>
    //   </div>

    //   <div
    //     style={{
    //       borderColor: "black",
    //       borderWidth: "2px",
    //       flex: 4,
    //     }}
    //   >
    //     {" "}
    //     <div
    //       style={{ display: "flex", gap: "10px", margin: "8px 10px 20px 12px" }}
    //     >
    //       <MyCalendar />
    //       <MyButton label={"MONTH"} />
    //       <MyButton label={"YEAR"} />
    //     </div>
    //     <Grid
    //       container
    //       spacing={0}
    //       sx={{
    //         width: "100%",
    //         display: "flex",
    //         minHeight: "180px",
    //         height: "280px",
    //       }}
    //     >
    //       <Grid
    //         sx={{
    //           minHeight: "200px",
    //           flex: 1,
    //           margin: " 0 20px 0 20px",
    //           boxShadow: 10,
    //           borderColor: "grey",
    //         }}
    //       >
    //         {BarData.length > 0 && (
    //           <MyBarChart
    //             bardata={BarData}
    //             barkey1={Object.keys(BarData[0])[1]}
    //             barkey2={Object.keys(BarData[0])[2]}
    //           />
    //         )}
    //       </Grid>
    //       <Grid
    //         sx={{
    //           minHeight: "200px",
    //           flex: 1,
    //           margin: " 0 20px 0 20px",
    //           boxShadow: 10,
    //           borderColor: "grey",
    //         }}
    //       >
    //         {BarData.length > 0 && (
    //           <MyLineChart
    //             linedata={BarData}
    //             linekey1={Object.keys(BarData[0])[1]}
    //             linekey2={Object.keys(BarData[0])[2]}
    //           />
    //         )}
    //       </Grid>
    //     </Grid>
    //   </div>

    //   <div style={{ flex: 4 }}>
    //     <Grid
    //       container
    //       spacing={0}
    //       sx={{ width: "100%", display: "flex", minHeight: "250px" }}
    //     >
    //       <Grid
    //         sx={{
    //           minHeight: "200px",
    //           flex: 1.5,
    //           margin: " 0 20px 0 20px",
    //           boxShadow: 10,
    //           borderColor: "grey",
    //         }}
    //       >
    //         <InverterRanking />
    //       </Grid>

    //       <Grid
    //         sx={{ minHeight: "200px", flex: 1, margin: " 0 20px 0 20px" }}
    //       ></Grid>
    //     </Grid>
    //   </div>
    // </div>
    <Box
      sx={{
        padding: "20px",
        width: "100%",
        height: "100%",
        display: "flex",
        gap: 2,
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          flex: "1",
          backgroundColor: "rgba(128, 128, 128, 0.5)"
        }}
      >
        <MyCalendar />
        <MyButton label={"MONTH"} />
        <MyButton label={"YEAR"} />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          flex: "0.5",
          backgroundColor: "rgba(128, 128, 128, 0.5)",
          padding: 2,
        }}
      >
        <div style={{width: '100%'}}>  <MyCalendar />
        <MyButton label={"MONTH"} />
        <MyButton label={"YEAR"} /></div>
      
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "100%",
          flex: "2",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "rgba(128, 128, 128, 0.5)"
        }}
      >
        <Box
          sx={{
            
            width: "100%",
            height: "100%",
            flex: "1",
            display: "flex",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Box sx={{}}>Capicity</Box>

          <Box sx={{}}>Temp</Box>

          <Box sx={{}}>Irradiation</Box>
          <Box sx={{}}>Active Power</Box>

          <Box sx={{}}>Yield</Box>

          <Box sx={{}}>Production</Box>
          <Box sx={{}}>Power Ratio</Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            flex: "2",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              flex: "2",
            }}
          >
            {BarData.length > 0 && (
              <MyBarChart
                bardata={BarData}
                barkey1={Object.keys(BarData[0])[1]}
                barkey2={Object.keys(BarData[0])[2]}
              />
            )}
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              flex: "2",
            }}
          >
            {BarData.length > 0 && (
              <MyLineChart
                linedata={BarData}
                linekey1={Object.keys(BarData[0])[1]}
                linekey2={Object.keys(BarData[0])[2]}
              />
            )}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "100%",
          flex: "2",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "rgba(128, 128, 128, 0.5)"
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            flex: "4",
          }}
        >
          <InverterRanking />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            flex: "2",
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
