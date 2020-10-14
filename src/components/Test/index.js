import React from 'react';
import { AnswerList } from "../AnswerList";
import './Test.css';
class Test extends React.Component {
    constructor(props) {
        super(props);

        //Начальное состояние теста
        this.state = {
            current: 0,
            currentAnswer: null,
            answers: []
        };

        this.next = this.next.bind(this);
        this.onAnswer = this.onAnswer.bind(this);
    }

    next() {
        if (this.state.current + 1 < this.props.questions.length) {
            this.setState({
                current: this.state.current + 1,
                currentAnswer: null,
                answers: [...this.state.answers, this.state.currentAnswer],
            });
        } else {
            this.props.onQuizCompleted([...this.state.answers, this.state.currentAnswer]);
        }
    };

    onAnswer(answerId) {
        this.setState({ currentAnswer: answerId });
    }

    render() {
        if (!this.props.questions.length) {
            return null;
        }
        const { questions } = this.props;
        const { question, answers } = questions[this.state.current];
        return (
            <>
                <h1>{question}</h1>
                <AnswerList
                    question={questions[this.state.current]}
                    answers={answers}
                    onAnswer={this.onAnswer} />
                <input type="button" value="next" onClick={this.next} />
            </>
        );
    }
}

export { Test };
