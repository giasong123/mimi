// nivo
import { ResponsiveLine } from "@nivo/line";
import { getChart } from "../../api/emo/apichart";
import { useEffect, useState } from "react";

const data = {
  data: [
    {
      id: "이번주",
      color: "hsl(226, 70%, 50%)",
      data: [
        {
          x: "월",
          y: 1,
        },
        {
          x: "화",
          y: 2,
        },
        {
          x: "수",
          y: 3,
        },
        {
          x: "목",
          y: 4,
        },
        {
          x: "금",
          y: 5,
        },
        {
          x: "토",
          y: 3,
        },
        {
          x: "일",
          y: 3,
        },
      ],
    },
    {
      id: "저번주",
      color: "hsl(126, 70%, 50%)",
      data: [
        {
          x: "월",
          y: 1,
        },
        {
          x: "화",
          y: 3,
        },
        {
          x: "수",
          y: 5,
        },
        {
          x: "목",
          y: 4,
        },
        {
          x: "금",
          y: 2,
        },
        {
          x: "토",
          y: 1,
        },
        {
          x: "일",
          y: 3,
        },
      ],
    },
  ],
};
const initData = {
  emoChart: [],
  good: 0,
  normal: 0,
  bad: 0,
};

const LineChart = () => {
  // 화면에 보여줄 서버 데이터 관리
  const [chartData, setChartData] = useState(initData);
  // 사용자 번호
  const [userNo, setUserNo] = useState(7);
  const getChartAction = () => {
    console.log("자료호출");
    getChart(userNo, setChartData);
  };

  console.log("chartData : ", chartData);
  useEffect(() => {
    getChartAction();
  }, []);

  // 차트
  const MyResponsiveLine = ({ chartData }) => (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "1",
        max: "5",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "요일",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "우울 지수",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={5}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      animate={false}
    />
  );

  return (
    <div className="feel-chart">
      <div style={{ width: "100%", height: "400px" }}>
        {MyResponsiveLine(data)}
      </div>
    </div>
  );
};

export default LineChart;
