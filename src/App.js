import './App.css';
import React, { Component } from 'react';
// 引入头部组件
import Header from './Header';
// 列表
import List from './List'
// 尾部
import Footer from './Footer'
import axios from 'axios';
class App extends Component {
  // 创建容器
  myref = React.createRef();

  // 获取初始化数据
  state = {
    toList: []
  }
  // 创建生命周期钩子
  componentDidMount = () => {
    this.init();

  }
  // 将异步代码同步
  async init () {
    const res = await axios.get("http://localhost:3000/data.json");
    let { list } = res.data;
    this.setState({
      toList: list
    })
  }
  addToList = (HeaderTodos) => {
    // 获取start里的数据
    const { toList } = this.state
    this.setState({
      toList: [HeaderTodos, ...toList]
    })
  }
  // 选中展示
  updateTodo = (id, done) => {
    const { toList } = this.state
    const newtoList = toList.map(item => {
      if (item.id === id) {
        return { ...item, done: done }
      } else {
        return { ...item }
      }
    })
    this.setState({
      toList: newtoList
    })
  }
  // 删除展示
  deleteTodoList = (id) => {
    const { toList } = this.state
    const deletetoList = toList.filter(item => {
      return item.id !== id
    })
    this.setState({
      toList: deletetoList
    })
  }
  // 删除完成任务
  chieve = () => {
    const { toList } = this.state
    const chievetoList = toList.filter(item => {
      return !item.done
    })
    this.setState({
      toList: chievetoList
    })
  }
  handOnDragOver = (e) => {
    e.preventDefault();
    this.myref.current.classList.add("remboxchieve")
    console.log(this.myref)
  }
  render () {
    const { toList } = this.state;
    const doneList = toList.filter(item => {
      return item.done
    })
    return (
      <div className="App">
        <div className="box">
          <Header add={this.addToList} />
          <List toList={toList} updateTodo={this.updateTodo} deleteTodo={this.deleteTodoList} />
          <Footer toList={toList} chieve={this.chieve} />
        </div>
        <div className="rembox" onDragEnter={this.handOnDragOver} ref={this.myref}>
          <h2 style={{ textAlign: "center" }}>已完成展示</h2>
          <List toList={doneList} updateTodo={this.updateTodo} deleteTodo={this.deleteTodoList} />
        </div>
      </div>
    );
  }
}
export default App;
