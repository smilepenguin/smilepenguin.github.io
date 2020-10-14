import React from 'react';
import './App.css';
import {Header} from "../Header";
import {Test} from "../Test";
import {Person} from "../Person";
import {PersonList} from "../PersonList";

class App extends React.Component {

    constructor(props) {
        super(props);

        //Начальное состояние
        this.state = {
            stage: 'test',
            persons: [],
            questions: [],
        };
        //Получаем описание персонажей
        this.getJson('./data/actors.json').then(actors => {
            this.setState({ persons: actors });
        });

        //Получаем вопросы к опроснику
        this.getJson('./data/questions.json').then(questions => {
            let id = 0;
            questions = questions.map(q => {
                q.id = id++;
                q.answers = q.answers.map(a => {
                    a.id = id++;
                    return a;
                });
                return q;
            });
            this.setState(st => { return { questions } });
        });

        this.onClick = this.onClick.bind(this);
        this.onQuizCompleted = this.onQuizCompleted.bind(this);
    }

    getJson(url) {
        return fetch(url).then(res => res.json());
    }

    onClick() {
        this.setState({
            count: this.state.count + 1
        });
    };

    //Считаем количество правильных ответов
    onQuizCompleted(answers) {
        const rightAnswers = this.state.questions.map(question => {
            return question.answers.filter(answer => answer.right).map(answer => answer.id);
        }).flat(1);

        let rightCount = 0;

        for (let i = 0; i < answers.length; ++i) {
            if (rightAnswers[i] === answers[i]) {
                rightCount++;
            }
        }

        //Результат проождения опросника
        this.setState({
            stage: 'result',
            result: rightCount / this.state.questions.length * 100
        });
    }

    // Главный метод класса, отвечающий за отрисовку компонента
    //Описывается его содержимое
    render() {
        console.log('app render', this.state.questions);
        return (
            <div className="app">
                <div className="container">
                    <div className="header"></div>
                    <PersonList persons={this.state.persons} />
                    <div className="test">
                        {this.state.stage === 'test' ? (
                            <Test
                                questions={this.state.questions}
                                onQuizCompleted={this.onQuizCompleted} />
                            ) : (
                                <div>
                                    <h1>{this.state.result > 80 ? 'вы молодец' : 'вы тормоз'}</h1>

                                    <p>ваш результат {this.state.result}% дохлых енотов</p>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        );
    }
}

export { App };
