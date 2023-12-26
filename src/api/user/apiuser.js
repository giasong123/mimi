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
    const resStatus = res.status.toString();
    if (resStatus.charAt(0) === "2") {
      successFn(res.data);
    } else {
      alert("잘못된 요청입니다.");
      failFN();
    }
  } catch (error) {
    console.log(error);
    alert("서버가 불안정합니다. 잠시 뒤 다시 시도해 주세요.");
    failFN();
  }
};
