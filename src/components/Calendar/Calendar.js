import React from 'react';
import { render } from 'react-dom';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css'
import m from 'moment'

class Calendar extends React.Component {
  contextTypes: {
  }
  constructor(props, context){
    super(props, context);
  }
  render() {
    var props = this.props;
    var config = {
      dateFormat: 'YYYY-MM-DD',
      timeFormat: false,
      closeOnSelect: true,
      ...props
    }

    return <Datetime {...config}/>
  }
}
export default Calendar
