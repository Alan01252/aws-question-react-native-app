import {LOAD_QUESTIONS, NEXT_QUESTION} from "../constants";

export function loadQuestions() {
    return {
        type: LOAD_QUESTIONS,
    }
}

export function nextQuestion() {
    return {
        type: NEXT_QUESTION,
    }
}


