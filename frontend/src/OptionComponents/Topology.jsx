import StringTable from "../TableDevice/StringTable";
import { Box, height, margin, sizeHeight, width } from "@mui/system";
import Tooltip from "@mui/material/Tooltip";
import MyButton from "../InteractComponent/myButton";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { Button, Stack } from "@mui/material";

const inverter = [
  {
    inverter1: [
      { string1: "2.4" },
      { string2: "2.4" },
      { string3: "2.4" },
      { string4: "2.4" },
      { string5: "2.4" },
      { string6: "2.4" },
      { string7: "2.4" },
    ],
  },

  {
    inverter2: [
      { string1: "2.4" },
      { string2: "2.4" },
      { string3: "2.4" },
      { string4: "2.4" },
      { string5: "2.4" },
      { string6: "2.4" },
      { string7: "2.4" },
      { string8: "2.4" },
      { string9: "2.4" },
      { string10: "2.4" },
      { string11: "2.4" },
      { string12: "2.4" },
    ],
  },

  {
    inverter3: [
      { string1: "2.4" },
      { string2: "2.4" },
      { string3: "2.4" },
      { string4: "2.4" },
      { string5: "2.4" },
      { string6: "2.4" },
      { string7: "2.4" },
      { string8: "2.4" },
      { string9: "2.4" },
      { string10: "2.4" },
      { string11: "2.4" },
      { string12: "2.4" },
      { string13: "2.4" },
      { string14: "2.4" },
      { string15: "2.4" },
      { string16: "2.4" },
      { string17: "2.4" },
      { string18: "2.4" },
    ],
  },

  {
    inverter4: [
      { string1: "2.4" },
      { string2: "2.4" },
      { string3: "2.4" },
      { string4: "2.4" },
      { string5: "2.4" },
      { string6: "2.4" },
      { string7: "2.4" },
      { string8: "2.4" },
      { string9: "2.4" },
      { string10: "2.4" },
      { string11: "2.4" },
      { string12: "2.4" },
    ],
  },
  {
    inverter5: [
      { string1: "2.4" },
      { string2: "2.4" },
      { string3: "2.4" },
      { string4: "2.4" },
      { string5: "2.4" },
    ],
  },
];

const Topo = () => {
  let theme = useTheme();
  const buttons = inverter.map((item) => Object.keys(item)[0]);

  const [topo, setTopo] = useState("inverter1");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          flex: 6,
          flexWrap: "wrap",
          backgroundColor: theme.palette.background.box,
          borderRightWidth: "1px",
          borderRightStyle: "solid",
          borderRightColor: theme.palette.background.head_box,
        }}
      >
        {buttons.map((label) => (
          <Button
            key={label}
            variant="outlined"
            onClick={() => setTopo(label)}
            sx={{
              height: "60px",
              width: "90px",
              margin: "8px",
              color: theme.palette.text.header_option,
              borderColor: theme.palette.text.header_option,
              backgroundColor:
                topo === label
                  ? theme.palette.background.option
                  : "transparent",
              "&:hover": {
                backgroundColor: "#d1cfcf",
              },
            }}
          >
            {label}
          </Button>
        ))}
      </Box>
      <Box
        sx={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          paddingLeft: "5px",
          backgroundColor: theme.palette.background.box,
        }}
      >
        <Box
          sx={{
            flex: 3,
            
          }}
        >
          <div>NAME OF INVERTER</div>
          <div>String Inverter | Full Capability </div>
          <div>Deviation</div>
          <div>Internal Temp: </div>
          <div>Efficiency: </div>
        </Box>
        <Box
          sx={{
            flex: 6,
            display: "flex",
            flexWrap: "wrap",
            gap:1
          }}
        >
          {buttons.map((label) => (
            <Box
              key={label}
              variant="outlined"
              sx={{
                height: "60px",
                width: "90px",
                color: theme.palette.text.header_option,
                borderColor: theme.palette.text.header_option,
                backgroundColor: theme.palette.background.option,

                "&:hover": {
                  backgroundColor: "#d1cfcf",
                },
              }}
            >
              {label}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const Stringstate = () => {
  let theme = useTheme()
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      {inverter.map((item, index) => {
        const key = Object.keys(item)[0];
        const value = item[key];

        return (
          <Box
            key={index}
            sx={{
              p: 2,
              borderRadius: 3,
              width: {
                xs: "100%",
                md: "48%",
              },
              maxHeight: "500px",
              backgroundColor: theme.palette.background.box,
              boxShadow: "0 4px 6px rgba(19, 16, 16, 0.1)",
            }}
          >
            <StringTable stringname={key} stringlist={value} />
          </Box>
        );
      })}
    </Box>
  );
};

const Topology = () => {
  let theme = useTheme();
  let [mode, setMode] = useState("topo");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        padding: 2,
      }}
    >
      <Box
        sx={{
          marginBottom: "10px",
          backgroundColor: theme.palette.background.head_box,
        }}
      >
        <MyButton label="Topology Analysis" onClick={() => setMode("topo")} />
        <MyButton label="String State" onClick={() => setMode("string")} />
      </Box>
      <Box
        sx={{
          height: "100%",
        }}
      >
        {mode === "topo" ? <Topo /> : <Stringstate />}
      </Box>
    </Box>
  );
};

export default Topology;
