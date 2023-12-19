import styled from "@emotion/styled";

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
