import React, { useEffect, useState } from "react";

import "../../styles/css/chart.css";

import KeyWordChart from "../../components/chart/KeyWordChart";
import LineChart from "../../components/chart/LineChart";
import { getChart } from "../../api/emo/apichart";
import OneWeekEmo from "../../components/chart/OneWeekEmo";

const initData = {
  emoChart: [],
  good: 0,
  normal: 0,
  bad: 0,
};
const Chart = () => {
  // 화면에 보여줄 서버 데이터 관리
  const [chartData, setChartData] = useState(initData);
  // 사용자 번호
  const [userNo, setUserNo] = useState(7);
  // 사용자 이름
  const [userName, setUserName] = useState("홍길동");

  const getChartAction = () => {
    console.log("자료호출");
    getChart(userNo, setChartData);
  };

  useEffect(() => {
    getChartAction();
  }, []);

  return (
    <div className="chart-page">
      <div className="main-box">
        <div className="box-inner">
          <OneWeekEmo weekData={chartData.emoChart} userName={userName} />

          <hr></hr>

          <LineChart weekData={chartData.emoChart}></LineChart>
          <KeyWordChart
            good={chartData.good}
            normal={chartData.normal}
            bad={chartData.bad}
          ></KeyWordChart>
        </div>
      </div>
    </div>
  );
};

export default Chart;
