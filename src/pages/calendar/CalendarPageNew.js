import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { CalenStyle } from "../../styles/calen/calenstyle";
import { TodoRight } from "../../styles/calen/todostyle";
import TodoInput from "../../components/calenders/TodoInput";
import { deleteTodo, getTodoIuser, postTodo } from "../../api/todo/apitodo";
import { useParams } from "react-router";
import { getEmoIuser } from "../../api/emo/apiemo";

import { Modal, Calendar, Badge } from "antd";
import moment from "moment/moment";
const getListData = () => {
  let listData = [
    {
      itodo: 1,
      todoUser: 1,
      todoTitle: "크리스마스 할일",
      todoContent: "todoContent",
      todoComplete: 1,
      todoDate: "2023-12-24",
      todoPic:
        "https://cdn.mediatoday.co.kr/news/photo/202311/313885_438531_4716.jpg",
    },
    {
      itodo: 2,
      todoUser: 1,
      todoTitle: "혼자 바다구경 ㅠㅠ",
      todoContent: "todoContent",
      todoComplete: 1,
      todoDate: "2023-12-24",
      todoPic:
        "https://cdn.mediatoday.co.kr/news/photo/202311/313885_438531_4716.jpg",
    },
    {
      itodo: 3,
      todoUser: 1,
      todoTitle: "혼자 바다구경 ㅠㅠ",
      todoContent: "todoContent",
      todoComplete: 1,
      todoDate: "2023-12-21",
      todoPic:
        "https://cdn.mediatoday.co.kr/news/photo/202311/313885_438531_4716.jpg",
    },
  ];

  return listData;
};

const initTodoList = [];
const initChoiceDate = "";
const initGetTodo = {
  emotion: null,
  emotionTag: null,
  todos: [],
};
const initPostTodo = {
  iuser: 0,
  todoContent: "",
  startDate: "",
  endDate: "",
};
export const CalenPageNew = props => {
  console.log("iuser: ", props.iuserInfo.iuser);
  const { iuser, itodo } = useParams();
  const param = useParams();
  const [todoList, setTodoList] = useState(initTodoList);
  // 투두리스트
  const [callImageStr, setCallImageStr] = useState("");
  const emoImages = [
    `${process.env.PUBLIC_URL}/images/layer1.svg`,
    `${process.env.PUBLIC_URL}/images/layer2.svg`,
    `${process.env.PUBLIC_URL}/images/layer3.svg`,
    `${process.env.PUBLIC_URL}/images/layer4.svg`,
    `${process.env.PUBLIC_URL}/images/layer5.svg`,
  ];
  const [callImageId, setCallImageId] = useState(0);

  const handleDeleteTodo = item => {
    deleteTodo(props.iuserInfo.iuser, item.itodo, deleteSuccess);
  };
  const deleteSuccess = () => {
    alert("삭제에 성공하였습니다.");
    const gogo = selectedDate2.format("YYYY-MM-DD");
    const dd = gogo.split("-");
    // 서버에 보내서 todo 목록 얻기
    getTodoIuser(
      props.iuserInfo.iuser,
      dd[0],
      dd[1],
      dd[2],
      setTodoList,
      setCallImageId,
      setCallImageStr,
    );

    getEmoIuser(props.iuserInfo.iuser, dd[0], dd[1], getEmoSuccess);
  };

  useEffect(() => {
    // 화면 로딩시 오늘 날짜를 통해 목록 받기
    var now = moment();
    const dd = now.format("YYYY-MM-DD");
    const ddd = dd.split("-");

    getTodoIuser(
      props.iuserInfo.iuser,
      ddd[0],
      ddd[1],
      ddd[2],
      setTodoList,
      setCallImageId,
      setCallImageStr,
    );

    getEmoIuser(props.iuserInfo.iuser, ddd[0], ddd[1], getEmoSuccess);
  }, []);

  // 코드 수정 (2023 12 22)

  const [newContent, setNewContent] = useState("");
  const handleClickAddTodo = () => {
    if (todoList.length >= 10) {
      alert("리스트 추가는 10개까지 입니다.");
      return;
    }
    if (newContent === "") {
      alert("내용을 입력하세요.");
      return;
    }

    const obj = {
      iuser: props.iuserInfo.iuser,
      todoContent: newContent,
      startDate: selectedDate2.format("YYYY-MM-DD"),
      endDate: selectedDate2.format("YYYY-MM-DD"),
    };
    postTodo(obj, postTodoSuccess);
  };

  const postTodoSuccess = _obj => {
    alert("등록에 성공하였습니다.");
    setNewContent("");
    const gogo = selectedDate2.format("YYYY-MM-DD");
    const dd = gogo.split("-");
    // 서버에 보내서 todo 목록 얻기
    getTodoIuser(
      props.iuserInfo.iuser,
      dd[0],
      dd[1],
      dd[2],
      setTodoList,
      setCallImageId,
      setCallImageStr,
    );

    getEmoIuser(props.iuserInfo.iuser, dd[0], dd[1], getEmoSuccess);
  };

  const [isEmoList, setIsEmoList] = useState([]);

  const getEmoSuccess = _data => {
    setIsEmoList(_data);
  };

  // 캘린더 관련
  // 일별 자료 출력하기
  const dateCellRender = value => {
    const listData = getListData();
    const selectDate = `${value.year()}-${value.month() + 1}-${value.date()}`;
    const findeShowList = isEmoList.filter(
      item => item.day.trim() === selectDate,
    );
    return (
      <ul className="events">
        {findeShowList.map(item => (
          <li
            key={item.day}
            onClick={() => {
              //   showModal(item);
            }}
          >
            {item.emotionTag !== null ? (
              <Badge status="error" text={item.emotionTag} />
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    );
  };

  // 각각의 셀의 날짜를 보고, 정보를 출력하는 역할
  const cellRender = (current, info) => {
    if (info.type === "date") {
      return dateCellRender(current);
    }
    return info.originNode;
  };

  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleDateSelect = value => {
    const gogo = value.format("YYYY-MM-DD");
    const dd = gogo.split("-");
    // 서버에 보내서 todo 목록 얻기
    getTodoIuser(
      props.iuserInfo.iuser,
      dd[0],
      dd[1],
      dd[2],
      setTodoList,
      setCallImageId,
      setCallImageStr,
    );
    setSelectedDate2(value);
  };
  return (
    <CalenStyle>
      <div className="left">
        <p>
          {" "}
          {selectedDate2
            ? selectedDate2.format("YYYY-MM-DD")
            : "No date selected"}
        </p>
        <Calendar
          cellRender={cellRender}
          onSelect={handleDateSelect}
          value={selectedDate2}
        />
      </div>
      <div className="center-line"></div>

      <TodoRight>
        <div className="todo-inner">
          <div className="todo-inin">
            <div className="header-todo">
              <p className="todo-date">
                {selectedDate2
                  ? selectedDate2.format("YYYY-MM-DD")
                  : "날짜를 선택주세요."}
                {/* 23.12.08 금요일 */}
                {/* {`${currentMonth.getFullYear()}년 ${
                  currentMonth.getMonth() + 1
                }월 `} */}
              </p>

              <span className="print-emo">
                <div className="blue-line"></div>
                <img
                  src={`/images/layer${callImageId - 1}.svg`}
                  alt={`${process.env.PUBLIC_URL}/images/layer${callImageId}.svg`}
                />
                <p>{callImageStr}</p>
                {/* <div className="emt-line"></div> */}
                {/* <p>{getTodo.hasTodo}</p> */}
              </span>
              <div>
                <input
                  type="text"
                  value={newContent}
                  onChange={e => {
                    setNewContent(e.target.value);
                  }}
                />

                <button className="plus-list-bt" onClick={handleClickAddTodo}>
                  +
                </button>
              </div>
            </div>
            <div className="hr-center"></div>

            <div className="todo-main">
              <div
                style={{
                  // height: "500px",
                  // background: "red",
                  overflowX: "hidden",
                  overflowY: "auto",
                }}
              >
                {/* {getTodo.todos.map((item, idx) => {
                  return (
                    <TodoInput
                      key={idx}
                      item={item}
                      mode={false}
                      onDelete={() => {
                        handleDeleteTodo(item);
                      }}
                    />
                  );
                })} */}
                {todoList.map((item, idx) => {
                  return (
                    <TodoInput
                      iuserInfo={props.iuserInfo}
                      key={idx}
                      item={item}
                      mode={false}
                      onDelete={() => {
                        handleDeleteTodo(item);
                      }}
                    />
                  );
                })}
              </div>
            </div>
            {/* <ul className="todo-list">
              <div className="red-line"></div>
              <p>강아지 밥주기</p>
            </ul>
            <button className="delet-bt">
              <img src="./images/deleten.svg" />
            </button>

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

export default CalenPageNew;
