// nivo
import { ResponsiveLine } from "@nivo/line";

const data = {
  data: [
    {
      id: "Feel",
      color: "hsl(326, 70%, 50%)",
      data: [
        {
          x: "월",
          y: 3,
        },
        {
          x: "화",
          y: 3,
        },
        {
          x: "수",
          y: 3,
        },
        {
          x: "목",
          y: 3,
        },
        {
          x: "금",
          y: 1,
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
  ],
};
const initData = {
  emoChart: [],
  good: 0,
  normal: 0,
  bad: 0,
};

const LineChart = props => {
  const lineData = props.lineData;

  // 차트
  const MyResponsiveLine = _obj => (
    <ResponsiveLine
      data={_obj.data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "0",
        max: "5",
        stacked: true,
        reverse: false,
      }}
      yFormat="0"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "우울지수",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      isInteractive={false}
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
        {MyResponsiveLine(lineData)}
      </div>
    </div>
  );
};

export default LineChart;
