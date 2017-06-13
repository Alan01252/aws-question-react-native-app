import {Button, Card, CardItem, Col, Grid, Text} from "native-base";
import * as React from "react";
import styles from './style';

class Explanation extends React.Component {

    constructor(props) {
        super(props);
    }


    showCorrect() {

        const {correctAnswer, chosenAnswer} = this.props;

        if (correctAnswer == chosenAnswer) {
            return style = ''
        }
    }

    render() {

        const {correctAnswer, chosenAnswer, explanation} = this.props;

        // TODO Turn card item border green if correct / red if not quite

        return <CardItem>
            <Grid style={correctAnswer == chosenAnswer ? styles.correctAnswer : styles.wrongAnswer}>
                <Col size={1}>
                    <Text>{explanation}</Text>
                </Col>
            </Grid>
        </CardItem>


    }
}

export default Explanation