import {Button, Card, CardItem, Col, Grid, Text} from "native-base";
import styles from './style';
import * as React from "react";


class Answer extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        const {answer, chosenAnswer, questionHash, onAnswerClick} = this.props;

        return <CardItem>
            <Grid>
                <Col size={1}>
                    <Button dark outline bordered full
                            style={chosenAnswer == answer.id ? styles.chosenAnswer : styles.questionButton}
                            onPress={() => onAnswerClick(questionHash, answer.id)}
                    >
                        <Text>{answer.text}</Text>
                    </Button>
                </Col>
            </Grid>
        </CardItem>


    }
}

export default Answer