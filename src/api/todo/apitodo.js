import axios from "axios";

export const getTodoIuser = async (iuser, year, month, day, setGetTodo) => {
  console.log("getTodoIuser");
  try {
    const res = await axios.get(
      `/api/todo/${iuser}?iuser=${iuser}&y=${year}&m=${month}&d=${day}`,
    );
    console.log(res.data);
    setGetTodo(res.data);
  } catch (error) {
    console.log(error);
    alert("서버가 불안정합니다. 잠시 후 실행해 주세요.");
    // 샘플 즉, 서버 오류시 샘플 데이터로 작업하기
    setGetTodo({
      emotion: null,
      emotionTag: null,
      todos: [],
    });
  }
};
