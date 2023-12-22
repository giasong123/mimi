import React from "react";
import "../../styles/about.css";
const About = () => {
  return (
    <div className="aboutwrap">
      <div className="service">
        <div className="service_movie">
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Xp8Ep1W-azw?si=ciulgLltVcPnpS56"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <h1>서비스 시연 영상</h1>
        </div>
      </div>
      <div className="service_introduction">
        <div className="service_fe">
          <p>Front-End</p>
          <ul>
            <li>이름: 김주영</li>
            <li>깃허브 주소:</li>
            <li>담당파트:</li>
            <li>노션 주소:</li>

            <li>이름: 김도현</li>
            <li>깃허브 주소:</li>
            <li>담당파트:</li>
            <li>노션 주소:</li>

            <li>이름: 송보경</li>
            <li>깃허브 주소:https://github.com/giasong123/mimi.git</li>
            <li>담당파트:</li>
            <li>
              노션
              주소:https://www.notion.so/930adf8c31a544c5a7f510056352c88f?v=191854589ec04ffdab3fefc34823809b&pvs=4
            </li>
          </ul>
        </div>
        <div className="service_be">
          <p>Back-End</p>
          <ul>
            <li>이름:조현민</li>
            <li>깃허브 주소:</li>
            <li>담당파트:</li>
            <li>노션 주소:</li>

            <li>이름: 백승준</li>
            <li>깃허브 주소:</li>
            <li>담당파트:</li>
            <li>노션 주소:</li>

            <li>이름: 노혜선</li>
            <li>깃허브 주소:</li>
            <li>담당파트:</li>
            <li>노션 주소:</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
