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
                    className={'button--next'}
                    onClick={() => this.props.store.onUserClick()}
                >Next
                </button>
            </div>
        )
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
                                incorrect={question.incorrect_answers}
                                correct={question.correct_answer}
                                handleChange={this.props.store.handleChange}
                            />
                            {this.displayButtons()}
                        </div>

                    )
                }
            })
        }

        return (
            <form>{displayQuestions}</form>
        )
    }
}

export default QuizStart
