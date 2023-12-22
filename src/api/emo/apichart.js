import axios from "axios";

export const getChart = async (iuser, setChartData) => {
  try {
    const res = await axios.get(`/api/emo/chart/${iuser}`);
    console.log(res.data);
    setChartData(res.data);
  } catch (error) {
    console.log(error);
    alert("서버 상태가 불안정합니다. 잠시 후 시도해 주세요.");
    setChartData({
      emoChart: [
        {
          emotionGrade: 5,
          dayOfTheWeek: 0,
        },
        {
          emotionGrade: 3,
          dayOfTheWeek: 1,
        },
        {
          emotionGrade: 3,
          dayOfTheWeek: 2,
        },
        {
          emotionGrade: 3,
          dayOfTheWeek: 3,
        },
        {
          emotionGrade: 3,
          dayOfTheWeek: 4,
        },
        {
          emotionGrade: 3,
          dayOfTheWeek: 5,
        },
        {
          emotionGrade: 5,
          dayOfTheWeek: 6,
        },
      ],
      good: 1,
      normal: 5,
      bad: 1,
    });
  }
};
