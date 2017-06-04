import * as React from "react";
import Answer from "./Answer";
import Explanation from "./Explanation";
import {View} from "react-native";


class AnswerOrExplanation extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {


        const {answers, questionHash, correctAnswer, chosenAnswer, currentQuestion, currentExplanation, onAnswerClick} = this.props;


        if (currentQuestion === currentExplanation) {
            return <Explanation/>
        }

        return <View>
            {answers.map(function (answer, i) {
                return <Answer
                    key={i}
                    answer={answer}
                    chosenAnswer={chosenAnswer}
                    questionHash={questionHash}
                    onAnswerClick={onAnswerClick}
                />

            })}
        </View>

    }
}


export default AnswerOrExplanation
