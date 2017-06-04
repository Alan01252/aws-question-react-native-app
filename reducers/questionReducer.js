import questions from './questions';
import hash from "object-hash";
import {LOAD_QUESTIONS} from "../constants";


const initialState = {
    currentQuestion: 0,
    questions: questions,
    questionsLoaded: false,
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
        case 'NEXT_QUESTION':
            return {
                ...state,
                currentQuestion: state.currentQuestion + 1
            };
        case 'PREVIOUS_QUESTION':
            return {
                ...state,
                currentQuestion: state.currentQuestion - 1
            };
        default:
            return state
    }
}