import React from 'react';
import './Answer.css';

class Answer extends React.Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        this.props.onClick(this.props.answer.id);
    }


    render() {
        const qId = this.props.question.id;
        const { id, label, onClick } = this.props.answer;
        return (
            <label className="answer">
                <input type="radio" value={id} name={`answer${qId}`} onChange={this.onChange} />
                <span>{label}</span>
            </label>
        );
    }
}

export { Answer };
