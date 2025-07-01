import MyLineChart from "../ChartComponents/LineChart2";
import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs"; // lib datetime using
import { alignItems, Box, flex, justifyContent, sizeHeight } from "@mui/system";
import { useTheme } from "@mui/material/styles";
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

  const option2 = [
    "Real-Time Perfomance",
    "Inveter Output Power Deviation",
    "Production",
    "Yield",
  ];
  const [pick2, setPick2] = useState("Yield");
  const handleChange2 = (event) => {
    setPick2(event.target.value);
    console.log("Selected:", event.target.value);
  };

  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          flex: 2,

          borderRadius: 2,
          width: {
            xs: "100%",
            sm: "48%",
            md: "32%",
          },
        }}
      >
        <div
          style={{
            height: "298px",
            backgroundColor: theme.palette.background.box,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              backgroundColor: theme.palette.background.head_box,
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
              marginTop: "40px",
            }}
          >
            Bach khoa
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: "30px",
            }}
          >
            <div>
              <div style={{ fontSize: "30px", textAlign: "center" }}>{}37</div>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                Temperature
              </div>
            </div>
            <div>
              <div style={{ fontSize: "30px", textAlign: "center" }}>
                0 Wm/h
              </div>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                Irradiance
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            height: "190px",
            marginTop: "20px",
            backgroundColor: theme.palette.background.box,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              height: "40px",
              backgroundColor: theme.palette.background.head_box,
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: "16px" }}>
              C&I Self-consumption
            </div>
            <div style={{ fontWeight: "bold", fontSize: "16px" }}>Normal</div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: "30px",
            }}
          >
            <div>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                Active Power
              </div>
              <div style={{ fontSize: "30px", textAlign: "center" }}>{}0W </div>
            </div>
            <div>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                Capacity
              </div>
              <div style={{ fontSize: "30px", textAlign: "center" }}>
                {}1.19 MWp
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            height: "298px",
            backgroundColor: theme.palette.background.box,
            marginTop: "20px",
          }}
        >
          <div
            style={{
              height: "40px",
              backgroundColor: theme.palette.background.head_box,
              fontWeight: "bold",
              fontSize: "16px",
              display: "flex",
              alignItems: "center"
            }}
          >
            Production
          </div>
          <div
            style={{
              alignContent: "center",
              paddingTop: "20px"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 30,
                padding: "30px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    fontSize: "20px",
                  }}
                >
                  Inverter
                </Box>
                <Box
                  sx={{
                    fontSize: "20px",
                  }}
                >
                  Energy Meter
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{}}>
                  <SolarPowerIcon sx={{ fontSize: "30px" }} />
                </Box>
                <Box
                  sx={{
                    fontSize: "20px",
                  }}
                >
                  -------------- 99.33% --------------
                </Box>
                <Box sx={{}}>
                  <MarginIcon sx={{ fontSize: "30px" }} />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",

                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    fontSize: "20px",
                  }}
                >
                  6.01 MWh
                </Box>

                <Box
                  sx={{
                    fontSize: "20px",
                  }}
                >
                  5.97 MWh
                </Box>
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              ></Box>
            </div>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          flex: 4,
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
            height: "190px",
            gap: "20px",
          }}
        >
          <div
            style={{
              flex: "1",
            }}
          >
            <div
              style={{
                backgroundColor: theme.palette.background.head_box,
                height: "40px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>{pick2}</div>
              <div>
                <IconDropDown
                  options={option2}
                  handleChange={handleChange2}
                  pick={pick2}
                />
              </div>
            </div>
            <div
              style={{
                backgroundColor: theme.palette.background.box,
                height: "150px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <ThermometerGaugeSVG
                // value={latestdata ? latestdata.temp.toFixed(1) : "--"}
                value={50}
                max={70}
                unit="h"
                size={100}
              />
            </div>
          </div>
          <div
            style={{
              flex: "1",
            }}
          >
            <div
              style={{
                backgroundColor: theme.palette.background.head_box,
                height: "40px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Site Metrics
            </div>
            <div
              style={{
                backgroundColor: theme.palette.background.box,
                height: "150px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 6,
                padding: "30px",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    flex: "2",
                  }}
                >
                  Production
                </Box>
                <Box
                  sx={{
                    flex: "1",
                  }}
                >
                  <ElectricBoltIcon />
                </Box>
                <Box
                  sx={{
                    flex: "1",
                  }}
                >
                  5.79Wh
                </Box>
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box
                  sx={{
                    flex: "2",
                  }}
                >
                  Yield
                </Box>
                <Box
                  sx={{
                    flex: "1",
                  }}
                >
                  <AccessTimeIcon />
                </Box>
                <Box
                  sx={{
                    flex: "1",
                  }}
                >
                  5h
                </Box>
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box
                  sx={{
                    flex: "2",
                  }}
                >
                  Revenue
                </Box>
                <Box
                  sx={{
                    flex: "1",
                  }}
                >
                  <TocIcon />
                </Box>
                <Box
                  sx={{
                    flex: "1",
                  }}
                >
                  5.3 K CNY
                </Box>
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <Box
                  sx={{
                    flex: "2",
                  }}
                >
                  CO2 Reduction
                </Box>
                <Box
                  sx={{
                    flex: "1",
                  }}
                >
                  <EnergySavingsLeafIcon />
                </Box>
                <Box
                  sx={{
                    flex: "1",
                  }}
                >
                  5 t
                </Box>
              </Box>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: theme.palette.background.box,
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
          flex: 1.5,
          borderRadius: 2,
          width: {
            xs: "100%",
            sm: "48%",
            md: "32%",
            display: flex,
            flexDirection: "column",
          },
        }}
      >
        <Box sx={{}}>
          <div
            style={{
              backgroundColor: theme.palette.background.head_box,
              height: "40px",
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
            {iverter_yield.map((item, index) => (
              <RowBar
                key={index}
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
        <Box
          sx={{
            marginTop: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: theme.palette.background.head_box,
              height: "40px",
            }}
          >
            Inverter Production
          </div>
          <div
            style={{
              height: "468px",
              overflow: "auto",
              backgroundColor: theme.palette.background.box,
            }}
          >
            {iverter_yield.map((item, index) => (
              <RowBar
                key={index}
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
