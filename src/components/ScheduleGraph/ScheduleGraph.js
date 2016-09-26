
import React from 'react'
import { Link } from 'react-router'
import {Layer, Rect, Stage, Group, Arrow} from 'react-konva';
import m from 'moment'
import color from 'color-generator';


class ScheduleGraph extends React.Component {
  contextTypes: {
  }
  constructor(props, context){
    super(props, context);
  }
  componentDidMount() {
    let relProjectId = +this.props.params.id;
    this.props.fetchListAction({relProjectId})
  }
  maxSpanWidth(sortedData) {
    var maxWidth = 0;
    if (!sortedData.length) return maxWidth;

    let baseX = sortedData[0].startDate;
    sortedData.forEach(function (item) {
      maxWidth = Math.max(maxWidth, item.endDate - baseX);
    });
    return maxWidth;
  }
  minStartDate(sortedData) {
    var minDate ;
    if (!sortedData.length) return minDate;

    minDate = sortedData[0].startDate;
    return minDate;
  }
  sortByStartDate(data) {
    data.sort(function (i1, i2) {
      return i1.startDate - i2.startDate;
    });
  }
  mouseoverHandler(e) {
    var ndTarget = e.target;
    var data = ndTarget.attrs.data;
  }
  render () {
    let listData = this.props.items || [];
    this.sortByStartDate(listData);
    debugger
    let maxWidth = this.maxSpanWidth(listData)
    let minStartDate = this.minStartDate(listData)
    let sizePerTime = 1000 / maxWidth;
    let _this = this;

    const WIDTH = 1000;
    const HEIGHT = 600;
    const COORD_OFFSET = 50;
    const POINTER_WIDTH = 6;
    const VERTICAL_SPACE = 5;
    const STROKE_HEIGHT = 30;

    return (
      <Stage width={WIDTH} height={HEIGHT}>
        <Layer>
          <Arrow x={COORD_OFFSET} y={550} points={[0, 0, 900,0]} fill={"#bbb"} stroke={"#bbb"}  pointerLength={6} pointerWidth={POINTER_WIDTH} strokeWidth={2}/>
          <Arrow x={COORD_OFFSET} y={50} points={[0, 500, 0, 0]} fill={"#bbb"} stroke={"#bbb"}  pointerLength={6} pointerWidth={POINTER_WIDTH} strokeWidth={2}/>
          {
            listData.map(function (item, i) {
              let X = (item.startDate - minStartDate) * sizePerTime + COORD_OFFSET + POINTER_WIDTH * 2;
              let Y = i *  (STROKE_HEIGHT + VERTICAL_SPACE) + COORD_OFFSET + POINTER_WIDTH * 2;
              return (

                <Rect onmouseover={_this.mouseoverHandler} data={item} key={item.startDate + Math.random()} x={X}
                  y={ Y } width={(item.endDate - item.startDate) * sizePerTime} height={STROKE_HEIGHT}
                  fill={color().hexString()} strokeWidth={0}/>
              );
            })
          }
        </Layer>
      </Stage>
    );
  }
}

export default ScheduleGraph
