import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { CalenStyle } from "../../styles/calen/calenstyle";
import { TodoRight } from "../../styles/calen/todostyle";
import TodoInput from "../../components/calenders/TodoInput";

const initTodoList = [];
export const CalenPage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  // const [currentYear, setCurrentYear] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [todoList, setTodoList] = useState(initTodoList);

  // 0은 현재 -1 이전으로 이동
  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1),
    );
  };

  // 주어진 연도와 월에 해당하는 월의 총 일수/ +1, 0 현재 월의 마지막날
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // 연도와 월의 1일
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const generateDates = () => {
    const daysInMonth = getDaysInMonth(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
    );
    const firstDayOfWeek = getFirstDayOfMonth(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
    );

    const datesArray = Array.from(
      { length: daysInMonth + firstDayOfWeek },
      (_, i) => {
        if (i < firstDayOfWeek) {
          const prevMonthDays = getDaysInMonth(
            currentMonth.getFullYear(),
            currentMonth.getMonth() - 1,
          );
          return prevMonthDays - firstDayOfWeek + i + 1; // 이전 달의 날짜
        }
        return i - firstDayOfWeek + 1; // 현재 달의 날짜
      },
    );

    // 다음 달의 날짜 추가
    const remainingDays = (7 - ((daysInMonth + firstDayOfWeek) % 7)) % 7;
    for (let i = 0; i < remainingDays; i++) {
      datesArray.push(i + 1); // 다음 달의 날짜
    }

    return datesArray.map((day, index) => (
      <div
        key={index}
        className={`day ${day <= 0 ? "prev disable" : "current"}`}
      >
        {day > 0 && day}
      </div>
    ));
  };

  // 투두리스트

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
    <CalenStyle>
      <div className="left">
        <div className="calendar">
          <div className="month">
            <button className="calen-prev" onClick={handlePrevMonth}>
              <img src="/images/iconleft.svg" alt="Previous Month" />
            </button>
            <div className="date">{`${currentMonth.getFullYear()}년 ${
              currentMonth.getMonth() + 1
            }월`}</div>
            <button className="calen-next" onClick={handleNextMonth}>
              <img src="/images/iconright.svg" />
            </button>
          </div>

          <div className="week">
            <div>일</div>
            <div>월</div>
            <div>화</div>
            <div>수</div>
            <div>목</div>
            <div>금</div>
            <div>토</div>
          </div>
          <div className="days">{generateDates()}</div>
        </div>
      </div>
      <div className="center-line"></div>

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
                {initTodoList.map((item, idx) => {
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
    </CalenStyle>
  );
};

export default CalenPage;
