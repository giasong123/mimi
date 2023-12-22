import styled from "@emotion/styled";

export const TodoRight = styled.div`
  width: 50%;
  min-height: 960px;
  display: flex;
  overflow-y: hidden;

  .todo-inner {
    position: relative;
    display: block;
    width: 80%;
    min-height: 960px;
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
    /* height: 130px; */

    background-color: beige;
  }
  .plus-list-bt {
    border: none;
    /* border: solid 1px; */
    background: transparent;
    cursor: pointer;
    font-weight: 600;
    font-size: 40px;
  }
  .print-emo {
    display: flex;
    padding-top: 20px;
    gap: 10px;
    align-items: center;
    padding-top: 30px;
  }

  .blue-line {
    width: 4px;
    height: 31px;
    background-color: #0118e3;
  }
  .print-emo img {
    width: 30px;
    height: 30px;
  }
  .print-emo p {
    font-size: 20px;
  }
  .emt-line {
    height: 20px;
    width: 2px;
    background-color: #000;
  }
  .hr-center {
    width: 100%;
    height: 3px;
    background-color: #0118e3;
    margin: auto;
    margin-top: 10px;
  }

  .todo-date {
    padding-top: 20px;
    display: flex;
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    justify-content: space-between;
    align-items: center;
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

  .delet-bt {
    border: none;
    /* border: solid 1px; */
    background: transparent;
    cursor: pointer;
  }

  .delet-bt button:hover {
    background-image: url("./images/deleteb.svg");
  }

  .red-line {
    width: 4px;
    height: 31px;
    background-color: #0118e3;
  }
`;
