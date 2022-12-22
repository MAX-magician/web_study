import "./index.css";
import avatar from "./images/avatar.png";
// 依赖的数据
const state = {
  // hot: 热度排序  time: 时间排序
  tabs: [
    {
      id: 1,
      name: "热度",
      type: "hot",
    },
    {
      id: 2,
      name: "时间",
      type: "time",
    },
  ],
  active: "hot",
  list: [
    {
      id: 1,
      author: "刘德华",
      comment: "给我一杯忘情水",
      time: 1633828140000,
      // 1: 点赞 0：无态度 -1:踩
      attitude: 1,
    },
    {
      id: 2,
      author: "周杰伦",
      comment: "哎哟，不错哦",
      time: 1633914540000,
      // 1: 点赞 0：无态度 -1:踩
      attitude: 0,
    },
    {
      id: 3,
      author: "五月天",
      comment: "不打扰，是我的温柔",
      time: 1633918140000,
      // 1: 点赞 0：无态度 -1:踩
      attitude: -1,
    },
  ],
};
function timeSet(times) {
	const tt = new Date(times);
	const year = tt.getFullYear().toString();
	const month = tt.getMonth().toString().padStart(2, "0");
	const day = tt.getDay().toString().padStart(2, "0");
	const hour = tt.getHours().toString().padStart(2, "0");
	const minute = tt.getMinutes().toString().padStart(2, "0");
	const second = tt.getSeconds().toString().padStart(2, "0");
	return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}
function App() {
  return (
    <div className="App">
      <div className="comment-container">
        {/* 评论数 */}
        <div className="comment-head">
          <span>5 评论</span>
        </div>
        {/* 排序 */}
        <div className="tabs-order">
          <ul className="sort-container">
            {state.tabs.map(item => (
				<li className={state.active === item.type ? "on" : ""} key={item.id}>按{item.name}排序</li>
			))}
          </ul>
        </div>

        {/* 添加评论 */}
        <div className="comment-send">
          <div className="user-face">
            <img className="user-head" src={avatar} alt="" />
          </div>
          <div className="textarea-container">
            <textarea
              cols="80"
              rows="5"
              placeholder="发条友善的评论"
              className="ipt-txt"
            />
            <button className="comment-submit">发表评论</button>
          </div>
          <div className="comment-emoji">
            <i className="face"></i>
            <span className="text">表情</span>
          </div>
        </div>

        {/* 评论列表 */}
        {state.list.map((item) => (
            <div className="comment-list" key={item.id}>
              <div className="list-item">
                <div className="user-face">
                  <img className="user-head" src={avatar} alt="" />
                </div>
                <div className="comment">
                  <div className="user">{item.author}</div>
                  <p className="text">{item.comment}</p>
                  <div className="info">
                    <span className="time">{timeSet(item.time)}</span>
                    <span className={item.attitude === 1 ? "like liked" : "like"}>
                      <i className="icon" />
                    </span>
                    <span className={item.attitude === -1 ? "hate hated" : "hate"}>
                      <i className="icon" />
                    </span>
                    <span className="reply btn-hover">删除</span>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default App;
