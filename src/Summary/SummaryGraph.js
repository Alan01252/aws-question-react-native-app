import * as React from "react";
import Svg, {Circle, Rect, G, Line, Text, Path} from 'react-native-svg'
import {Card, CardItem, Container, Content, H1} from "native-base";

var d3 = require("d3");

class SummaryGraph extends React.Component {

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
            {axis: "Security", value: 64}
        ]];


        width = 700;
        height = 700;

        if (this.state.dimensions) {
            var {dimensions} = this.state
            var {width, height} = dimensions
        }


        var margin = {top: 25, right: 5, bottom: 10, left: 5};
        width = Math.min(700, width - 10);
        height = Math.min(width, height);

        console.log("width = " + width + " height = " + height);

        var cfg = {
            width: width,
            height: 111,
            margin: margin,
            maxValue: 100, //What is the value that the biggest circle will represent
            labelFactor: 1.5, 	//How much farther than the radius of the outer circle should the labels be placed
            levels: 3
        }


        console.log(cfg);
        console.log(d3);

        var allAxis = (data[0].map(function (i, j) {
            return i.axis
        }));
        var total = allAxis.length;
        var radius = Math.min(cfg.width / 2, cfg.height / 2);
        var Format = d3.format('.0%');
        var angleSlice = Math.PI * 2 / total;

        console.log("Angle slice" + angleSlice);

        var maxValue = Math.max(cfg.maxValue, d3.max(data, function (i) {
            return d3.max(i.map(function (o) {
                return o.value;
            }))
        }));


        console.log("Max Value" + maxValue);

        var offset = 0;
        var rScale = d3.scaleLinear()
            .range([0, radius])
            .domain([0, maxValue]);

        //The radial line function

        var radarLine = d3.radialLine()
            .curve(d3.curveCardinalClosed)
            .radius(function (d) {
                return rScale(d.value);
            })
            .angle(function (d, i) {
                return i * angleSlice - offset;
            });

        var line1 = radarLine(data[0]);

        console.log(Array(3).keys());

        var createAxisString = (axis, i) => {


            return axis.split(" ").map((text,j) => {

                console.log(text);


                return <Text key={"legend" + text + i}
                             textAnchor="middle"
                             dy="0.35em"
                             x={rScale(maxValue * cfg.labelFactor) * Math.cos(angleSlice * i - Math.PI / 2)}
                             y={(rScale(maxValue * cfg.labelFactor) * Math.sin(angleSlice * i - Math.PI / 2)) + (j*15)}
                >
                    {text}
                </Text>
            })

        };

        return <Container style={{height: 180}} onLayout={this.onLayout}>
            {
                this.state.dimensions
                    ? <Svg width={width} height={height}>
                    <G x={cfg.width / 2 + cfg.margin.left} y={cfg.height / 2 + cfg.margin.top}>
                        <G class="axisWrapper">

                            {Array.apply(null, Array(cfg.levels)).map(function (_, i) {
                                return <G key={"g-axis" + i}><Circle cx="0" cy="0" class="gridCircle"
                                                                     r={radius / cfg.levels * (i + 1)}

                                                                     fill="#CDCDCD" stroke="#CDCDCD" fillOpacity="0.1"/>
                                    <Text
                                        fontSize="5"
                                        dy="0.4em"
                                        x="4"
                                        y={-(radius / cfg.levels * (i + 1.2))}
                                        fill="#737373"
                                    >
                                        {Format(maxValue * ((i + 1) / cfg.levels) / 100)}
                                    </Text>
                                </G>
                            })}
                        </G>
                        {allAxis.map(function (axis, i) {
                            return <G key={"levels" + i} class="axis">
                                <Line key={"axis" + i} x1="0" y1="0" stroke="white" strokeWidth="2"
                                      x2={rScale(maxValue * 1.1) * Math.cos(angleSlice * i - Math.PI / 2)}
                                      y2={rScale(maxValue * 1.1) * Math.sin(angleSlice * i - Math.PI / 2)}
                                />
                                {createAxisString(axis, i)}

                            </G>
                        })}
                        <G class="radarArea">
                            <Path x="0" y="0" d={line1} strokeWidth="2" stroke="#5F9EA0"
                                  fill="none"/>
                        </G>
                    </G>
                </Svg> : undefined
            }
        </Container>

    }
}

export default SummaryGraph