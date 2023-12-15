import React from "react";
import "../../styles/css/chart.css";

const Chart = () => {
  return (
    <div className="chart-page">
      <div className="main-box">
        <div className="box-inner">
          <div className="feel-facebox">
            <div className="feel-title">
              <p>??? 님은 한 주를 이렇게 보냈어요</p>
            </div>
            <div className="feel-face">
              <ul>
                <li>
                  <img src="/images/layer.svg" alt=""></img>
                  <p>월요일</p>
                </li>

                <li>
                  <img src="/images/layer1.svg" alt=""></img>
                  <p>화요일</p>
                </li>

                <li>
                  <img src="/images/layer2.svg" alt=""></img>
                  <p>수요일</p>
                </li>

                <li>
                  <img src="/images/layer3.svg" alt=""></img>
                  <p>목요일</p>
                </li>

                <li>
                  <img src="/images/layer1.svg" alt=""></img>
                  <p>금요일</p>
                </li>

                <li>
                  <img src="/images/layer2.svg" alt=""></img>
                  <p>토요일</p>
                </li>

                <li>
                  <img src="/images/layer4.svg" alt=""></img>
                  <p>일요일</p>
                </li>
              </ul>
            </div>
          </div>

          <hr></hr>

          <div className="feel-chart"></div>
          <div className="feel-keywordbox">
            <div className="keyword-title">
              <p>이번주 키워드 차트</p>
            </div>
            <div className="keyword-inner">
              <ul>
                <li>
                  <img src="/images/sun.svg" alt=""></img>
                  <img src="/images/sunbar.svg" alt=""></img>
                  <p>2일</p>
                </li>

                <div className="feeling">
                  <p>긍정</p>
                </div>

                <li className="cloud">
                  <img src="/images/cloud.svg" alt=""></img>
                  <img src="/images/cloudbar.svg" alt=""></img>
                  <p>3일</p>
                </li>
                <div className="feeling">
                  <p>보통</p>
                </div>

                <li className="rain">
                  <img src="/images/rain.svg" alt=""></img>
                  <img src="/images/rainbar.svg" alt=""></img>
                  <p>2일</p>
                </li>
                <div className="feeling">
                  <p>부정</p>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
