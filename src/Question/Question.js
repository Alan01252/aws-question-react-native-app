import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {Body, Button, Card, CardItem, Col, Container, Content, Grid, H1, StyleProvider} from "native-base";
import styles from './style';
import * as React from "react";
import {connect} from 'react-redux';
import {loadQuestions, nextQuestion} from "../../actions/actions";


class Question extends React.Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadQuestions();
    }


    render() {

        const {questions, currentQuestion, questionsLoaded, onNextClick} = this.props;

        if (!questionsLoaded) {
            console.log("Questions not loaded yet");
            return null;
        }

        return (
            <Container style={styles.container}>
                <StatusBar hidden/>
                <Content>
                    <Card>
                        <CardItem header style={styles.header}>
                            <H1 style={styles.h1}>Question {currentQuestion} of 20</H1>
                        </CardItem>
                        <CardItem style={styles.questionContainer}>
                            <Body>
                            <Text style={styles.content}>
                                {questions[currentQuestion].question}
                            </Text>
                            </Body>
                        </CardItem>

                        {questions[currentQuestion].answers.map(function (answer, i) {
                            return <CardItem>
                                <Grid>
                                    <Col size={1}>
                                        <Button dark outline bordered full style={styles.questionButton}>
                                            <Text>{answer.text}</Text>
                                        </Button>
                                    </Col>
                                </Grid>
                            </CardItem>
                        })}

                        <CardItem>
                            <Grid>
                                <Col size={1}>
                                    <Button primary style={styles.rightButton} onPress={() => onNextClick()}>
                                        <Text style={styles.text}>Next</Text>
                                    </Button>
                                </Col>
                            </Grid>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {

    console.log(state);

    return {
        currentQuestion: state.appData.currentQuestion,
        questionsLoaded: state.appData.questionsLoaded,
        questions: state.appData.questions
    }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        loadQuestions: () => dispatch(loadQuestions()),
        onNextClick: () => dispatch(nextQuestion())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
