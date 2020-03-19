import React, { Component } from 'react';

class Hello extends Component {
    render() {
        return (
            <div>
                <h1>Hey Bro</h1 >
                <h2>I like that shit</h2>
                <h3>{this.props.greeting}</h3>
            </div>
        );
    }
}

export default Hello;