import "./index.css";
import React from "react";
import { v4 as uuid } from "uuid";
import avatar from "./images/avatar.png";
/**
 * 时间戳转日期
 * @param {number} timestamp 时间戳
 * @returns {string} 2022-12-9 19:00:34
 */
function timestampToTime(timestamp) {
  var date = new Date(timestamp);
  var Y = date.getFullYear() + "-";
  var M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  var D = date.getDate().toString().padStart(2, "0") + " ";
  var h = date.getHours().toString().padStart(2, "0") + ":";
  var m = date.getMinutes().toString().padStart(2, "0") + ":";
  var s = date.getSeconds().toString().padStart(2, "0");
  return Y + M + D + h + m + s;
}

class App extends React.Component {
  // 依赖的数据
  state = {
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
    comment: "",
  };
  handleLi = (x) => {
    this.setState({
      active: x,
    });
  };
  textAChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };
  updateComList = () => {
    // this.state.comment
    this.setState({
      list: [
        ...this.state.list,
        {
          id: uuid(),
          author: "MAX魔术师",
          comment: this.state.comment,
          time: Date.now(),
          attitude: 0,
        },
      ],
      comment: "",
    });
  };
  likeds = (items) => {
    let att;
    if (items.attitude === 1) {
      att = 0;
    } else {
      att = 1;
    }
    this.changeLH(items, att);
  };
  hateds = (items) => {
    let att;
    if (items.attitude === -1) {
      att = 0;
    } else {
      att = -1;
    }
    this.changeLH(items, att);
  };
  changeLH = (items, att) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === items.id) {
          return {
            ...item,
            attitude: att,
          };
        } else {
          return item;
        }
      }),
    });
  };
  deleteCom = (items) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== items.id),
    });
  };
  render() {
    return (
      <div className="App">
        <div className="comment-container">
          {/* 评论数 */}
          <div className="comment-head">
            <span>{this.state.list.length} 评论</span>
          </div>
          {/* 排序 */}
          <div className="tabs-order">
            <ul className="sort-container">
              {this.state.tabs.map((item) => (
                <li
                  key={item.id}
                  onClick={() => this.handleLi(item.type)}
                  className={item.type === this.state.active ? "on" : ""}
                >
                  按{item.name}排序
                </li>
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
                onChange={this.textAChange}
                value={this.state.comment}
              />
              <button className="comment-submit" onClick={this.updateComList}>
                发表评论
              </button>
            </div>
            <div className="comment-emoji">
              <i className="face"></i>
              <span className="text">表情</span>
            </div>
          </div>

          {/* 评论列表 */}
          <div className="comment-list">
            {this.state.list.map((item) => (
              <div key={item.id} className="list-item">
                <div className="user-face">
                  <img className="user-head" src={avatar} alt="" />
                </div>
                <div className="comment">
                  <div className="user">{item.author}</div>
                  <p className="text">{item.comment}</p>
                  <div className="info">
                    <span className="time">{timestampToTime(item.time)}</span>
                    {/* 动态类名 */}
                    <span
                      className={item.attitude === 1 ? "like liked" : "like"}
                      onClick={() => this.likeds(item)}
                    >
                      <i className="icon" />
                    </span>
                    <span
                      className={item.attitude === -1 ? "hate hated" : "hate"}
                      onClick={() => this.hateds(item)}
                    >
                      <i className="icon" />
                    </span>
                    <span
                      className="reply btn-hover"
                      onClick={() => this.deleteCom(item)}
                    >
                      删除
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
