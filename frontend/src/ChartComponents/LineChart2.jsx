import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

import IconButton from "@mui/material/IconButton";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { useRef } from "react";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import { useTheme } from "@mui/material/styles";

const MyLineChart = ({ linedata, linekey1, linekey2, label = "Biểu đồ đường" }) => {
  const chartRef = useRef(null);
  const theme = useTheme();

  const handleDownload = () => {
    if (!chartRef.current) return;

    htmlToImage
      .toPng(chartRef.current)
      .then((dataUrl) => {
        download(dataUrl, "linechart.png");
      })
      .catch((err) => {
        console.error("Download error:", err);
      });
  };

  return (
    <div ref={chartRef} style={{ }}>
      {/* Header: label bên trái, nút download bên phải */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 8,
          backgroundColor: theme.palette.background.head_box,
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "16px" }}>{label}</div>
        <IconButton onClick={handleDownload} sx={{ color: theme.palette.table.text  }}>
          <DownloadOutlinedIcon />
        </IconButton>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={linedata}>
          <CartesianGrid vertical={false} stroke="#555555" strokeWidth={0.2} />
          <XAxis dataKey="time" fontSize={12} />
          <YAxis yAxisId="left" orientation="left" fontSize={12} />
          <YAxis yAxisId="right" orientation="right" fontSize={12} />

          <Tooltip
            cursor={false}
            contentStyle={{
              backgroundColor: "#000",
              border: "1px solid #444",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "14px"
            }}
          />
          <Legend />
          <Line type="monotone" dataKey={linekey1} stroke="#9acd32" yAxisId="left" />
          <Line type="monotone" dataKey={linekey2} stroke="#00ffff" yAxisId="right" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyLineChart;

