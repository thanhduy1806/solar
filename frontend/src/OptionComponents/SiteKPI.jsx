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
import { Box, flex, sizeHeight } from "@mui/system";
import { ThemeContext } from "@emotion/react";
import { useTheme } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import DropDownButton from "../InteractComponent/DropDownButton";
import CombinedChart from "../ChartComponents/CombineChart";
import ThermometerGaugeSVG from "../ChartComponents/ThermometerGaugeSVG";
import RowBar from "../ChartComponents/RowBar";

const iverter_yield = [
  { label: "Bk_1", value: "5" },
  { label: "Bk_2", value: "3.5" },
  { label: "Bk_3", value: "3" },
  { label: "Bk_4", value: "2" },
  { label: "Bk_5", value: "4.5" },
  { label: "Bk_6", value: "3.9" },
  { label: "Bk_7", value: "4" },
  { label: "Bk_8", value: "5" },
  { label: "Bk_9", value: "4.2" },
  { label: "Bk_10", value: "3.8" },
];

const production = [
  { label: "Bk_1", value: "534.5" },
  { label: "Bk_2", value: "578.6" },
  { label: "Bk_3", value: "523.3" },
  { label: "Bk_4", value: "456.3" },
  { label: "Bk_5", value: "498.9" },
  { label: "Bk_6", value: "590.4" },
  { label: "Bk_7", value: "596.1" },
  { label: "Bk_8", value: "472.4" },
  { label: "Bk_9", value: "434.2" },
  { label: "Bk_10", value: "390.6" },
];

function SiteKPI() {
  let date = Date();
  const [BarData, setBarData] = useState([]);
  const [dateCalendar, setDateCalendar] = useState(dayjs(date));

  const theme = useTheme();

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
  const option = [
    "Today",
    "MTD",
    "YTD",
    "Total",
    "Last 7 days",
    "Last 30 days",
  ];
  const [pick, setPick] = useState("Today");
  const handleChange = (event) => {
    setPick(event.target.value);
    console.log("Selected:", event.target.value);
  };
  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        flexWrap: "wrap",
        
      }}
    >
      <Box
        sx={{
          flex: 2,
          p: 2,
          borderRadius: 2,
          width: {
            xs: "100%",
            sm: "48%",
            md: "32%",
          },
        }}
      >
        <div style={{}}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <DropDownButton
              options={option}
              handleChange={handleChange}
              pick={pick}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "30px",
            }}
          >
            Bach khoa
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <div>
              <div>{}37</div>
              <div>Temperature</div>
            </div>
            <div>
              <div>0 Wm/h</div>
              <div>Irradiance</div>
            </div>
          </div>
        </div>

        <div>
          <div>C&I Self-consumption</div>
          <div>Normal</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div>Active Power</div>
            <div>Capacity</div>
          </div>
        </div>

        <div>
          <div>Production</div>
          <div></div>
        </div>
      </Box>
      <Box
        sx={{
          flex: 4,
          p: 2,
          borderRadius: 2,
          width: {
            xs: "100%",
            sm: "48%",
            md: "32%",
          },
        }}
      >
        <div>
          <div
            style={{
              backgroundColor: theme.palette.background.box,
            }}
          >
            {" "}
            <CombinedChart label="Production & Irradiation" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
            height:"160px"
          }}
        >
          <div>
            <div
              style={{
                backgroundColor: theme.palette.background.head_box,
                
              }}
            >
              Yield{" "}
            </div>
            <div
              style={{
                backgroundColor: theme.palette.background.box,
              }}
            >
              <ThermometerGaugeSVG
                // value={latestdata ? latestdata.temp.toFixed(1) : "--"}
                label="TEMPERATURE"
                max={70}
                unit="°C"
                size={80}
              />
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundColor: theme.palette.background.head_box,
              }}
            >
              Site Metrics
            </div>
            <div></div>
          </div>
        </div>
        <div>
      
          <div
            style={{
              backgroundColor: theme.palette.background.box,
              marginTop: '20px'
            }}
          >
            {" "}
            {BarData.length > 0 && (
              <MyLineChart
                linedata={BarData}
                linekey1={Object.keys(BarData[0])[1]}
                linekey2={Object.keys(BarData[0])[2]}
                label="Active Power & Irradiance"
              />
            )}
          </div>
        </div>
      </Box>
      <Box
        sx={{
          p: 2,
          flex: 2,
          borderRadius: 2,
          width: {
            xs: "100%",
            sm: "48%",
            md: "32%",
            display: flex,
            flexDirection: "column"
          },
        }}
      >
        <Box sx={{
            
        }}> 
          <div
            style={{
              backgroundColor: theme.palette.background.head_box,
              height: "40px"
            }}
          >
            Inverter Yield Ranking
          </div>
          <div
            style={{
              height: "258px",
              overflow: "auto",
              backgroundColor: theme.palette.background.box,
            }}
          >
            {iverter_yield.map((item) => (
              <RowBar
                label={item.label}
                value={parseFloat(item.value)}
                maxvalue={5}
                maxwidth={250}
                maxheight={6}
                unit="h"
              />
            ))}
          </div>
        </Box>
        <Box sx={{
            marginTop: "20px"
        }}>
          <div
            style={{
              backgroundColor: theme.palette.background.head_box,
            }}
          >
            Inverter Production
          </div>
          <div
            style={{
              height: "400px",
              overflow: "auto",
              backgroundColor: theme.palette.background.box,
            }}
          >
            {iverter_yield.map((item) => (
              <RowBar
                label={item.label}
                value={parseFloat(item.value)}
                maxvalue={5}
                maxwidth={250}
                maxheight={6}
                unit="h"
              />
            ))}
          </div>
        </Box>
      </Box>
    </Box>
  );
}
export default SiteKPI;
