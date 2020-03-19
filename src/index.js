import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Card from './components/Card';
import { Robots } from './components/Robots';
import Hello from './Hello.js'
import * as serviceWorker from './serviceWorker';
import CardList from './components/Cardlist';

ReactDOM.render(
    <App />
    , document.getElementById('root')
);

//<CardList robots={Robots} />
        //<Card name={"Horst"} mail={"horst@p.de"} imgSource={"https://robohash.org/12345"} />
        //<Card name={"Peter"} mail={"peter@p.de"} imgSource={"https://robohash.org/23456"} />
        //<Card name={"Frank"} mail={"frank@p.de"} imgSource={"https://robohash.org/456754"} />

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
