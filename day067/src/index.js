import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
// 子组件
function ListItem(props) {
  const { name, price, info, del, id } = props;
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{info}</p>
      <button
        type="button"
        onClick={() => {
          del(id);
        }}
      >
        删除
      </button>
    </div>
  );
}
// 父组件
class App extends React.Component {
  state = {
    list: [
      {
        id: 1,
        name: "超级好吃的棒棒糖",
        price: 18.8,
        info: "开业大酬宾，全场8折",
      },
      {
        id: 2,
        name: "超级好吃的大鸡腿",
        price: 34.2,
        info: "开业大酬宾，全场8折",
      },
      {
        id: 3,
        name: "超级无敌的冰激凌",
        price: 14.2,
        info: "开业大酬宾，全场8折",
      },
    ],
  };
  del = (x) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== x),
    });
  };
  render() {
    return (
      <>
        {this.state.list.map((item) => (
          <ListItem key={item.id} {...item} del={this.del} />
        ))}
      </>
    );
  }
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
