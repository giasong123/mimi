import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Calendar from "./pages/calendar/Calendar";
import Chart from "./pages/chart/Chart";
import Feel from "./pages/feel/Feel";
import Intro from "./pages/intro/Intro";
import { Wrap } from "./styles/basic";
import LayWrap from "./components/LayWrap";

const App = () => {
  return (
    <Wrap>
      <Routes>
        <Route path="/" element={<LayWrap />}></Route>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/calendar" element={<Calendar />}></Route>
        <Route path="/chart" element={<Chart />}></Route>
        <Route path="/Feel" element={<Feel />}></Route>
        <Route path="*" element={<h1>파일이없네요.</h1>}></Route>
      </Routes>
    </Wrap>
  );
};

export default App;
