import React, { useEffect, useState } from "react";
import "../../styles/css/chart.css";

import KeyWordChart from "../../components/chart/KeyWordChart";
import LineChart from "../../components/chart/LineChart";
import { getChart } from "../../api/emo/apichart";
import OneWeekEmo from "../../components/chart/OneWeekEmo";

const initData = [];
const Chart = () => {
  const [chartData, setChartData] = useState([]);
  const getChartAction = () => {
    console.log("자료호출");
    getChart(5, setChartData);
  };

  useEffect(() => {
    console.log("자리 마련");
    getChartAction();
  }, []);

  return (
    <div className="chart-page">
      <div className="main-box">
        <div className="box-inner">
          <OneWeekEmo></OneWeekEmo>

          <hr></hr>
          <LineChart></LineChart>
          <KeyWordChart chartData={chartData}></KeyWordChart>
        </div>
      </div>
    </div>
  );
};

export default Chart;
