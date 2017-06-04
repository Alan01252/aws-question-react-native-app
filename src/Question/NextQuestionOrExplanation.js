import {Button, Card, CardItem, Col, Grid, Text} from "native-base";
import * as React from "react";
import styles from "./style";


class Explanation extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {


        const {currentExplanation, currentQuestion, onNextExplanationClick, onNextQuestionClick} = this.props;


        if (currentExplanation == currentQuestion) {
            return <CardItem>
                <Grid>
                    <Col size={1}>
                        <Button primary style={styles.rightButton} onPress={() => onNextQuestionClick()}>
                            <Text style={styles.text}>Next</Text>
                        </Button>
                    </Col>
                </Grid>
            </CardItem>

        }
        return <CardItem>
            <Grid>
                <Col size={1}>
                    <Button primary style={styles.rightButton} onPress={() => onNextExplanationClick()}>
                        <Text style={styles.text}>Next</Text>
                    </Button>
                </Col>
            </Grid>
        </CardItem>


    }
}

export default Explanation