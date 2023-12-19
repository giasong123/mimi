const KeyWordChart = () => {
  return (
    <div className="feel-keywordbox">
      <div className="keyword-title">
        <p>이번주 키워드 차트</p>
      </div>
      <div className="keyword-inner">
        <ul>
          <li>
            <img src="/images/sun.svg" alt=""></img>
            <img src="/images/sunbar.svg" alt=""></img>
            <p>2일</p>
          </li>

          <div className="feeling">
            <p>긍정</p>
          </div>

          <li className="cloud">
            <img src="/images/cloud.svg" alt=""></img>
            <img src="/images/cloudbar.svg" alt=""></img>
            <p>3일</p>
          </li>
          <div className="feeling">
            <p>보통</p>
          </div>

          <li className="rain">
            <img src="/images/rain.svg" alt=""></img>
            <img src="/images/rainbar.svg" alt=""></img>
            <p>2일</p>
          </li>
          <div className="feeling">
            <p>부정</p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default KeyWordChart;
