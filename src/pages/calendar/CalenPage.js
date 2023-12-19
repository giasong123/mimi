import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { CalenStyle } from "../../styles/calen/calenstyle";

export const CalenPage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  // const [currentYear, setCurrentYear] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

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

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

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
      {/* todo만들기 */}
      <div className="right">
        <div className="todolist">
          <div className="today-date"></div>
        </div>
      </div>
    </CalenStyle>
  );
};

export default CalenPage;
