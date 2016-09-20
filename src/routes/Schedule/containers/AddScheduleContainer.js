import { connect } from 'react-redux'
import React from 'react'
import AddSchedule from 'components/AddSchedule'
import ScheduleList from 'components/ScheduleList'
import { addAction, fetchListAction } from '../modules'


const mapDispatchToProps = {
    addAction,
    fetchListAction
}
function mapStateToProps(state) {
    return {
        items: state.Schedule.items
    };
}
class AddSchedulePage extends React.Component {
    render () {
        return (
            <div>
                <AddSchedule addAction={this.props.addAction}></AddSchedule>
                <ScheduleList items={this.props.items} fetchListAction={this.props.fetchListAction}></ScheduleList>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSchedulePage)
