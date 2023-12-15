import React from "react";

export const OneWeekEmo = () => {
  return (
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
  );
};

export default OneWeekEmo;
