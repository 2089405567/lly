import React, { Component } from 'react';
import './index.css'
class index extends Component {
  remaChieve = () => {
    this.props.chieve();
  }
  render () {
    const { toList } = this.props
    const getconut = toList.filter((collection) => {
      return collection.done
    }).length

    return (
      <div className='footer'>
        <footer>
          <div className="myrow">
            <div className="col">
              <label>
                <input type="checkbox" checked={getconut === toList.length ? true : false} />
              </label>
            </div>
            <div className="col" >
              <span>已完成
                {
                  getconut
                }
                /全部{toList.length}</span>
            </div>
            <div className="col" >
              <button className="btn btn-danger" onClick={this.remaChieve}>删除已完成任务</button>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default index;