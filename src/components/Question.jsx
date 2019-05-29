import React, {Component} from 'react';
import he from 'he'


class Question extends Component {
    render() {

        return(
            <div className='quiz__question'>
                <h1 className='quiz__question-text'>
                    {he.decode(this.props.title)} {this.props.questionId+1}/10
                </h1>
                <div className='quiz__question-variants-list'>
                    {this.props.answersList.map((answer, id) => {
                        return (
                            <div
                                className='quiz__question-variant'
                                key={id}
                                id={this.props.questionId}
                            >
                                <input
                                    type="radio"
                                    id={'var' + (this.props.questionId + id)}
                                    className='quiz__question-answer-input'
                                    name={this.props.title}
                                    value={answer}
                                    onChange={(e) => {this.props.handleChange(e, this.props.correct)}}
                                />
                                <label
                                    htmlFor={'var' + (this.props.questionId + id)}
                                    className='quiz__question-answer-label'>
                                    {he.decode(answer)}
                                </label>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Question
