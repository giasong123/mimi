import React, { useEffect, useRef, useState } from "react";
import "../../styles/feel/feel.css";
import { postEmo } from "../../api/emo/apiemo";
import { useNavigate } from "react-router-dom";

// 사용자 선택 기분 점수 초기값
const feelInitPoint = 0;
const feelInitMood = "";

const Feel = () => {
  // path 이동하기
  const navigate = useNavigate();
  const nowIcon = useRef(null);

  // 선택을 했는지 안했는지 판단
  const [selectFeel, setSelectFeel] = useState(false);
  const [selectMood, setSelectMood] = useState(false);

  const [feelPoint, setFeelPoint] = useState(feelInitPoint);
  const handleClick = (icon, event) => {
    // 사용자가 선택을 했다면 추가 선택 못하게
    if (selectFeel === true) {
      return;
    }
    // html 태그
    nowIcon.current = event.target;
    event.target.style.transform = "scale(1.5)";
    event.target.style.paddingBottom = "30px";

    setFeelPoint(icon);
    setSelectFeel(true);
  };

  const [feelMood, setFeelMood] = useState(feelInitMood);
  const handleClickMood = (mood, event) => {
    // 사용자가 선택을 했다면 추가 선택 못하게
    if (selectMood === true) {
      return;
    }

    event.target.style.transform = "scale(1.5)";
    event.target.style.padding = "0 10px";

    setFeelMood(mood);
    setFeelMood(true);
  };

  // 자료를 백엔드로 보내기
  const handleClickAdd = () => {
    if (feelPoint === 0) {
      alert("기분을 선택해주세요!");
      return;
    }
    if (feelMood === "") {
      alert("키워드를 선택해주세요!");
      return;
    }

    postEmo(1, feelPoint, feelMood, failEmo, successNext);
    // console.log("기분", feelPoint);
    // console.log("키워드", feelMood);
  };

  const successNext = () => {
    alert("등록에 성공하였습니다.");
    navigate("/calendar");
  };

  const failEmo = () => {
    console.log("다시 작성");
    nowIcon.current.style.transform = "scale(1.0)";
    nowIcon.current.style.paddingBottom = "0px";
    setFeelPoint(0);
    setSelectFeel(false);

    setFeelMood("");
    setSelectMood(false);
  };

  return (
    <div className="wrap">
      <div className="header">
        <div className="feel_title">
          <p>현재 감정 상태를 선택해주세요!</p>
          {/* <p>
            현재 기분 점수 : {feelPoint} : 현재 키워드 : {feelMood}{" "}
          </p> */}
        </div>
      </div>
      <div className="feel_affect">
        <ul>
          <li>
            <img
              src="./images/layer.svg"
              alt=""
              onClick={e => {
                handleClick(1, e);
              }}
            />
            <p>매우 좋음</p>
          </li>
          <li>
            <img
              src="./images/layer1.svg"
              alt=""
              onClick={e => {
                handleClick(2, e);
              }}
            />
            <p>좋음</p>
          </li>
          <li>
            <img
              src="./images/layer2.svg"
              alt=""
              onClick={e => {
                handleClick(3, e);
              }}
            />
            <p>보통</p>
          </li>
          <li>
            <img
              src="./images/layer3.svg"
              alt=""
              onClick={e => {
                handleClick(4, e);
              }}
            />
            <p>나쁨</p>
          </li>
          <li>
            <img
              src="./images/layer4.svg"
              alt=""
              onClick={e => {
                handleClick(5, e);
              }}
            />
            <p>매우 나쁨</p>
          </li>
        </ul>
      </div>
      {/* 상세 내역 */}
      <div className="feel_mood">
        {feelPoint === 1 || feelPoint === 2 ? (
          <>
            <div className="feel_very_good">
              <img
                src="./images/exciting.svg"
                alt=""
                onClick={e => {
                  handleClickMood("설레는", e);
                }}
              />
              <img
                src="./images/good.svg"
                alt=""
                onClick={e => {
                  handleClickMood("행복한", e);
                }}
              />
              <img
                src="./images/grateful.svg"
                alt=""
                onClick={e => {
                  handleClickMood("감사한", e);
                }}
              />
              <img
                src="./images/happy.svg"
                alt=""
                onClick={e => {
                  handleClickMood("기쁜", e);
                }}
              />
              <img
                src="./images/hopeful.svg"
                alt=""
                onClick={e => {
                  handleClickMood("희망한", e);
                }}
              />
              <img
                src="./images/joyful.svg"
                alt=""
                onClick={e => {
                  handleClickMood("즐거운", e);
                }}
              />
              <img
                src="./images/love.svg"
                alt=""
                onClick={e => {
                  handleClickMood("사랑하는", e);
                }}
              />
              <img
                src="./images/proud.svg"
                alt=""
                onClick={e => {
                  handleClickMood("대견한", e);
                }}
              />
              <img
                src="./images/yummy.svg"
                alt=""
                onClick={e => {
                  handleClickMood("신나는", e);
                }}
              />
            </div>
          </>
        ) : (
          ""
        )}
        {feelPoint === 3 ? (
          <>
            <div className="feel_soso">
              <img
                src="./images/anxiety.svg"
                alt=""
                onClick={e => {
                  handleClickMood("걱정되는", e);
                }}
              />
              <img
                src="./images/bad.svg"
                alt=""
                onClick={e => {
                  handleClickMood("불쾌한", e);
                }}
              />
              <img
                src="./images/bothersome.svg"
                alt=""
                onClick={e => {
                  handleClickMood("귀찮은", e);
                }}
              />
              <img
                src="./images/embarrassed.svg"
                alt=""
                onClick={e => {
                  handleClickMood("당황한", e);
                }}
              />
              <img
                src="./images/insensitive.svg"
                alt=""
                onClick={e => {
                  handleClickMood("무감한", e);
                }}
              />
              <img
                src="./images/jealous.svg"
                alt=""
                onClick={e => {
                  handleClickMood("질투나는", e);
                }}
              />
              <img
                src="./images/reassuring.svg"
                alt=""
                onClick={e => {
                  handleClickMood("안심되는", e);
                }}
              />
              <img
                src="./images/relieving.svg"
                alt=""
                onClick={e => {
                  handleClickMood("후련한", e);
                }}
              />
              <img
                src="./images/worried.svg"
                alt=""
                onClick={e => {
                  handleClickMood("고민되는", e);
                }}
              />
            </div>
          </>
        ) : (
          ""
        )}
        {feelPoint === 4 || feelPoint === 5 ? (
          <>
            <div className="feel_bad">
              <img
                src="./images/afraid.svg"
                alt=""
                onClick={e => {
                  handleClickMood("두려운", e);
                }}
              />
              <img
                src="./images/disappointed.svg"
                alt=""
                onClick={e => {
                  handleClickMood("실망한", e);
                }}
              />
              <img
                src="./images/disastrous.svg"
                alt=""
                onClick={e => {
                  handleClickMood("비참한", e);
                }}
              />
              <img
                src="./images/empty.svg"
                alt=""
                onClick={e => {
                  handleClickMood("공허한", e);
                }}
              />
              <img
                src="./images/lonely.svg"
                alt=""
                onClick={e => {
                  handleClickMood("외로운", e);
                }}
              />
              <img
                src="./images/mortifying.svg"
                alt=""
                onClick={e => {
                  handleClickMood("분한", e);
                }}
              />
              <img
                src="./images/painful.svg"
                alt=""
                onClick={e => {
                  handleClickMood("괴로운", e);
                }}
              />
              <img
                src="./images/sadness.svg"
                alt=""
                onClick={e => {
                  handleClickMood("슬픈", e);
                }}
              />
              <img
                src="./images/tired.svg"
                alt=""
                onClick={e => {
                  handleClickMood("지친", e);
                }}
              />
              <img
                src="./images/unfair.svg"
                alt=""
                onClick={e => {
                  handleClickMood("억울한", e);
                }}
              />
            </div>
          </>
        ) : (
          ""
        )}
      </div>

      <div className="feel_footer">
        {feelMood === "" ? (
          ""
        ) : (
          <button
            className="feel_bt"
            onClick={() => {
              handleClickAdd();
            }}
          >
            <p>확인</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Feel;
