import React, { useState } from "react";
import "../../styles/calen/todostyle";
import styled from "@emotion/styled";
import { patchTodo } from "../../api/todo/apitodo";

const TodoInput = props => {
  const item = props.item;
  console.log(item);
  const [memo, setMemo] = useState(item.todoContent);
  const [edit, setEdit] = useState(props.mode);

  const handleClickEdit = _수정완료 => {
    // 수정 내용 완료
    const obj = {
      iuser: 1,
      itodo: item.itodo,
      todoContent: memo,
    };
    patchTodo(obj);
    // 수정완료
    setEdit(_수정완료);
  };

  const handleOnChangeMemo = e => {
    setMemo(e.target.value);
  };

  const handelDelete = () => {
    if (props.onDelete) {
      // onDelete 함수를 호출하여 아이템 삭제
      props.onDelete(item.itodo); // 여기서 item.id는 삭제할 항목의 고유 식별자일 것입니다.
    }
  };

  return (
    <div className="todo-list">
      <div className="red-line"></div>
      <p>
        {edit ? (
          <>
            <input
              type="text"
              value={memo}
              onChange={e => {
                handleOnChangeMemo(e);
              }}
            />
            <button
              onClick={() => {
                handleClickEdit(false);
              }}
            >
              완료
            </button>
          </>
        ) : (
          <>
            <span
              onClick={() => {
                handleClickEdit(true);
              }}
            >
              {memo}
            </span>
            <button
              onClick={() => {
                handelDelete();
              }}
              className="delet-bt"
              style={{
                cursor: "pointer",
              }}
            >
              <img src="/images/deleten.svg" alt="Delete" />
            </button>
          </>
        )}
      </p>
    </div>
  );
};

export default TodoInput;
