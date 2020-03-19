import React, { Component } from 'react';
import CardList from '../components/Cardlist';
import { Robots } from '../components/Robots';
import Scroll from '../components/Scroll';
import SearchBox from '../components/Searchbox';
import ErrorBoundry from '../components/ErrorBoundry';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !robots.length ? <h1>Loading</h1> :
        (
            <div>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>                   
                </Scroll>           
            </div>
        );
    }
}

export default App;
