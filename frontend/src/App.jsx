// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

// import FleetView from './OptionComponents/FleetView';
// import SiteList from './OptionComponents/SiteList';
// import LeaderBoard from './OptionComponents/LeaderBoard';
// import PersistentDrawerLeft from './OptionComponents/Navbar';
// import SiteView from './OptionComponents/SiteView';

// function App() {
//   return (

//       <Routes>
//           <Route path="/" element={<PersistentDrawerLeft />}>
//             <Route path="fleetview" element={<FleetView />} />
//             <Route path="sitelist" element={<SiteList />} />
//             <Route path="leaderboard" element={<LeaderBoard />} />
//             <Route path="/siteview/20" element={<SiteView />} />
//             <Route path="/siteview/" element={<SiteView />} />
//           </Route>
//       </Routes>
//   );
// }

// export default App;

// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FleetView from "./OptionComponents/FleetView";
import SiteList from "./OptionComponents/SiteList";
import LeaderBoard from "./OptionComponents/LeaderBoard";
import PersistentDrawerLeft from "./OptionComponents/Navbar";
import SiteView from "./OptionComponents/SiteView";
import DeviceList from "./OptionComponents/DeviceList";
import Topology from "./OptionComponents/Topology";
import SiteKPI from "./OptionComponents/SiteKPI";
import Availability from "./OptionComponents/Availability";
import OperationReport from "./OptionComponents/OperationReport";
import ActiveAlarm from "./OptionComponents/ActiveAlarm";
import AlarmSnooze from "./OptionComponents/AlarmSnooze";
import AlarmLog from "./OptionComponents/AlarmLog";
import AlarmSubscription from "./OptionComponents/AlarmSubscription";
import Login from "./Auth/Login";
import PrivateRoute from "./Auth/PrivateRoute";
import Signup from "./Auth/Signup";
import { useEffect } from "react"; // đảm bảo bạn đã import


import { ThemeModeProvider } from "./themeContex";

function App() {
    useEffect(() => {
    const handleUnload = () => {
      localStorage.removeItem("token");
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);
  return (
    <ThemeModeProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>

        {/* Bọc layout và toàn bộ route con bên trong PrivateRoute */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <PersistentDrawerLeft />
            </PrivateRoute>
          }
        >
          <Route path="fleetview" element={<FleetView />} />
          <Route path="sitelist" element={<SiteList />} />
          <Route path="leaderboard" element={<LeaderBoard />} />
          <Route path="/siteview/20" element={<SiteView />} />
          <Route path="/siteview/" element={<SiteView />} />
          <Route path="/devicelist/" element={<DeviceList />} />
          <Route path="/topologyanalysis" element={<Topology />} />
          <Route path="/sitekpi" element={<SiteKPI />} />
          <Route path="/availability" element={<Availability />} />
          <Route path="/operationreport" element={<OperationReport />} />
          <Route path="/activealarm" element={<ActiveAlarm />} />
          <Route path="/alarmsnooze" element={<AlarmSnooze />} />
          <Route path="/alarmlog" element={<AlarmLog />} />
          <Route path="/alarmsubscription" element={<AlarmSubscription />} />
        </Route>
      </Routes>
    </ThemeModeProvider>
  );
}

export default App;
