import { connect } from 'react-redux'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import AddProject from 'components/AddProject'
import { addAction } from '../modules/AddProject'

const mapDispatchToProps = {
    addAction
}
export default connect(null, mapDispatchToProps)(AddProject)
