import axios from "axios";

export const getChart = async setChartData => {
  try {
    // http://192.168.0.144:5216/api/emo/chart/1
    const res = await axios.get("/api/emo/chart/20231218");
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
