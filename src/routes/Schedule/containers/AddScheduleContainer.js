import { connect } from 'react-redux'
import React from 'react'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */


const mapDispatchToProps = {
}
function mapStateToProps(state) {
    return {
    };
}
class AddSchedulePage extends React.Component {
    render () {
        return (
            <div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSchedulePage)
