
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
    maxSpanWidth(sortedData) {
        var maxWidth = 0;
        const baseX = sortedData.items[0].startDate;
        sortedData.items.forEach(function (item) {
            maxWidth = Math.max(maxWidth, item.endDate - baseX);
        });
        return maxWidth;
    }
    minStartDate(sortedData) {
        var minDate ;
        minDate = sortedData.items[0].startDate;
        return minDate;
    }
    sortByStartDate(data) {
        data.items = data.items || [];
        data.items.sort(function (i1, i2) {
            return i1.startDate - i2.startDate;
        });
    }
    mouseoverHandler(e) {
        var ndTarget = e.target;
        var data = ndTarget.attrs.data;
    }
    render () {
        let listData = this.props.items || [];
        let data = {
            name: '排期1', 
            items: [{
                worker: 'liuzhe',
                position: 'fe',
                startDate: new Date('2016-07-01').getTime(),
                endDate: new Date('2016-08-01').getTime(),
            }, {
                worker: 'liuzhe',
                position: 'fe',
                startDate: new Date('2016-07-11').getTime(),
                endDate: new Date('2016-08-01').getTime(),
            }, {
                worker: 'liuzhe',
                position: 'fe',
                startDate: new Date('2016-07-11').getTime(),
                endDate: new Date('2016-08-21').getTime(),
            }]
        };
        this.sortByStartDate(data);
        let maxWidth = this.maxSpanWidth(data)
        let minStartDate = this.minStartDate(data)
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
                        data.items.map(function (item, i) {
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
