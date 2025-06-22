// import axios from 'axios';
// import { useEffect, useState } from 'react';

// function MyChart() {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:8000/solardb/chart-data/")
//       .then(res => setChartData(res.data))
//       .catch(err => console.error("Lỗi khi gọi API:", err));
//   }, [5]);

//   return (
//     <div>
//       {chartData.length > 0 ? (
//         <ul>
//             <li>
//                 <pre>{JSON.stringify(chartData, null, 2)}</pre>
//             </li>
//         </ul>

//       ) : (
//         <p>Đang tải dữ liệu...</p>
//       )}
//     </div>
//   );
// }

// export default MyChart;

import { useEffect, useState } from "react";
import axios from "axios";

function MyChart() {
  const [chartData, setChartData] = useState([]);

  // useEffect(() => {
  //   const fetchData = () => {
  //     axios
  //       .get("http://localhost:8000/solardb/chart-data/")
  //       .then((res) => setChartData(res.data))
  //       .catch((err) => console.error("Lỗi khi gọi API:", err));
  //   };
    
  //   fetchData(); // gọi ngay khi component mount
  //   const interval = setInterval(fetchData, 1000); // gọi lại mỗi 5 phút

  //   return () => clearInterval(interval); // dọn khi unmount
  // }, []);

  // return (
  //   <div>
  //     <h3 style={{color:"white"}}>Dữ liệu mới nhất từ Redis (2s 1 lần)</h3>
  //     {chartData.length > 0 ? (
  //       <ul>
  //         {chartData.map((item, index) => (
  //           <li style={{color : 'white'}} key={index}>
  //             {item.timestamp}: {item.irradiance} W/m² - {item.active_power} W
  //           </li>
  //         ))}
  //       </ul>
  //     ) : (
  //       <p>Đang tải dữ liệu...</p>
  //     )}
  //   </div>
  // );
}

export default MyChart;
