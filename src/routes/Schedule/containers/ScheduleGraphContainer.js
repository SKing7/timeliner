import { connect } from 'react-redux'
import React from 'react'

import ScheduleGraph from 'components/ScheduleGraph'
import {fetchListAction} from '../modules'

const mapDispatchToProps = {
  fetchListAction
}
function mapStateToProps (state) {
  return {
    items: state.Schedule.items
  }
}
class ScheduleGraphPage extends React.Component {
  render () {
    return (
      <div>
        <ScheduleGraph {...this.props} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleGraphPage)
