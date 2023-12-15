import React from "react";
import { IntroWrap } from "../../styles/introstyle/introwrap";
import { IntroPage } from "../../styles/introstyle/intropage";
import { useNavigate } from "react-router";
// intro page 안에 js를 넣으니 import 문제 생겨서 잠깐 page로 빼줌
// intro emotion css 적용 완료
// wrap은 적용이 힘들어 따로 intro.css에 폰트랑 같이 보관중
// 버튼추가 필요

const Intro = () => {
  const navigate = useNavigate();
  const handleClickFeel = () => {
    navigate("/feel");
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
          <form className="intro-log">
            <input type="text" placeholder="닉네임을 입력해주세요" />
            <br />

            <select>
              <option>성별을 선택해주세요</option>
              <option>여자</option>
              <option>남자</option>
              <option>중성</option>
            </select>
            <br />

            <input type="text" placeholder="나이를 입력해주세요" />
            <br />
            <button
              onClick={() => {
                handleClickFeel();
              }}
            >
              확인
            </button>
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
