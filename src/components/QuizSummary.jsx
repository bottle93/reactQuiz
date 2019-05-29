import React, {Component} from 'react';
import {observer, inject} from "mobx-react";
import {Link} from 'react-router-dom'
import he from 'he'

@inject('store')
@observer class QuizSummary extends Component {
    render() {
        let generateSummary = this.props.store.answersList.map(answer => {
            return (
                <div className='summary__user-answer'>
                    <h2 className='summary__question-text'>{he.decode(answer.question)}</h2>
                    <p className='summary__answer-correct'>Correct answer: {he.decode(answer.correct)}</p>
                    <p className={ answer.correct === answer.answer
                        ? 'summary__correct-answer-provided'
                        :'summary__answer-provided'}
                    >Your answer: {he.decode(answer.answer)}</p>
                </div>
            )
        });


        return(
            <div className='summary__answers-list'>
                <h1 className='summary__score'>Your Score: {this.props.store.correctCount}/10</h1>
                {generateSummary}
                <button
                    className='summary__button--replay'
                    onClick={() => this.props.store.playAgain()}
                >
                    <Link
                        className='summary__link--replay'
                        to='/'
                    >Play again
                    </Link>
                </button>
            </div>
        )
    }
}

export default QuizSummary
