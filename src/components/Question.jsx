import React, {Component} from 'react';

class Question extends Component {
    render() {
        let answersList = this.props.incorrect;
        if (!answersList.includes(this.props.correct)) {
            answersList.push(this.props.correct);
        }
        answersList.slice().sort(() => Math.random() - 0.5);
        return(
            <div>
                <h1>{this.props.title.replace(/&quot;/g,'"')} {this.props.questionId+1}/10</h1>
                {answersList.map((answer, id) => {
                    return (
                        <div
                            key={id}
                            id={this.props.questionId}
                        >
                            <label
                                id={this.props.questionId}
                                className={answer === this.props.correct ? 'correctAnswer' : 'incorrect'}>
                                <input
                                    type="radio"
                                    id={this.props.questionId}
                                    name={this.props.title}
                                    value={answer}
                                    onChange={(e) => {this.props.handleChange(e, this.props.correct)}}
                                />
                                {answer.replace(/&quot;/g,'"')}
                            </label>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Question
