import { connect } from 'react-redux'
import React from 'react'

import ScheduleList from 'components/ScheduleList'

const mapDispatchToProps = {
}
function mapStateToProps(state) {
    return {
    };
}
class ScheduleListPage extends React.Component {
    render () {
        return (
            <ScheduleList></ScheduleList>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleListPage)
