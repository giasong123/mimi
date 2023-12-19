import styled from "@emotion/styled";

export const TodoRight = styled.div`
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
