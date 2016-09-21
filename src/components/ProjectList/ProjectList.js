import React from 'react'
import { Link } from 'react-router'
import m from 'moment'


class AddProject extends React.Component {
  contextTypes: {
  }
  constructor(props, context){
    super(props, context);
    this.props.projectListAction();
  }
  render () {
    var listData = this.props.items || [];
    return (
      <table className="table table-bordered margin-top-4x">
        <thead>
          <tr>
            <th>项目名</th>
            <th>描述</th>
            <th>更新时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {
          listData.map(function (item, idx) {
            const itemData = item || {};
            return (
              <tr key={itemData.id}>
                <td>{itemData.name}</td>
                <td>{itemData.desc}</td>
                <td>{m(itemData.updatedTimestamp).format('YYYY-MM-DD HH:mm:ss')}</td>
                <td><Link to={`/schedule/list/${itemData.id}`}>查看排期</Link></td>
              </tr>
            );
          })
          }
        </tbody>
      </table>
    )
  }
}

export default AddProject
