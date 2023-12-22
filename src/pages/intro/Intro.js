import React, { useState } from "react";
import { IntroWrap } from "../../styles/introstyle/introwrap";
import { IntroPage } from "../../styles/introstyle/intropage";
import { useNavigate } from "react-router";
import { postUser } from "../../api/user/apiuser";
// intro page 안에 js를 넣으니 import 문제 생겨서 잠깐 page로 빼줌
// intro emotion css 적용 완료
// wrap은 적용이 힘들어 따로 intro.css에 폰트랑 같이 보관중
// 버튼추가 필요

const initNickName = "";
const initGender = "";
const initAge = 0;

const Intro = () => {
  const [nickName, setNickName] = useState(initNickName);
  const [gender, setGender] = useState(initGender);
  const [age, setAge] = useState(initAge);

  const navigate = useNavigate();
  const handleClickFeel = e => {
    // 새로 고침 방지
    e.preventDefault();

    if (nickName === "") {
      alert("닉네임을 입력하세요.");
      return;
    }
    if (gender === "") {
      alert("성별을 입력하세요.");
      return;
    }
    if (age === 0) {
      alert("나이를 입력하세요.");
      return;
    }

    postUser(nickName, gender, age, successFn, failFn);
  };
  const handleChangeMember = e => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    if (e.target.name === "nickname") {
      setNickName(e.target.value);
      return;
    }
    if (e.target.name === "gender") {
      const n = parseInt(e.target.value);
      setGender(n);
      return;
    }
    if (e.target.name === "age") {
      //
      const n = parseInt(e.target.value);
      setAge(n);
      return;
    }
  };

  const successFn = () => {
    alert("등록에 성공하였습니다.");
    navigate("/feel");
  };

  const failFn = () => {
    console.log("다시 작성");
  };

  return (
    <IntroWrap>
      <IntroPage>
        <header>
          <p className="introtitl">MIND O</p>
          <p className="introtitr">F MINE</p>
        </header>

        <div className="intro-l">
          <div>
            <img src="./images/logob.png" alt="Logo" />
          </div>
          <div>
            <ul>
              <p>당신의 오늘 하루는 어땠나요?</p>
            </ul>
          </div>
          <form
            className="intro-log"
            onSubmit={e => {
              handleClickFeel(e);
            }}
          >
            <input
              type="text"
              name="nickname"
              placeholder="닉네임을 입력해주세요"
              value={nickName}
              onChange={e => {
                handleChangeMember(e);
              }}
            />
            <br />

            <select
              value={gender}
              name="gender"
              onChange={e => {
                handleChangeMember(e);
              }}
            >
              <option value="">성별을 선택해주세요</option>
              <option value="0">여자</option>
              <option value="1">남자</option>
              <option value="2">중성</option>
            </select>
            <br />

            <input
              type="number"
              name="age"
              placeholder="나이를 입력해주세요"
              value={age}
              onChange={e => {
                handleChangeMember(e);
              }}
            />
            <br />
            <button>확인</button>
          </form>
        </div>

        <div className="intro-r">
          <div>
            <img src="./images/logow.png" alt="Logo" />
          </div>
          <ul>
            <p>
              일기를 쓰듯 감정을 기록하고, 일상 속
              <br />
              정신적인 피로와 스트레스에서 벗어나
              <br />
              여러분의 미래를 더 밝게 비춰드릴게요.
              <br />
            </p>
          </ul>
        </div>
      </IntroPage>
    </IntroWrap>
  );
};

export default Intro;
