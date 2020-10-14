import React from 'react';
import './PersonList.css';
import {Person} from "../Person";

class PersonList extends React.Component {
    render() {
        const { persons } = this.props;
        return (
            <div className="persons-list">
                <div className="persons-menu-wrap">
                    <ul className="persons-menu">
                        {persons.map((person, i) => (
                            <li key={i}><a href={`#person${person.id}`}>{person.name}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="persons-content-wrap">
                    {persons.map((person, i) => (
                        <Person key={i} person={person} />
                    ))}
                </div>
            </div>
        );
    }
}

export { PersonList };
