import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const LayPage = styled.div`
    width: 114px;
    min-height: 960px;
    display: flex;
    overflow-y: hidden;
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
        <div className="nabout-icon">
          <Link to="/about">
            <img src="./images/nabout.svg" />
            <p>ABOUT</p>
          </Link>
        </div>
        <div className="nav-img">
          <Link to="/">
            <img src="./images/nintro.svg" />
            <p>첫화면</p>
          </Link>
          <Link to="/feel">
            <img src="./images/ncheck.svg" />
            <p>감정상태</p>
          </Link>
          <Link to="/calendar/1">
            <img src="./images/ncalen.svg" />
            <p>캘린더</p>
          </Link>
          <Link to="/chart">
            <img src="./images/nchart.svg" />
            <p>차트</p>
          </Link>
        </div>
      </div>
    </LayPage>
  );
};

export default Header;
