import axios from "axios";
import { SERVER_URL } from "../config";

export const getTodoIuser = async (iuser, year, month, day, setGetTodo) => {
  console.log("getTodoIuser");

  try {
    // /api/todo/7?y=2023&m=12&d=12/
    const res = await axios.get(
      `/api/todo/${7}?y=${2023}&m=${12}&d=${21}`,
      // `/api/todo/${iuser}?iuser=${iuser}&y=${year}&m=${month}&d=${day}`,
    );
    console.log(res.data);
    setGetTodo(res.data);
  } catch (error) {
    console.log(error);
    alert("서버가 불안정합니다. 잠시 후 실행해 주세요.");
    // 샘플 즉, 서버 오류시 샘플 데이터로 작업하기
    // {"emotion":null,"emotionTag":null,"todos":[]}
    setGetTodo(
      {
        emotionGrade: 5,
        emotionTag: "감사한",
        todos: [
          {
            itodo: 1,
            todoContent: "울랄부라 1",
          },
          {
            itodo: 2,
            todoContent: "울랄부라 2",
          },
        ],
      },
      {
        emotionGrade: 5,
        emotionTag: "행복한",
        todos: [
          {
            itodo: 1,
            todoContent: "1울랄ㄱㄱ부라 1",
          },
          {
            itodo: 2,
            todoContent: "1울랄부ㅈㅈ라 2",
          },
        ],
      },
      {
        emotionGrade: 5,
        emotionTag: "감사한",
        todos: [
          {
            itodo: 1,
            todoContent: "2울랄부라 1",
          },
          {
            itodo: 2,
            todoContent: "2울랄부라 2",
          },
        ],
      },
    );
  }
};

export const patchTodo = async obj => {
  console.log("patchTodo");
  try {
    const res = await axios.patch("/api/todo", obj);
    console.log(res.data);
  } catch (error) {
    console.log(error);
    alert("서버가 불안정합니다. 잠시 후 실행해 주세요.");
  }
};

export const deleteTodo = async (iuser, itodo) => {
  console.log("deleteTodo");
  try {
    // /{iuser}/{itodo}?iuser=1&itodo=1
    const res = await axios.delete(
      // `/api/todo/${iuser}/${itodo}?iuser=${iuser}&itodo=${itodo}`,
      `api/todo/${iuser}/${itodo}`,
    );
    console.log(res.data);
  } catch (error) {
    console.log(error);
    alert("서버가 불안정합니다. 잠시 후 실행해 주세요.");
  }
};

export const postTodo = async (iuser, todoContent, startDate, endDate) => {
  console.log("postTodo");
  const obj = {
    iuser: 1,
    todoContent: "todoContent",
    startDate: "2023-12-21",
    endDate: "2023-12-21",
  };
  try {
    const res = await axios.post(`/api/todo`, obj);
    console.log(res.data);
  } catch (error) {
    console.log(error);
    alert("서버가 불안정합니다. 잠시 후 실행해 주세요.");
  }
};

// post 바디
// {
//   "iuser": 1,
//   "todoContent": "todoContent",
//   "startDate": "2023-12-21",
//   "endDate": "2023-12-21"
// }

// export const postTodoIuser = async (
//   iuser,
//   todoContent,
//   startDate,
//   endDate,
//   setGetTodo,
// ) => {
//   console.log("postTodoIuser");

//   try {
//     const res = await axios.post(`/api/todo`);
//     console.log(res.data);
//     setPostTodo(res.data);
//   } catch (error) {
//     console.log(error);
//     alert("서버가 불안정합니다. 잠시 후 실행해 주세요.");
//     // 샘플 즉, 서버 오류시 샘플 데이터로 작업하기
//     // {"emotion":null,"emotionTag":null,"todos":[]}
//   }
// };
