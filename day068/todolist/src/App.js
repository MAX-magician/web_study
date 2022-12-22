import { Input, Table, Space, Popconfirm } from "antd";
import React from "react";
import "./App.css";
import axios from "axios";

const { Search } = Input;

class App extends React.Component {
  state = {
    list: [],
    keyword: "",
    columns: [
      {
        title: "任务编号",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "任务名称",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "任务描述",
        dataIndex: "des",
        key: "des",
      },
      {
        title: "操作",
        dataIndex: "do",
        key: "do",
        render: (text, record) => (
          <Space size="middle">
            <Popconfirm
              title="确定要删除吗?"
              onConfirm={() => this.handleDelete(record.id)}
            >
              <a href="#">删除</a>
            </Popconfirm>
          </Space>
        ),
      },
    ],
  };

  // 搜索
  inputChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };
  onSearch = async (x) => {
    await axios
      .get("http://localhost:3001/data/?q=" + x)
      .then((res) => {
        this.setState({
          list: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 删除
  handleDelete = async (x) => {
    await axios
      .delete("http://localhost:3001/data/" + x)
      .then(() => {
        this.loadList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 加载列表
  componentDidMount() {
    this.loadList();
  }

  loadList = async () => {
    await axios
      .get("http://localhost:3001/data")
      .then((res) => {
        this.setState({
          list: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="search-box">
          <Search
            placeholder="请输入关键词"
            allowClear
            enterButton="搜索"
            size="large"
            onChange={this.inputChange}
            value={this.state.keyword}
            onSearch={this.onSearch}
          />
        </div>
        <Table
          bordered
          rowKey={"id"}
          dataSource={this.state.list}
          columns={this.state.columns}
          pagination={false}
        />
      </div>
    );
  }
}

export default App;
