import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return <h2>React Application</h2>;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));