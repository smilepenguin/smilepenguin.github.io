import React from 'react';
import {Text} from "../Text";

class Header extends React.Component {
    render() {
        return (
            <h1>{this.props.title}</h1>
        );
    }
}

export { Header };
