import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';

import { styled, useTheme } from "@mui/material/styles";


const MyLineChart = ({ linedata, linekey1, linekey2 }) => {
  const theme = useTheme();
  return (
    <ResponsiveContainer width="100%" height={300}
        
    >
      <LineChart data={linedata}>
        <CartesianGrid
            vertical={false}
            troke="#555555" 
            strokeWidth={0.2}
        />
        <XAxis 
            dataKey="time"
            fontSize={12}
        />
        <YAxis 
            yAxisId="left" 
            orientation="left"
            fontSize={12}
        />
        <YAxis 
            yAxisId="right" 
            orientation="right"
            fontSize={12}
            />
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
        {/* Các đường line */}
        <Line type="monotone" dataKey={linekey1} stroke="#9acd32" yAxisId="left" />
        <Line type="monotone" dataKey={linekey2} stroke="#00ffff" yAxisId="right" />
        
        {/* Thêm các line khác nếu cần */}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MyLineChart;
