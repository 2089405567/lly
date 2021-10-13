import React, { Component } from 'react';

class index extends Component {

  Inpalter = (id) => {
    return (event) => {
      // 获取当前选中状态
      this.props.updateTodo(id, event.target.checked);
    }
  }
  deleteTodoItem = (id) => {
    if (window.confirm("您确定要删除吗？")) {
      this.props.deleteTodo(id)
    }

  }
  DragStart = (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    // event.preventDefault();
  }
  render () {
    // 获取list中的值
    const { id, name, done } = this.props
    return (
      <>
        {/* 设置元素是否拖拽 */}
        <tr draggable='true' onDragStart={this.DragStart}>
          <td>
            <input type="checkbox" defaultChecked={done} onChange={this.Inpalter(id)} />
          </td>
          <td>{name}</td>
          <td>
            {
              done ?
                <span className="badge rounded-pill bg-success">Success</span> :
                <span className="badge rounded-pill bg-danger">unfinished</span>
            }

          </td>
          <td>
            <button type="button" className="btn btn-warning btn-sm" onClick={() => { this.deleteTodoItem(id) }}>删除</button>
          </td>
        </tr>
      </>
    );
  }
}

export default index;