import {Button, Card, CardItem, Col, Grid, Text} from "native-base";
import * as React from "react";


class Summary extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return <CardItem>
            <Grid>
                <Col size={1}>
                    <Text>Some summary stuff here</Text>
                </Col>
            </Grid>
        </CardItem>


    }
}

export default Summary