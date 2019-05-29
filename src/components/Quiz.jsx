import React, {Component} from 'react';
import {observer, inject} from "mobx-react";
import Question from './Question'
import QuizSummary from './QuizSummary'


@inject('store')
@observer class Quiz extends Component {
    componentWillMount() {
        this.props.store.loadQuestions();
    }

    render() {
        const store= this.props.store;
        let displayQuestion;

        if(store.questionsList.length > 0) {
            let questionId = store.currentQuestion;
            let question = store.questionsList[questionId];
            displayQuestion = (
                <div key={questionId} className='quiz__question'>
                    <Question
                        title={question.question}
                        questionId={questionId}
                        correct={question.correct_answer}
                        answersList={question.answers}
                        handleChange={store.handleChange}
                    />
                    <button
                        disabled={!store.selected}
                        className={'quiz__button--next'}
                        onClick={() => store.onUserClick()}
                    >Next Question
                    </button>
                </div>
            )

        }
        return (
            <div className='quiz__question-container'>
                {
                    store.currentQuestion < 10 && store.answersList.length < 10
                        ? (<form>{displayQuestion}</form>)
                        : (<QuizSummary/>)
                }
            </div>
        )
    }
}

export default Quiz
