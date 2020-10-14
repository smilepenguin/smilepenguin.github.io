import React from 'react';
import './Pers.css';

class Person extends React.Component {
    render() {
        const { person } = this.props;
        return (
            <div className="person" id={`person${person.id}`}>
                <h1> {person.name}</h1>
                <p>Актер: {person.actor}</p>
                <img className="personPhoto" src={person.photo} />
                <p>{person.text}</p>
            </div>
        );
    }
}

export { Person };
