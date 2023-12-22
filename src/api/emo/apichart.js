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
<<<<<<< HEAD
          emotionGrade: 3,
          dayOfTheWeek: 0,
        },
        {
          emotionGrade: 1,
=======
          emotionGrade: 5,
          dayOfTheWeek: 0,
        },
        {
          emotionGrade: 3,
>>>>>>> e50579b6f9d599ca419c99cefcdbe0e5ba0100af
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
<<<<<<< HEAD
          emotionGrade: 1,
          dayOfTheWeek: 6,
        },
      ],
      good: 3,
      normal: 4,
      bad: 0,
=======
          emotionGrade: 5,
          dayOfTheWeek: 6,
        },
      ],
      good: 1,
      normal: 5,
      bad: 1,
>>>>>>> e50579b6f9d599ca419c99cefcdbe0e5ba0100af
    });
  }
};
