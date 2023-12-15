import React from "react";
import "../../styles/feel/feel.css";
const Feel = () => {
  
  function handleClick() {
    console.log("안녕")
  }

  return (
    <div className="wrap">
      <div className="header">
        <div className="feel_title">
          <p>현재 감정 상태를 선택해주세요</p>
        </div>
      </div>
      <main className="feel_affect">
        <ul>
          <li>
            <img src="./images/layer.svg" alt="" onClick={() => { handleClick}} />
            <p>매우 좋음</p>
          </li>
          <li>
            <img src="./images/layer1.svg" alt="" onClick={() => {}} />
            <p>좋음</p>
          </li>
          <li>
            <img src="./images/layer2.svg" alt="" onClick={() => {}} />
            <p>보통</p>
          </li>
          <li>
            <img src="./images/layer3.svg" alt="" onClick={() => {}} />
            <p>나쁨</p>
          </li>
          <li>
            <img src="./images/layer4.svg" alt="" onClick={() => {}} />
            <p>매우 나쁨</p>
          </li>
        </ul>
      </main>

      <footer className="feel_mood">
        <img src="./images/exciting.svg" alt="" />
        <img src="./images/good.svg" alt="" />
        <img src="./images/grateful.svg" alt="" />
        <img src="./images/happy.svg" alt="" />
        <img src="./images/hopeful.svg" alt="" />
        <img src="./images/joyful.svg" alt="" />
        <img src="./images/love.svg" alt="" />
        <img src="./images/proud.svg" alt="" />
        <img src="./images/yummy.svg" alt="" />
      </footer>
    </div>
  );
};

export default Feel;
