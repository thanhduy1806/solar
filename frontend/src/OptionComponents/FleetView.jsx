// import React from "react";
// import { Grid, Box, Typography } from "@mui/material";
// import { Link, useLocation } from "react-router-dom";
// import ThermometerGaugeSVG from "../ChartComponents/ThermometerGaugeSVG";
// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function MyFleetView() {
//   const [nowdata, setNowData] = useState([]);
//   const path = `http://localhost:8000/solardb/chart-data/`;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const reponse = await axios.get(path);
//         setNowData(reponse.data);
//       } catch (err) {
//         console.error("LOI KHI GOI API: ", err);
//       }
//     };

//     fetchData();

//     const interval = setInterval(fetchData, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const latestdata = nowdata.length > 0 ? nowdata[nowdata.length - 1] : null;

//   return (
//     <>
//       <Grid container sx={{ width: "100%", height: "100%", boxShadow: 3 }}>
//         <Grid sx={{ flex: 3 }}>
//           <Box
//             sx={{
//               width: "100%",
//               height: "100%",
//               boxShadow: 3,
//               overflow: "hidden",
//             }}
//           >
//             <iframe
//               src="https://www.google.com/maps/embed?pb=..."
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//             ></iframe>
//           </Box>
//         </Grid>

//         <Grid sx={{ flex: 2 }}>
//           <Box
//             sx={{
//               width: "100%",
//               height: "100%",
//               backgroundImage: 'url("/image/solar_image.jpg")', // đảm bảo ảnh nằm trong thư mục public
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//               position: "relative",
//               overflow: "hidden",
//             }}
//           >
//             {/* Overlay mờ màu nền nếu muốn */}
//             <Box
//               sx={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100%",
//                 backgroundColor: "rgba(13, 25, 36, 0.6)", // mờ nền tối
//                 zIndex: 1,
//               }}
//             />

//             {/* Nội dung nằm trên nền */}
//             <div
//               style={{
//                 height: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 position: "relative",
//                 zIndex: 2,
//               }}
//             >
//               <div
//                 style={{
//                   flex: 1,
//                   fontSize: "20px",
//                   backgroundColor: "rgba(128, 128, 128, 0.5)", // xám + độ mờ
//                   margin: "20px",
//                   maxHeight: "100px",
//                   alignItems: "center",
//                   display: "flex", // chính thẻ này làm flex container
//                   justifyContent: "center", // căn giữa nội dung bên trong nó
//                 }}
//               >
//                 <Box
//                   display="flex"
//                   style={{
//                     width: "100% ",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       p: 2,
//                       color: "white",
//                       flex: 2,
//                       fontFamily: "serif",
//                       color: "#d4bfa3",
//                     }}
//                   >
//                     Total Site:{" "}
//                     <b
//                       style={{
//                         color: "#08ffff",
//                         fontSize: "25px",
//                       }}
//                     >
//                       1
//                     </b>
//                   </Box>
//                   <Box
//                     sx={{
//                       p: 2,
//                       color: "white",
//                       flex: 2,
//                       fontFamily: "serif",
//                       color: "#d4bfa3",
//                     }}
//                   >
//                     Total Sites
//                   </Box>

//                   <Link to="/sitelist" style={{ textDecoration: "none" }}>
//                     <Box
//                       sx={{
//                         p: 2,
//                         fontFamily: "serif",
//                         color: "#d4bfa3",
//                         flex: 5,
//                         transition: "color 0.5s",
//                         "&:hover": {
//                           color: "#08ffff",
//                         },
//                         justifyContent: "center",
//                       }}
//                     >
//                       Site List
//                     </Box>
//                   </Link>
//                 </Box>
//               </div>

//               <div
//                 style={{
//                   flex: 1,
//                   fontSize: "20px",
//                   backgroundColor: "rgba(128, 128, 128, 0.5)", // xám + độ mờ
//                   margin: "20px",
//                   maxHeight: "100px",
//                   alignItems: "center",
//                   display: "flex", // chính thẻ này làm flex container
//                   justifyContent: "center", // căn giữa nội dung bên trong nó
//                 }}
//               >
//                 <Box
//                   display="flex"
//                   style={{
//                     width: "100% ",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       p: 2,
//                       color: "white",
//                       flex: 2,
//                       fontFamily: "serif",
//                       color: "#d4bfa3",
//                     }}
//                   >
//                     Location: Bach khoa University
//                   </Box>
//                 </Box>
//               </div>

//               <div
//                 style={{
//                   flex: 3,
//                   fontSize: "20px",
//                   backgroundColor: "rgba(128, 128, 128, 0.5)", // xám + độ mờ
//                   margin: "20px",
//                 }}
//               >
//                 <div
//                   style={{
//                     width: "100% ",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     marginTop: "50px",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       p: 2,
//                       color: "white",
//                       flex: 1,
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                     }}
//                   >
//                     <ThermometerGaugeSVG
//                       value={latestdata ? latestdata.temp.toFixed(1) : "--"}
//                       label="TEMPERATURE"
//                       max={70}
//                       unit="°C"
//                     />
//                   </Box>
//                   <Box
//                     sx={{
//                       p: 2,
//                       color: "white",
//                       flex: 1,
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                     }}
//                   >
//                     <ThermometerGaugeSVG
//                       value={
//                         latestdata ? latestdata.irradiance.toFixed(1) : "--"
//                       }
//                       label="IRRADIANCE"
//                       max={10}
//                       unit="W/m²"
//                     />
//                   </Box>
//                 </div>
//                 <div
//                   style={{
//                     width: "100% ",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     marginTop: "50px",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       p: 2,
//                       color: "white",
//                       flex: 1,
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                     }}
//                   >
//                     <ThermometerGaugeSVG
//                       value={
//                         latestdata ? latestdata.active_power.toFixed(1) : "--"
//                       }
//                       label="ACTIVE_POWER"
//                       max={700}
//                       unit="W"
//                     />
//                   </Box>
//                   <Box
//                     sx={{
//                       p: 2,
//                       color: "white",
//                       flex: 1,
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                     }}
//                   >
//                     <ThermometerGaugeSVG
//                       value={
//                         latestdata?.active_power
//                           ? ((latestdata.active_power / 1090) * 100).toFixed(2)
//                           : "--"
//                       }
//                       label="RATIO"
//                       max={100}
//                       unit="°%"
//                     />
//                   </Box>
//                 </div>
//               </div>
//             </div>
//           </Box>
//         </Grid>
//       </Grid>
//     </>
//   );
// }
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import ThermometerGaugeSVG from "../ChartComponents/ThermometerGaugeSVG";
import axios from "axios";

export default function MyFleetView() {
  const [nowdata, setNowData] = useState([]);
  const path = `http://localhost:8000/solardb/chart-data/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(path);
        setNowData(response.data);
      } catch (err) {
        console.error("LOI KHI GOI API: ", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

  const latestdata = nowdata.length > 0 ? nowdata[nowdata.length - 1] : null;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* MAP */}
      <Box sx={{ flex: 1.5, minHeight: "300 px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </Box>

      {/* Info Panel */}
      <Box
        sx={{
          flex: 1,
          backgroundImage: 'url("/image/solar_image.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        {/* Overlay mờ */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(36, 27, 13, 0.6)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            p: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "rgba(128, 128, 128, 0.5)",
              p: 2,
              borderRadius: 1,
              width: "100%",
            }}
          >
            <Box sx={{ color: "#d4bfa3", justifyContent: "center" }}>
              Total Site:{" "}
              {/* <b style={{ color: "#08ffff", fontSize: "25px" }}>1</b> */}
            </Box>
            <Box sx={{ color: "#d4bfa3"}}>Total Sites</Box>
            <Link to="/sitelist" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  color: "#d4bfa3",
                  "&:hover": { color: "#08ffff" },
                }}
              >
                Site List
              </Box>
            </Link>
          </Box>

          <Box
            sx={{
              backgroundColor: "rgba(128, 128, 128, 0.5)",
              p: 2,
              borderRadius: 1,
              mt: 2,
              color: "#d4bfa3",
            }}
          >
            Location: Bach khoa University
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(128, 128, 128, 0.5)",
              p: 2,
              borderRadius: 1,
              mt: 2,
              color: "#d4bfa3",
              height: "100%",
            }}
          >
            <Box
              sx={{ display: "flex", justifyContent: "space-around", mt: 4 }}
            >
              <ThermometerGaugeSVG
                value={latestdata ? latestdata.active_power.toFixed(1) : "--"}
                label="ACTIVE_POWER"
                max={700}
                unit="W"
              />
              <ThermometerGaugeSVG
                value={latestdata ? latestdata.irradiance.toFixed(1) : "--"}
                label="IRRADIANCE"
                max={10}
                unit="W/m²"
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                mt: 4,
                marginTop: "120px",
              }}
            >
              <ThermometerGaugeSVG
                value={latestdata ? latestdata.temp.toFixed(1) : "--"}
                label="TEMPERATURE"
                max={70}
                unit="°C"
              />
              <ThermometerGaugeSVG
                value={
                  latestdata?.active_power
                    ? ((latestdata.active_power / 1090) * 100).toFixed(2)
                    : "--"
                }
                label="RATIO"
                max={100}
                unit="%"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
