import React, { useState } from "react";

const TodoInput = props => {
  const item = props.item;
  const [memo, setMemo] = useState(item.work);
  const [edit, setEdit] = useState(props.mode);
  const handleClickEdit = _gogo => {
    setEdit(_gogo);
  };
  const handleOnChangeMemo = e => {
    setMemo(e.target.value);
  };
  return (
    <ul className="todo-list">
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
            <button
              onClick={() => {
                handleClickEdit(true);
              }}
            >
              취소
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
            <button>
              <img src="./images/deleten.svg" />
            </button>
          </>
        )}
      </p>
    </ul>
  );
};

export default TodoInput;
