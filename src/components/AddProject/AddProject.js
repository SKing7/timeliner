import React from 'react'
import classes from './AddProject.scss'

class AddProject extends React.Component {
    contextTypes: {
    }
    constructor(props, context){
        super(props, context);
    }
    submitHandler (e) {
        e.preventDefault();

        var addAction = this.props.addAction;
        var v = this.refs.projectInputNode.value;

        addAction({
            name: v,
            desc: ''
        });
    }
    render () {

        return (
          <div>
              <form className="form-inline">
                  <div className="form-group">
                      <label>项目名</label>
                      <input type="text" className="form-control margin-left-2x" placeholder="xxxx" ref="projectInputNode"/>
                  </div>
                  <button type="submit" className="btn btn-primary margin-left-1x" onClick={this.submitHandler.bind(this)}>提交</button>
              </form>
          </div>
          )
    }
}

export default AddProject
