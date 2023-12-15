import styled from "@emotion/styled";
import React from "react";
const CalenPage = () => {
  const CTWrap = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100vh;

    .c-line {
      margin: auto;
      height: 100vh;
      width: 2px;
      border-width: 0;
      color: #000;
      background-color: #000;
      opacity: 0.3;
    }
  `;
  const CalenLeft = styled.div`
    position: relative;
    /* display: flex; */
    width: 50%;
    height: 100vh;

    .calen-inner {
      position: relative;
      display: block;
      width: 70%;
      /* width: 590px; */
      height: 1000px;
      background-color: #03072e;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 30px;
      align-items: center;
      /* min-width: 100%; */
      /* max-width: 70%; */
    }

    .calen-header {
      margin: auto;
      width: 90%;
      height: 130px;
    }

    /* 상단 좌 월 */
    .month-nav {
      position: relative;
      display: flex;
      gap: 15px;
      margin: 40px 0px 30px 30px;
      vertical-align: middle;
      float: left;
    }
    .month-nav p {
      color: aliceblue;
      font-size: 20px;
    }
    .month-nav button {
      background-color: transparent;
      border: 0;
      cursor: pointer;
    }

    /* 상단 우 년도 */
    .year-nav {
      position: relative;
      display: flex;
      gap: 15px;
      margin: 40px 30px 30px 0px;
      float: right;
    }
    .year-nav p {
      color: aliceblue;
      font-size: 20px;
    }

    .year-nav button {
      background-color: transparent;
      border: 0;
      cursor: pointer;
    }

    .calen-main {
      width: 80%;
      margin: auto;
      color: aliceblue;
    }

    .calen-main ul {
      display: flex;
      list-style: none;
      flex-wrap: wrap;
      /* margin-right: 40px; */
      cursor: pointer;
    }
    .calen-main ul li {
      position: relative;
      width: calc(100% / 7);
      text-align: center;
      margin: auto;
      line-height: 6;
      font-size: 20px;
    }
    .weeks {
      display: flex;
      justify-content: center;
      width: 88%;
      justify-content: space-between;
      font-weight: 700;
      font-size: 20px;
      margin-bottom: 40px;
      margin-top: 10px;
      margin: auto;
      text-align: center;
    }

    .days li::before {
      position: absolute;
      content: "";
      width: 40px;
      height: 40px;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      /* background: #222b7c;
  opacity: 0.5; */
    }
    .days li:hover::before {
      background: #222b7c;
      opacity: 0.5;
    }
  `;
  const TodoRight = styled.div`
    width: 50%;
    height: 100vh;

    .todo-inner {
      position: relative;
      display: block;
      width: 70%;
      height: 1000px;
      /* opacity: 0.3; */
      background: #b6bbc4;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 30px;
      align-items: center;
    }

    .todo-inin {
      width: 80%;
      height: 850px;
      margin: auto;
      padding-top: 20px;
      /* background-color: aqua; */
    }
    .header-todo {
      height: 130px;
      /* background-color: beige; */
    }
    .header-todo span {
      display: flex;
      padding-top: 20px;
      gap: 10px;
      align-items: center;
    }

    .blue-line {
      width: 4px;
      height: 31px;
      background-color: #0118e3;
    }

    .header-todo img {
      width: 30px;
      height: 30px;
    }

    .header-todo p {
      font-size: 20px;
    }
    .header-todo hr {
      height: 15px;
    }

    .todo-date {
      padding-top: 20px;
      color: #000;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .todo-list {
      position: relative;
      display: flex;
      align-items: center;
      margin-top: 30px;
      gap: 10px;
    }

    .todo-list p {
      font-size: 20px;
    }

    .todo-list button {
      border: none;
      background: transparent;
    }

    .todo-list button {
      border: none;
      /* border: solid 1px; */
      background: transparent;
      cursor: pointer;
    }

    .todo-list button:hover {
      background-image: url("./images/deleteb.svg");
    }

    .red-line {
      width: 4px;
      height: 31px;
      background-color: #0118e3;
    }
  `;
  return (
    <CTWrap>
      <CalenLeft>
        <div className="calen-inner">
          <div className="calen-header">
            <div className="month-nav">
              <button className="month-prev">
                {/* <img src="./images/iconleft.svg" /> */}
                <img src="./images/iconleft.svg" />
              </button>
              <p className="current-month">12월</p>
              <button className="month-down">
                <img src="./images/icondown.svg" />
              </button>

              <button className="month-next">
                <img src="./images/iconright.svg" />
              </button>
            </div>

            <div className="year-nav">
              <button className="year-prev">
                <img src="./images/iconleft.svg" />
              </button>
              <p className="current-year">2023</p>
              <button className="year-down">
                <img src="./images/icondown.svg" />
              </button>

              <button className="year-next">
                <img src="./images/iconright.svg" />
              </button>
            </div>
          </div>

          <div className="calen-main">
            <div className="weeks">
              <div>일</div>
              <div>월</div>
              <div>화</div>
              <div>수</div>
              <div>목</div>
              <div>금</div>
              <div>토</div>
            </div>
            <ul className="days">
              <li>26</li>
              <li>27</li>
              <li>28</li>
              <li>29</li>
              <li>30</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
              <li>16</li>
              <li>17</li>
              <li>18</li>
              <li>19</li>
              <li>20</li>
              <li>21</li>
              <li>22</li>
              <li>23</li>
              <li>24</li>
              <li>25</li>
              <li>26</li>
              <li>27</li>
              <li>28</li>
              <li>29</li>
              <li>30</li>
              <li>31</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </div>
        </div>
      </CalenLeft>

      <hr className="c-line" />

      <TodoRight>
        <div className="todo-inner">
          <div className="todo-inin">
            <div className="header-todo">
              <p className="todo-date">23.12.08 금요일</p>
              <span>
                <div className="blue-line"></div>
                <img src="../images/layer.svg" />
                <p>매우 좋음</p>
                <hr className="emt-line" />
                <p>기쁜</p>
              </span>
            </div>

            <hr />

            <div className="todo-main">
              <ul className="todo-list">
                <div className="red-line"></div>
                <p>강아지 밥주기</p>
                <button>
                  <img src="./images/deleten.svg" />
                </button>
              </ul>

              <ul className="todo-list">
                <div className="red-line"></div>
                <p>강아지 밥주기</p>
                <button>
                  <img src="./images/deleten.svg" />
                </button>
              </ul>
            </div>
          </div>
        </div>
      </TodoRight>
    </CTWrap>
  );
};

export default CalenPage;
