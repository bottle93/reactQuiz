import React, {Component} from 'react';

class Question extends Component {
    render() {
        let answersList = this.props.incorrect;
        if(!answersList.includes(this.props.correct)){
            answersList.push(this.props.correct);
        }
        answersList.slice().sort(() => Math.random() - 0.5);
        return(
            <div>
                <h1>{this.props.title.replace(/&quot;/g,'"')} {this.props.questionId+1}/10</h1>
                {answersList.map((answer, id) => {
                    return(
                        <div key={id} id={this.props.questionId}>
                            <input
                                type="radio"
                                id={this.props.questionId}
                                name={this.props.questionId}
                                value={answer}
                                onChange={value => this.props.checkedAnswer(value)}
                            />
                            <label
                                id={this.props.questionId}
                                className={answer === this.props.correct ? 'correctAnswer' : 'incorrect'}>
                                {answer.replace(/&quot;/g,'"')}
                            </label>
                        </div>)
                })}
            </div>
        )
    }
}

export default Question
