import questions from './questions';
import hash from "object-hash";
import {ANSWER_QUESTION, LOAD_QUESTIONS, NEXT_EXPLANATION, NEXT_QUESTION} from "../constants";


const initialState = {
    currentQuestion: 0,
    currentExplanation: -1,
    questions: questions,
    questionsLoaded: false,
    chosenAnswer: null,
    quizEnded: false
};


export default function dataReducer(state = initialState, action) {

    const hashQuestions = (questions) => {
        return questions.map((question) => {
            return {
                ...question,
                hash: hash(question)
            }
        })
    };


    const shuffleAnswers = (questions) => {

        return questions.map((question) => {
            for (var i = question.answers.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = question.answers[i];
                question.answers[i] = question.answers[j];
                question.answers[j] = temp;
            }
            return {
                ...question
            }
        })
    };

    const shuffleQuestions = (questions) => {
        for (var i = questions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = questions[i];
            questions[i] = questions[j];
            questions[j] = temp;
        }
        return {
            ...questions
        }
    };


    switch (action.type) {
        case LOAD_QUESTIONS:
            return {
                ...state,
                questions: shuffleQuestions(shuffleAnswers(hashQuestions(state.questions))),
                questionsLoaded: true
            };
        case NEXT_QUESTION:

            let quizEnded = false;
            if (state.currentQuestion + 1 >= state.questions.length) {
                quizEnded = true
            }

            console.log("quiz ended" + quizEnded);

            return {
                ...state,
                currentQuestion: state.currentQuestion + 1,
                chosenAnswer: 0,
                quizEnded: quizEnded
            };
        case NEXT_EXPLANATION:
            return {
                ...state,
                currentExplanation: state.currentExplanation + 1
            };
        case ANSWER_QUESTION:
            const newState = {
                ...state,
                chosenAnswer: action.answerId
            }, question = newState.questions.find(x => x.hash === action.questionHash);
            question.chosenAnswer = action.answerId;
            return newState;
        default:
            return state
    }
}