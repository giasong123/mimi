import React, { useState } from "react";
import "../../styles/feel/feel.css";

// 사용자 선택 기분 점수 초기값
const feelInitPoint = 0;
const feelInitMood = "";

const Feel = () => {
  const [feelPoint, setFeelPoint] = useState(feelInitPoint);
  const handleClick = icon => {
    setFeelPoint(icon);
  };

  const [feelMood, setFeelMood] = useState(feelInitMood);
  const handleClickMood = mood => {
    setFeelMood(mood);
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

    console.log("기분", feelPoint);
    console.log("키워드", feelMood);
  };

  return (
    <div className="wrap">
      <div className="header">
        <div className="feel_title">
          <p>현재 감정 상태를 선택해주세요!</p>
          <p>
            현재 기분 점수 : {feelPoint} : 현재 키워드 : {feelMood}{" "}
            <button
              onClick={() => {
                handleClickAdd();
              }}
            >
              자료등록
            </button>
          </p>
        </div>
      </div>
      <main className="feel_affect">
        <ul>
          <li>
            <img
              src="./images/layer.svg"
              alt=""
              onClick={() => {
                handleClick(1);
              }}
            />
            <p>매우 좋음</p>
          </li>
          <li>
            <img
              src="./images/layer1.svg"
              alt=""
              onClick={() => {
                handleClick(2);
              }}
            />
            <p>좋음</p>
          </li>
          <li>
            <img
              src="./images/layer2.svg"
              alt=""
              onClick={() => {
                handleClick(3);
              }}
            />
            <p>보통</p>
          </li>
          <li>
            <img
              src="./images/layer3.svg"
              alt=""
              onClick={() => {
                handleClick(4);
              }}
            />
            <p>나쁨</p>
          </li>
          <li>
            <img
              src="./images/layer4.svg"
              alt=""
              onClick={() => {
                handleClick(5);
              }}
            />
            <p>매우 나쁨</p>
          </li>
        </ul>
      </main>

      <footer className="feel_mood">
        <img
          src="./images/exciting.svg"
          alt=""
          onClick={() => {
            handleClickMood("a");
          }}
        />
        <img
          src="./images/good.svg"
          alt=""
          onClick={() => {
            handleClickMood("b");
          }}
        />
        <img
          src="./images/grateful.svg"
          alt=""
          onClick={() => {
            handleClickMood("c");
          }}
        />
        <img
          src="./images/happy.svg"
          alt=""
          onClick={() => {
            handleClickMood("d");
          }}
        />
        <img
          src="./images/hopeful.svg"
          alt=""
          onClick={() => {
            handleClickMood("a");
          }}
        />
        <img
          src="./images/joyful.svg"
          alt=""
          onClick={() => {
            handleClickMood("c");
          }}
        />
        <img
          src="./images/love.svg"
          alt=""
          onClick={() => {
            handleClickMood("d");
          }}
        />
        <img
          src="./images/proud.svg"
          alt=""
          onClick={() => {
            handleClickMood("e");
          }}
        />
        <img
          src="./images/yummy.svg"
          alt=""
          onClick={() => {
            handleClickMood("f");
          }}
        />
      </footer>
    </div>
  );
};

export default Feel;
