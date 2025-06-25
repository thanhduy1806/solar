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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FleetView from './OptionComponents/FleetView';
import SiteList from './OptionComponents/SiteList';
import LeaderBoard from './OptionComponents/LeaderBoard';
import PersistentDrawerLeft from './OptionComponents/Navbar';
import SiteView from './OptionComponents/SiteView';
import DeviceList from './OptionComponents/DeviceList';
import { ThemeModeProvider } from './themeContex';

function App() {
  return (
    <ThemeModeProvider>

        <Routes>
          <Route path="/" element={<PersistentDrawerLeft />}>
            <Route path="fleetview" element={<FleetView />} />
            <Route path="sitelist" element={<SiteList />} />
            <Route path="leaderboard" element={<LeaderBoard />} />
            <Route path="/siteview/20" element={<SiteView />} />
            <Route path="/siteview/" element={<SiteView />} />
            <Route path="/devicelist/" element={<DeviceList/>}/>
          </Route>
        </Routes>
     
    </ThemeModeProvider>
  );
}

export default App;
