import * as React from "react";
import Svg, {Circle, Rect, G, Line, Text, Path} from 'react-native-svg'
import {View} from "react-native";

var d3 = require("d3");

class Summary extends React.Component {

    constructor(props) {
        super(props);

        this.state = {dimensions: undefined}
    }

    onLayout = event => {
        console.log("Setting dimensions");
        if (this.state.dimensions) return // layout was already called
        let {width, height} = event.nativeEvent.layout
        console.log(width, height);
        this.setState({dimensions: {width, height}})
    }


    render() {

        let data = [[
            {axis: "Compute", value: 10},
            {axis: "Database", value: 74},
            {axis: "Networking", value: 20},
            {axis: "Migration", value: 50},
            {axis: "Developer Tools", value: 74},
            {axis: "Security, Identity & Compliance", value: 64}
        ]];


        if (this.state.dimensions) {
            var {dimensions} = this.state
            var {width, height} = dimensions
            height = 400
        }


        var cfg = {
            width: width,
            height: height,
            maxValue: 0.5, //What is the value that the biggest circle will represent
            labelFactor: 1.25, 	//How much farther than the radius of the outer circle should the labels be placed
        }

        console.log(cfg);
        console.log(d3);

        var allAxis = (data[0].map(function (i, j) {
            return i.axis
        }));
        var total = allAxis.length;
        var radius = Math.min(cfg.width / 2, cfg.height / 2);
        var format = d3.format('%');
        var angleSlice = Math.PI * 2 / total;

        console.log("Angle slice" + angleSlice);

        var maxValue = Math.max(cfg.maxValue, d3.max(data, function (i) {
            return d3.max(i.map(function (o) {
                return o.value;
            }))
        }));


        var newX = -85;
        var newY = 20;
        var baselineY = 50;
        var chartWidth = width;
        var chartHeight = height;
        var offset = 0;


        var rScale = d3.scaleLinear()
            .range([0, radius])
            .domain([0, maxValue]);

        //The radial line function

        var radarLine = d3.radialLine()
            .curve(d3.curveCardinalClosed)
            .radius(function(d) { return rScale(d.value); })
            .angle(function(d,i) {	return i*angleSlice - offset; });

        var line1 = radarLine(data[0]);
        console.log(line1);



        return <View key="chart" style={{display: "flex", flex: 1}} onLayout={this.onLayout}>

            {
                this.state.dimensions
                    ? <Svg width={width} height={height}>
                    <G x={cfg.width / 2} y={cfg.height / 2}>
                        <G class="axisWrapper">
                            <Circle cx="0" cy="0" class="gridCircle" r={radius}
                                    fill="#CDCDCD" stroke="#CDCDCD" fillOpacity="0.1"
                            >
                            </Circle>
                        </G>
                        {allAxis.map(function (axis, i) {
                            return <G key={"asdad" + i} class="axis">
                                <Line key={"axis" + i} x1="0" y1="0" stroke="white" strokeWidth="2"
                                      x2={rScale(maxValue * 1.1) * Math.cos(angleSlice * i - Math.PI / 2)}
                                      y2={rScale(maxValue * 1.1) * Math.sin(angleSlice * i - Math.PI / 2)}
                                />
                                <Text key={"legend" + i}
                                      textAnchor="middle"
                                      dy="0.35em"
                                      x={rScale(maxValue * 1.1) * Math.cos(angleSlice * i - Math.PI / 2)}
                                      y={rScale(maxValue * 1.1) * Math.sin(angleSlice * i - Math.PI / 2)}
                                >
                                    {axis}
                                </Text>
                            </G>
                        })}
                        <G class="radarArea">
                            <Path x="0" y="0" d={line1} strokeWidth="5" stroke="red"
                                  fill="none"/>
                        </G>
                    </G>
                </Svg> : undefined
            }
        </View>


    }
}

export default Summary