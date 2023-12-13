import React from "react";
import "../../styles/css/chart.css";

const Chart = () => {
  return (
    <div className="wrap">
      <div className="category">
        <div className="category-inner">
          <a href="#" className="category-icon">
            <div className="icon">
              <div className="icon-top">
                <img src="./images/navintro1.svg" />
                <p>첫 화면</p>
                <img src="./images/navintro2.svg" />
                <p>감정 상태</p>
                <img src="./images/navintro3.svg" />
                <p>캘린더</p>
                <img src="./images/navintro4.svg" />
                <p>차트</p>
              </div>
              <div className="icon-bottom">
                <img src="./images/navintro5.svg"></img>
                <p>ABOUT</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="main-box">
        <div className="box-inner"></div>
      </div>
    </div>
  );
};

export default Chart;
