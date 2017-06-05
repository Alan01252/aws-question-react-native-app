import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {Body, Button, Card, CardItem, Col, Container, Content, Grid, H1, StyleProvider} from "native-base";
import styles from './style';
import * as React from "react";
import {connect} from 'react-redux';
import {loadQuestions, nextQuestion, answerQuestion, nextExplanation} from "../../actions/actions";
import AnswerOrExplanation from "./AnswerOrExplanation"
import NextQuestionOrExplanation from "./NextQuestionOrExplanation";

class Question extends React.Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadQuestions();
    }


    render() {

        const {
            questions,
            currentQuestion,
            currentExplanation,
            questionsLoaded,
            onNextQuestionClick,
            onNextExplanationClick,
            onAnswerClick
        } = this.props;

        if (!questionsLoaded) {
            return null;
        }




        return (
            <Container style={styles.container}>
                <Content>
                    <Card>
                        <CardItem header style={styles.header}>
                            <H1>{"Question " + (currentQuestion + 1)}</H1>
                        </CardItem>
                        <CardItem style={styles.questionContainer}>
                            <Body>
                            <Text style={styles.content}>
                                {questions[currentQuestion].question}
                            </Text>
                            </Body>
                        </CardItem>

                        <AnswerOrExplanation
                            answers={questions[currentQuestion].answers}
                            questionHash={questions[currentQuestion].hash}
                            correctAnswer={questions[currentQuestion].correctAnswer}
                            chosenAnswer={questions[currentQuestion].chosenAnswer}
                            currentExplanation={currentExplanation}
                            currentQuestion={currentQuestion}
                            explanation={questions[currentQuestion].explanation}
                            onAnswerClick={onAnswerClick}
                        />


                        <NextQuestionOrExplanation
                            currentExplanation={currentExplanation}
                            currentQuestion={currentQuestion}
                            onNextQuestionClick={onNextQuestionClick}
                            onNextExplanationClick={onNextExplanationClick}
                        />

                    </Card>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        questions: state.appData.questions,
        chosenAnswer: state.appData.chosenAnswer,
        currentQuestion: state.appData.currentQuestion,
        currentExplanation: state.appData.currentExplanation,
        questionsLoaded: state.appData.questionsLoaded,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadQuestions: () => dispatch(loadQuestions()),
        onNextQuestionClick: () => dispatch(nextQuestion()),
        onNextExplanationClick: () => dispatch(nextExplanation()),
        onAnswerClick: (questionHash, answerId) => dispatch(answerQuestion(questionHash, answerId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
