import { connect } from 'react-redux'
import React from 'react'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import AddProject from 'components/AddProject'
import ProjectList from 'components/ProjectList'
//import ProjectList from 'components/ProjectList'
import { addAction, projectListAction } from '../modules/AddProject'

const mapDispatchToProps = {
    addAction,
    projectListAction,
}
function mapStateToProps(state) {
    return {
        items: state.addProject.items
    };
}
class AddProjectPage extends React.Component {
    render () {
        return (
            <div>
                <AddProject addAction={this.props.addAction}/>
                <ProjectList items={this.props.items} projectListAction={this.props.projectListAction} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProjectPage)
