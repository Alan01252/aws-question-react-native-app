import {Button, Card, CardItem, Col, Grid, Text} from "native-base";
import * as React from "react";


class Explanation extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        const {correctAnswer, chosenAnswer, explanation} = this.props;

        // TODO Turn card item border green if correct / red if not quite

        return <CardItem>
            <Grid>
                <Col size={1}>
                    <Text>{explanation}</Text>
                </Col>
            </Grid>
        </CardItem>


    }
}

export default Explanation