import {Button, Card, CardItem, Col, Grid, Text} from "native-base";
import * as React from "react";


class Explanation extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return <CardItem>
            <Grid>
                <Col size={1}>
                    <Text>Some explanation</Text>
                </Col>
            </Grid>
        </CardItem>


    }
}

export default Explanation