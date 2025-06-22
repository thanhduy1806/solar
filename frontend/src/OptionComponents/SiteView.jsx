import { Grid } from "@mui/material";
import MyBarChart from "../ChartComponents/BarChart";
import MyLineChart from "../ChartComponents/LineChart2";
import InverterRanking from "../DataComponents/InverterRanking";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

//-----------------------------------DEMO GET DATA BACKEND----------------------------------------------

function Dashboard() {
  const [BarData, setBarData] = useState([]);
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
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 2 }}>
        <Grid
          container
          spacing={0}
          sx={{ width: "100%", display: "flex", maxHeight: "200px" }}
        >
          <Grid
            sx={{ minHeight: "200px", flex: 1, margin: " 0 20px 0 20px" }}
          ></Grid>
        </Grid>
      </div>

      <div
        style={{
          borderColor: "black",
          borderWidth: "2px",
          flex: 4,
        }}
      >
        <Grid
          container
          spacing={0}
          sx={{
            width: "100%",
            display: "flex",
            minHeight: "180px",
            height: "280px",
          }}
        >
          <Grid
            sx={{
              minHeight: "200px",
              flex: 1,
              margin: " 0 20px 0 20px",
              boxShadow: 10,
              borderColor: "grey",
            }}
          >
            {BarData.length > 0 && (
              <MyBarChart
                bardata={BarData}
                barkey1={Object.keys(BarData[0])[1]}
                barkey2={Object.keys(BarData[0])[2]}
              />
            )}
          </Grid>
          <Grid
            sx={{
              minHeight: "200px",
              flex: 1,
              margin: " 0 20px 0 20px",
              boxShadow: 10,
              borderColor: "grey",
            }}
          >
            {BarData.length > 0 && (
              <MyLineChart
                linedata={BarData}
                linekey1={Object.keys(BarData[0])[1]}
                linekey2={Object.keys(BarData[0])[2]}
              />
            )}
          </Grid>
        </Grid>
      </div>

      <div style={{ flex: 4 }}>
        <Grid
          container
          spacing={0}
          sx={{ width: "100%", display: "flex", minHeight: "250px" }}
        >
          <Grid
            sx={{
              minHeight: "200px",
              flex: 1.5,
              margin: " 0 20px 0 20px",
              boxShadow: 10,
              borderColor: "grey",
            }}
          >
            <InverterRanking />
          </Grid>

          <Grid
            sx={{ minHeight: "200px", flex: 1, margin: " 0 20px 0 20px" }}
          ></Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Dashboard;
