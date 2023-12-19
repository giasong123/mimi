import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Calendar from "./pages/calendar/CalenPage";
import Chart from "./pages/chart/Chart";
import Feel from "./pages/feel/Feel";
import Intro from "./pages/intro/Intro";
import { Wrap } from "./styles/basic";
import Header from "./components/Header";
import { calc } from "antd/es/theme/internal";

const App = () => {
  const mainStyle = {
    width: "calc(100% - 114px)",
  };
  return (
    <Wrap>
      <Header></Header>
      <main style={mainStyle}>
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          {/* <Route path="/chart" element={<Chart />}></Route> */}
          <Route path="/feel" element={<Feel />}></Route>
          <Route path="*" element={<h1>파일이없네요.</h1>}></Route>
        </Routes>
      </main>
    </Wrap>
  );
};

export default App;
