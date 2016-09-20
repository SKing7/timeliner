import { connect } from 'react-redux'
import React from 'react'
import AddSchedule from 'components/AddSchedule'
import ScheduleList from './ScheduleListContainer'
import { fetchListAction } from '../modules'


const mapDispatchToProps = {
    fetchListAction
}
function mapStateToProps(state) {
    return {
        items: state.Schedule.items
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleIndexPage)
