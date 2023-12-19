import axios from "axios";

export const postUser = async (nickName, gender, age, successFn, failFN) => {
  try {
    const emoData = {
      userNickName: nickName,
      userGender: gender,
      userAge: age,
    };

    const res = await axios.post("/api/user", emoData);
    console.log(res.data);
    successFn();
  } catch (error) {
    console.log(error);
    alert("서버가 불안정합니다. 잠시 뒤 다시 시도해 주세요.");
    failFN();
  }
};
