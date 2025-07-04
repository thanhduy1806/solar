import React from "react";
import SiteCard from "../DataComponents/listviewcard";
import { Grid, Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import myButton from "../InteractComponent/myButton";

export default function SiteList() {
  const theme = useTheme();

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", padding:"20px" }}>
      <div
        style={{
          height: "120px",
          position: "fixed",
          width: "100%",
          color: theme.palette.text.option,
          borderBottom: "1px solid #ccc",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          flexShrink: 0,
          zIndex: 1000,
          backdropFilter: "blur(50px)",
          fontSize: "25px",
        }}
      >
        LIST OF SITECARD
      </div>

      <div
        style={{
          overflowY: "auto",
          padding: "20px",
          marginTop: "120px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {[1, 2, 3, 4].map((i) => (
            <Box
              key={i}
              sx={{
                p: 2,
                borderRadius: 2,
                width: {
                  xs: "100%",
                  sm: "48%",
                  md: "32%",
                },
              }}
            >
              <SiteCard name={"20"} cardname={i===1? "chart-data" : ""} cardlabel={i===1? "PTN209B3" : "--"} />
            </Box>
          ))}
        </Box>
      </div>
    </div>
  );
}
