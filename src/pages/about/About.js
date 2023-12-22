import React from "react";
import "../../styles/about.css";

const About = props => {
  console.log("iuser: ", props.iuserInfo.iuser);
}


const about = () => {

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
            <li>담당파트:캘린더 및 투두</li>
            <li>깃허브 주소</li>
            <li>노션 주소</li>
            <hr/>
            <li>이름: 김도현</li>
            <li>담당파트:차트</li>
            <li>< a href="https://github.com/dsa9925" className="a_tag">깃허브</a></li>
            <li><a href=": https://navy-sphere-b07.notion.site/8901958a33c446c2b9a33db9c7125970?pvs=4" className="a_tag">노션1</a>
                <a href="https://navy-sphere-b07.notion.site/78a03a12b9f14a60ae85624c8d9c7c7a?pvs=4"className="a_tag">노션2</a>
            </li>
            <hr/>
            <li>이름: 송보경</li>
            <li>담당파트:이모션</li>
            <li>
              <a
                href="https://github.com/giasong123/mimi.git"
                className="a_tag"
              >
                깃허브가기
              </a>
            </li>

            <li>
              <a
                href="https://www.notion.so/930adf8c31a544c5a7f510056352c88f?v=191854589ec04ffdab3fefc34823809b&pvs=4"
                className="a_tag"
              >
                노션
              </a>
            </li>
          </ul>
        </div>
        <div className="service_be">
          <p>Back-End</p>
          <ul>
            <li>
              <a
                href="https://github.com/joe-in-me/team6_back_end.git"
                className="a_tag"
              >
                깃허브
              </a>
            </li>
            <li>이름:조현민</li>
            <li>담당파트:투두</li>
            <hr/>
            <li>이름: 백승준</li>
            <li>담당파트:이모션</li>
            <hr/>
            <li>이름: 노혜선</li>
            <li>담당파트:유저</li>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default about;
