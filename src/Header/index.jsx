import React, { Component } from 'react';
import './index.css'
class index extends Component {
  handlekeyUp = (event) => {
    const { keyCode, target: { value } } = event

    if (value.trim() === "") {
      alert("输入框不能为空")
      return
    }
    if (keyCode === 13) {
      // 调用父组件的函数
      const toObj = {
        id: Date.now,
        name: value,
        done: false
      }
      this.props.add(toObj);
    }
  }
  render () {
    return (
      <div className="header">
        <header>
          <input onKeyUp={this.handlekeyUp} type="text" id="inputPassword5" className="form-control heaInp" aria-describedby="passwordHelpBlock" placeholder="请输入,确定按回车" />
        </header>
      </div>
    );
  }
}

export default index;