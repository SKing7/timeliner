import { connect } from 'react-redux'
import React from 'react'
import {Link} from 'react-router'

import ScheduleList from 'components/ScheduleList'
import {fetchListAction} from '../modules'

const mapDispatchToProps = {
    fetchListAction
}
function mapStateToProps(state) {
    return {
        items: state.Schedule.items
    };
}
class ScheduleListPage extends React.Component {
    render () {
        return (
            <div>
                <Link to="/schedule/graph">图表全览</Link>
                <Link to="/schedule/add" className="margin-left-2x">增加排期</Link>
                <ScheduleList {...this.props}></ScheduleList>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleListPage)
