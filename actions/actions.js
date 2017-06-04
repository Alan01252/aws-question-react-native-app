import {LOAD_QUESTIONS, NEXT_QUESTION, ANSWER_QUESTION, NEXT_EXPLANATION} from "../constants";

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

export function nextExplanation() {
    return {
        type: NEXT_EXPLANATION,
    }
}

export function answerQuestion(questionHash, answerId) {
    return {
        type: ANSWER_QUESTION,
        questionHash,
        answerId
    }
}

