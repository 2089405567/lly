import React, { Component } from 'react';
import './index.css'
// item组价
import Item from '../Item'
class index extends Component {
  render () {
    const { toList, updateTodo, deleteTodo } = this.props
    return (
      <div className="list">
        <ul>
          <table className="table table-hover">
            <caption>拖拽过去完成该任务</caption>
            <thead>
              <tr>
                <th>选择</th>
                <th>任务</th>
                <th>已完成</th>
                <th>删除</th>
              </tr>
            </thead>
            <tbody>
              {
                toList.map((k, v) => {
                  return <Item key={k.id} {...k} updateTodo={updateTodo} deleteTodo={deleteTodo} />
                })
              }
            </tbody>
          </table>

        </ul>
      </div>
    );
  }
}

export default index;