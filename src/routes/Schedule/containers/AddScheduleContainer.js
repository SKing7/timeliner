import { connect } from 'react-redux'
import React from 'react'
import AddSchedule from 'components/AddSchedule'
import ScheduleList from 'components/ScheduleList'
import { addAction, fetchListAction, fetchProjectInfoAction} from '../modules'


const mapDispatchToProps = {
  addAction,
  fetchListAction,
  fetchProjectInfoAction
}
function mapStateToProps(state) {
  return {
    items: state.Schedule.items,
    project: state.Schedule.project
  };
}
class AddSchedulePage extends React.Component {
  componentDidMount() {
    this.props.fetchProjectInfoAction({
      id: this.props.params.id
    });
  }
  render () {
    return (
      <div>
        <h2>项目名：{this.props.project ? this.props.project.name : ''}</h2>
        <AddSchedule {...this.props}></AddSchedule>
        <ScheduleList {...this.props}></ScheduleList>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSchedulePage)
