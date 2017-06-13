import * as React from "react";
import {Text} from 'react-native'
import {Body, Card, CardItem, Container, Content, Grid, H1, H2, H3, Row} from "native-base";
import styles from './style';
import SummaryGraph from "./SummaryGraph";
import {connect} from 'react-redux';

var d3 = require("d3");

class Summary extends React.Component {

    constructor(props) {
        super(props);
    }

    getCorrectAnswers() {
        const {questions} = this.props;

        return questions.reduce((acc, item) => {

            if (item.correctAnswer === item.chosenAnswer) {
                acc = acc + 1;
            }

            return acc;

        }, 0)
    }

    getWronglyAnsweredQuestions() {

        const {questions} = this.props;

        return questions.reduce((acc, item) => {

            if (item.correctAnswer !== item.chosenAnswer) {
                acc.push(item);
            }

            return acc;

        }, [])
    }

    getAnswer(question, answerId) {

        let answerText = "";

        question.answers.map((item) => {
            if (item.id == answerId) {
                answerText = item.text;
            }
        });

        console.log(answerText);
        return answerText;

    }

    render() {

        const {questions} = this.props;


        return <Container style={styles.container}>
            <Content>
                <Card>
                    <CardItem>
                        <H1>You scored {this.getCorrectAnswers()} out of {questions.length}</H1>
                    </CardItem>
                    <CardItem>
                        <H2>Breakdown</H2>
                    </CardItem>
                    <CardItem>
                        <SummaryGraph questions={questions}/>
                    </CardItem>
                    <CardItem>
                        <H2>Improvements</H2>
                    </CardItem>
                    {this.getWronglyAnsweredQuestions().map((question) => {
                        return <CardItem>
                            <Grid>
                                <Row>
                                    <Text style={{fontWeight:"bold"}}>Question:</Text>
                                </Row>
                                <Row>
                                    <Text>{question.question}</Text>
                                </Row>
                                <Row>
                                    <Text style={{fontWeight:"bold"}}>Correct Answer:</Text>
                                </Row>
                                <Row>
                                    <Text>{this.getAnswer(question, question.correctAnswer)}</Text>
                                </Row>
                                <Row>
                                    <Text style={{fontWeight:"bold"}}>Chosen Answer:</Text>
                                </Row>
                                 <Row>
                                    <Text>{this.getAnswer(question, question.chosenAnswer)}</Text>
                                </Row>
                            </Grid>
                        </CardItem>
                    })}
                    <CardItem>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        questions: state.appData.questions,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
