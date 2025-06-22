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

const MyBarChart = ({ bardata, barkey1, barkey2 }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={bardata} margin={{ top: 20, right: 20, bottom: 20, left: 10 }} >
        <CartesianGrid vertical={false} troke="#555555" strokeWidth={0.2} />
        <XAxis dataKey="time" fontSize={12} padding={{ left: 0, right: 0 }}>
          <Label value="Time (h)" offset={-58} position="insideRight" />
        </XAxis>
        <YAxis fontSize={12} />

        <YAxis yAxisId="left" fontSize={12} padding={{ left: 0, right: 0 }} >
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
        <Bar dataKey={barkey1} fill="#00BFFF" yAxisId="left"/>
        <Bar dataKey={barkey2} fill="#FFA500" yAxisId="right"/>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MyBarChart;
