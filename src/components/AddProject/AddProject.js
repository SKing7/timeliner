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
            desc: this.refs.projectDescInputNode.value
        });
    }
    render () {

        return (
            <form className="form-horizontal">
              <div className="form-group">
                <label className="col-sm-2 control-label">项目名</label>
                <div className="col-sm-4">
                  <input type="text" className="form-control" ref="projectInputNode" placeholder="Project Name"/>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">项目描述</label>
                <div className="col-sm-4">
                  <input type="text" className="form-control" ref="projectDescInputNode"/>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-4">
                  <button type="submit" className="btn btn-default" onClick={this.submitHandler.bind(this)}>提交</button>
                </div>
              </div>
            </form>
        )
    }
}

export default AddProject
