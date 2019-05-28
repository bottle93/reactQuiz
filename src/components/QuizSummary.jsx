import React, {Component} from 'react';
import {observer, inject} from "mobx-react";
import {Link} from 'react-router-dom'

@inject('store')
@observer class QuizSummary extends Component {
    render() {
        let generateSummary = this.props.store.answersList.map(answer => {
            return (
                <div className='quiz__user-answer'>
                    <h2>{answer.question}</h2>
                    <p>Correct answer: {answer.correct}</p>
                    <p>Your answer: {answer.answer}</p>
                </div>
            )
        });


        return(
            <div className='quiz__answers-list'>
                <h1 className='quiz__score'>Score: {this.props.store.correctCount}/10</h1>
                {generateSummary}
                <button
                    className='quiz__button--replay'
                    onClick={() => this.props.store.playAgain()}
                >
                    <Link
                        className='quiz__link--replay'
                        to='/'
                    >Play again
                    </Link>
                </button>
            </div>
        )
    }
}

export default QuizSummary
