import styled from "@emotion/styled";
import React from "react";

const Header = () => {
  const LayPage = styled.div`
    width: 114px;
    height: 100vh;
    /* background-color: hotpink; */
    .nav {
      position: relative;
      display: flex;
      width: 114px;
      height: 100%;
      background-color: #f1f1f1;
      /* text-align: center; */
    }

    .nav-img {
      position: absolute;
      text-align: center;
      margin-top: 200px;
      margin-left: 38px;
    }
    .nav-img img {
      /* text-align: center; */
      display: block;
      width: 33px;
      height: 30px;
      margin-top: 67px;
      /* margin-left: 34px; */
    }

    .nabout-icon {
      position: relative;
    }

    .nabout-icon img {
      position: relative;
      width: 33px;
      height: 30px;
      margin-top: 800px;
      margin-left: 35px;
    }
    .nabout-icon p {
      position: absolute;
      margin-left: 50%;
    }
  `;
  return (
    <LayPage>
      <div className="nav">
        <div className="nav-img">
          <img src="./images/nintro.svg" />
          <p>첫화면</p>
          <img src="./images/ncheck.svg" />
          <p>감정상태</p>
          <img src="./images/ncalen.svg" />
          <p>캘린더</p>
          <img src="./images/nchart.svg" />
          <p>차트</p>
        </div>
        <div className="nabout-icon">
          <img src="./images/nabout.svg" />
          <p>ABOUT</p>
        </div>
      </div>
    </LayPage>
  );
};

export default Header;
