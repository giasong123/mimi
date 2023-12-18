import axios from "axios";

export const postEmo = async (
  iuser,
  emoGrade,
  emoTag,
  failEmo,
  successNext,
) => {
  try {
    const emoData = {
      iuser: iuser,
      emoGrade: emoGrade,
      emoTag: emoTag,
    };

    const res = await axios.post("/api/emo", emoData);
    console.log(res.data);
    successNext();
  } catch (error) {
    console.log(error);
    alert("서버가 불안정합니다. 잠시 뒤 다시 시도해 주세요.");
    failEmo();
  }
};
