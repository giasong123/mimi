import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
// import Calendar from "./pages/calendar/CalenPage";
import Calendar from "./pages/calendar/CalendarPageNew";
// import Calendar2 from "./pages/calendar/CalendarPageNew";
import Chart from "./pages/chart/Chart";
import Feel from "./pages/feel/Feel";
import Intro from "./pages/intro/Intro";

import { Wrap } from "./styles/basic";
import Header from "./components/Header";
import { calc } from "antd/es/theme/internal";
import Error from "./pages/errorpage/error";

const initUserInfo = { iuser: 0, result: 0, userNickName: "" };
const App = () => {
  const [iuserInfo, setIuserInfo] = useState(initUserInfo);
  const mainStyle = {
    width: "calc(100% - 114px)",
  };
  return (
    <Wrap>

      <Header />
      <main style={mainStyle}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/calendar/:iuser" element={<Calendar />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/feel" element={<Feel />} />
          {/* catch-all route for handling invalid paths */}
          <Route path="*" element={<Error />} />

      
        </Routes>
      </main>
    </Wrap>
  );
};

export default App;
