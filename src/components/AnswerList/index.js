import React from 'react';
import { Answer } from '../Answer';

class AnswerList extends React.Component {
    render() {
        return (
            <div className="answer-list">
                {this.props.answers.map((answer, i) => (
                    <Answer
                        key={answer.id}
                        question={this.props.question}
                        answer={answer}
                        onClick={this.props.onAnswer} />
                ))}
            </div>
        );
    }
}

export { AnswerList };
