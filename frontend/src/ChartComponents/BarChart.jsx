import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

import IconButton from "@mui/material/IconButton";
import GetAppIcon from "@mui/icons-material/GetApp";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { useTheme } from "@mui/material/styles";
import React, { useRef } from "react";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

const MyBarChart = ({ bardata, barkey1, barkey2, label  }) => {
  const chartRef = useRef(null);
  const theme = useTheme();
  const handleDownload = () => {
    if (chartRef.current === null) return;

    htmlToImage
      .toPng(chartRef.current)
      .then((dataUrl) => {
        download(dataUrl, "chart.png");
      })
      .catch((err) => {
        console.error("Error generating image:", err);
      });
  };
  return (
    <div ref={chartRef} style={{ background: "", height: "100%" }}>
      {/* Header: Label bên trái, nút tải về bên phải */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between", // label trái, nút phải
          alignItems: "center",
          marginBottom: 8,
          backgroundColor: theme.palette.background.head_box,
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: "16px",
            paddingLeft: "20px",
            color: theme.palette.text.header_option,
          }}
        >
          {label}
        </div>

        <IconButton
          onClick={handleDownload}
          sx={{ color: theme.palette.table.text }}
        >
          <DownloadOutlinedIcon />
        </IconButton>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={bardata}
          margin={{ top: 20, right: 20, bottom: 20, left: 10 }}
        >
          <CartesianGrid vertical={false} troke="#555555" strokeWidth={0.2} />
          <XAxis dataKey="time" fontSize={12} padding={{ left: 0, right: 0 }}>
            <Label value="Time (h)" offset={-58} position="insideRight" />
          </XAxis>
          <YAxis fontSize={12} />

          <YAxis yAxisId="left" fontSize={12} padding={{ left: 0, right: 0 }}>
            <Label value={barkey1} angle={-90} position="inside" />
          </YAxis>
          <YAxis yAxisId="right" orientation="right" fontSize={12}>
            <Label value={barkey2} angle={90} position="inside" />
          </YAxis>

          <Tooltip
            cursor={false}
            contentStyle={{
              backgroundColor: "#000",
              border: "1px solid #444",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "14px",
            }}
          />
          <Legend />
          <Bar dataKey={barkey1} fill="#00BFFF" yAxisId="left" />
          <Bar dataKey={barkey2} fill="#FFA500" yAxisId="right" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyBarChart;
