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

function Dashboard() {
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

  return (
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
          backgroundColor: "rgba(128, 128, 128, 0.5)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: "1",
            justifyContent: "center",
            paddingLeft: "10px"
          }}
        >
          <Box>C&I Self-consumption</Box>

          <Box>Normal</Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: "2",
            justifyContent: "center",
          }}
        >
          <Box>
            Inverter (){" "}
            <Link
              to="/devicelist"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "12px",
              }}
            >
              Detail
            </Link>{" "}
          </Box>

          <Box
            sx={{
              display: "inline-flex",
              gap: 5,
            }}
          >
            <Box>Info Not Available</Box>
            <Box>Partial Capability</Box>
            <Box>Non-Operative</Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: "1",
            justifyContent: "center",
          }}
        >
          <Box>
            String (){" "}
            <Link
              to="/topologyanalysis"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "12px",
              }}
            >
              Detail
            </Link>
          </Box>

          <Box>Cut-Out</Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: "1",
            justifyContent: "center",
          }}
        >
          <Box>
            Alarm (){" "}
            <Link
              to="active_alarm"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "12px",
              }}
            >
              Detail
            </Link>{" "}
          </Box>

          <Box
            sx={{
              display: "inline-flex",
              gap: 5,
            }}
          >
            <Box>Fault</Box>
            <Box>Warning</Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          flex: "0.2",
          backgroundColor: "rgba(128, 128, 128, 0.5)",
          padding: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <MyCalendar />
          <MyButton label={"DAILY"} />
          <MyButton label={"MONTHLY"} />
          <MyButton label={"YEARLY"} />
        </Box>
        <Box
          sx={{
            color: theme.palette.text.option,
            textAlign: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <LocationPinIcon />
          <Typography sx={{ ml: 1 }}>Bach khoa University</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "100%",
          flex: "2",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "rgba(128, 128, 128, 0.5)",
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
            paddingLeft: "10px"
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
          backgroundColor: "rgba(128, 128, 128, 0.5)",
          alignItems: "center",
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
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                flex: "1",
              }}
            >
              <PiPlugChargingBold size={50} />
            </Box>
            <Box
              sx={{
                flex: "1",
                textAlign: "center",
              }}
            >
              Inverter
            </Box>
            <Box
              sx={{
                flex: "1",
              }}
            >
              {}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
            }}
          >
            <Box
              sx={{
                flex: "1",
                alignItems: "center",
                justifyItems: "center",
                justifyContent: "center",
                justifySelf: "center",
                textAlign: "center",
              }}
            >
              <GiCharging size={50} />{" "}
            </Box>
            <Box
              sx={{
                flex: "1",
                textAlign: "center",
              }}
            >
              Energy Meter
            </Box>
            <Box
              sx={{
                flex: "1",
              }}
            >
              {}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                flex: "1",
              }}
            >
              <DiBackbone size={50} />
            </Box>
            <Box
              sx={{
                flex: "1",
                textAlign: "center",
              }}
            >
              Grid
            </Box>
            <Box
              sx={{
                flex: "1",
              }}
            >
              {}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
