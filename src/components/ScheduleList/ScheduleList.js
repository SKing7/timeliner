import React from 'react'
import { Link } from 'react-router'
import m from 'moment'


class ScheduleList extends React.Component {
    contextTypes: {
    }
    constructor(props, context){
        super(props, context);
        this.props.fetchListAction();
    }
    render () {
        var listData = this.props.items || [];
        return (
            <div>
                <h2>{this.props.projectName}</h2>
                <table className="table table-bordered margin-top-4x">
                    <thead>
                        <tr>
                            <th>排期名称</th>
                            <th>内容</th>
                            <th>开始时间</th>
                            <th>结束时间</th>
                            <th>负责人</th>
                            <th>职位</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        listData.map(function (item, idx) {
                            const itemData = item || {};
                            return (
                                <tr key={item.id}>
                                    <td>{itemData.name}</td>
                                    <td>{itemData.content}</td>
                                    <td>{m(itemData.startDate).format('YYYY-MM-DD HH:MM:ss')}</td>
                                    <td>{m(itemData.endDate).format('YYYY-MM-DD HH:MM:ss')}</td>
                                    <td>{itemData.worker}</td>
                                    <td>{itemData.position}</td>
                                </tr>
                            );
                        })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ScheduleList
