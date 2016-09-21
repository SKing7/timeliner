import { connect } from 'react-redux'
import React from 'react'
import {Link} from 'react-router'

import ScheduleList from 'components/ScheduleList'
import {fetchListAction, fetchProjectInfoAction} from '../modules'

const mapDispatchToProps = {
  fetchListAction,
  fetchProjectInfoAction
}
function mapStateToProps (state) {
  return {
    items: state.Schedule.items,
    project: state.Schedule.project
  }
}
class ScheduleListPage extends React.Component {
  componentDidMount() {
    this.props.fetchProjectInfoAction({
      id: this.props.params.id
    })
  }
  render () {
    let id = this.props.params.id;
    return (
      <div>
        <Link to={`/schedule/graph/${id}`}>图表全览</Link>
        <Link to={`/schedule/add/${id}`} className='margin-left-2x'>增加排期</Link>
        <h2>项目名：{this.props.project ? this.props.project.name : ''}</h2>
        <ScheduleList {...this.props} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleListPage)
