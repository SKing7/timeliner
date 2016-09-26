import React from 'react'
import Calendar from 'components/Calendar'

class AddSchedule extends React.Component {
  contextTypes: {
  }
  constructor(props, context){
    super(props, context);
    this.subformDate = {};
  }
  submitHandler (e) {
    e.preventDefault();
    let addAction = this.props.addAction;
    let _this = this;
    let subformDate = this.subformDate;

    addAction({
      relProjectId: this.props.params.id,
      name: this.refs.nameNode.value,
      content: this.refs.contentNode.value,
      workerId: 1,
      startDate: subformDate.startDate && subformDate.startDate.toDate().getTime(),
      endDate: subformDate.endDate && subformDate.endDate.toDate().getTime(),
    }, {
      relProjectId: _this.props.params.id
    });
  }
  updateStartDatetime(m) {
    this.subformDate.startDate = m;
  }
  updateEndDatetime(m) {
    this.subformDate.endDate = m;
  }
  render () {

    return (
      <div>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-2 control-label">排期名称</label>
            <div className="col-sm-5">
              <input type="text" className="form-control" ref="nameNode" placeholder="Name"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">工作内容</label>
            <div className="col-sm-5">
              <input type="text" className="form-control" ref="contentNode"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">开始时间</label>
            <div className="col-sm-5">
              <Calendar onChange={this.updateStartDatetime.bind(this)}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">结束时间</label>
            <div className="col-sm-5">
              <Calendar onChange={this.updateEndDatetime.bind(this)}/>
            </div>
          </div>
          <div className="form-group">
          <label className="col-sm-2 control-label">开发者</label>
            <div className="col-sm-5">
              <input type="text" className="form-control" ref="workerNode"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">职位</label>
            <div className="col-sm-5">
              <input type="text" className="form-control" ref="positionNode"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-5">
              <button type="submit" className="btn btn-default" onClick={this.submitHandler.bind(this)}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default AddSchedule
