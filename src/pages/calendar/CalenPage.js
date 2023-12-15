import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { CTWrap, CalenLeft, TodoRight } from "../../styles/calen/calendarstyle";
import TodoInput from "../../components/calenders/TodoInput";

// 초기 todo 목록
const initTodoList = [];

const CalenPage = () => {
  const [todoList, setTodoList] = useState(initTodoList);
  const getTodoListAxio = () => {
    // 서버에 get 호출해서 전체 목록받기
    setTodoList([
      { work: "강아지 밥주기" },
      { work: "강아지 산책시키기" },
      { work: "강아지 운동시키기" },
    ]);
  };
  const handleClickAddTodo = () => {
    const arr = [...todoList];
    arr.push({ work: "할일추가해주세요." });
    setTodoList(arr);
  };
  useEffect(() => {
    getTodoListAxio();
  }, []);
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
              <p className="todo-date">
                23.12.08 금요일
                <br />
                <button
                  onClick={() => {
                    handleClickAddTodo();
                  }}
                >
                  항목추가
                </button>
              </p>

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
              <div
                style={{
                  height: "500px",
                  background: "red",
                  overflowX: "hidden",
                  overflowY: "auto",
                }}
              >
                {todoList.map((item, idx) => {
                  return <TodoInput key={idx} item={item} mode={false} />;
                })}
              </div>
            </div>
            {/* <ul className="todo-list">
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
              </ul> */}
          </div>
        </div>
      </TodoRight>
    </CTWrap>
  );
};

export default CalenPage;
