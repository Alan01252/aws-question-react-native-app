import * as React from "react";
import {connect} from 'react-redux';
import Question from "../Question/Question";
import Summary from "../Summary/Summary";


class QuestionOrSummary extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        const {quizEnded} = this.props;

        if (!quizEnded) {
            return <Question/>
        }

        return <Summary/>
    }
}

const mapStateToProps = (state) => {

    return {
        quizEnded: state.appData.quizEnded,
    }
};

const mapDispatchToProps = () => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionOrSummary);
