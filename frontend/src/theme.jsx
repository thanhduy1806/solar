// src/theme.jsx
import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#90caf9" : "#1976d2",
      },
      background: {
        default: mode === "dark" ? "#121212" : "#fafafa",
        paper: mode === "dark" ? "#1d1d1d" : "#ffffff",
        option: mode === 'dark' ? "#636155" : "#c1d2e3"
      },
      text: {
        header_option: mode === "dark" ? "#b48a60" : "#283593",
        option: mode === "dark" ? "#d4bfa3" : "#314ad6",
        header_chart: mode === "dark" ? "#" : "#",
        body_chart: mode === "dark" ? "#ffffff" : "#000000",
      },
    },
  });
