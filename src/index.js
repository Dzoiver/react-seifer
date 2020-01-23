import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
    constructor() {
        super();
    };
    render() {
        return (
            <div>
            <h1 align="center">Привет Соня. Юбка норм</h1>
            <Button buttonText='Small data'/>
            <Button buttonText='Big data'/>
            </div>
        );
    }
}
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url1: 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
            url2: 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
        };
    }
    getData() {
        
    }
    render() {
        return <button type="button" onClick={this.getData}>{ this.props.buttonText }</button>;
    }
}

ReactDOM.render(<App />, document.getElementById('head'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
