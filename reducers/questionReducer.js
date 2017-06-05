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

    switch (action.type) {
        case LOAD_QUESTIONS:
            return {
                ...state,
                questions: hashQuestions(state.questions),
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