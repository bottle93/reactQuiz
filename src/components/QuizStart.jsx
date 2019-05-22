import React, {Component} from 'react';
import {observer, inject} from "mobx-react";
import Question from './Question'


@inject('store')
@observer class QuizStart extends Component {
    componentWillMount() {
        this.props.store.loadQuestions();
    }

    displayButtons() {
        return(
            <div>
                <button
                    className={'button--previous'}
                    onClick={() => this.props.store.previousQuestion()}
                >Prev
                </button>
                <button
                    className={'button--next'}
                    onClick={() => this.props.store.nexQuestion()}
                >Next
                </button>
            </div>
        )
    }

    checkedAnswer(value) {
        this.props.store.answers
    }

    render() {
        const store= this.props.store;
        let displayQuestions;
        if(store.questionsList.length > 0) {
            displayQuestions = store.questionsList.map((question, index) => {
                if(index === store.currentQuestion) {
                    return(
                        <div key={index} >
                            <Question
                                title={question.question}
                                questionId={index}
                                checkedAnswer={this.checkedAnswer}
                                incorrect={question.incorrect_answers}
                                correct={question.correct_answer}
                            />
                            {this.displayButtons()}
                        </div>

                    )
                }
            })
        }

        return (
            <div>{displayQuestions}</div>
        )
    }
}

export default QuizStart
