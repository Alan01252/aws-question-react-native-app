import * as React from "react";
import {Text} from 'react-native'
import {Body, Card, CardItem, Container, Content, Grid, H1, H2, H3, Row} from "native-base";

import styles from './style';
import SummaryGraph from "./SummaryGraph";

var d3 = require("d3");

class Summary extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return <Container style={styles.container}>
            <Content>
                <Card>
                    <CardItem>
                        <H1>You scored x out of y</H1>
                    </CardItem>
                    <CardItem>
                        <H2>Breakdown</H2>
                    </CardItem>
                    <CardItem>
                        <SummaryGraph/>
                    </CardItem>
                    <CardItem>
                        <H2>Improvements</H2>
                    </CardItem>
                    <CardItem>
                        <Grid>
                            <Row>
                                <Text>Q: How do you scratch a monkey</Text>
                            </Row>
                            <Row>
                                <Text>A: I have no idea</Text>
                            </Row>
                        </Grid>
                    </CardItem>
                    <CardItem>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    }
}

export default Summary