import axios from "axios";

export const getChart = async (iuser, setChartData) => {
  try {
    const ChartData = {};
    const res = await axios.get(`/api/emo/chart/${iuser}`);
    console.log(res.data);
    setChartData();
  } catch (error) {
    console.log(error);
  }
};
