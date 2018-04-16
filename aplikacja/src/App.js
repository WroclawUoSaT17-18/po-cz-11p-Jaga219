import React, {Component} from 'react';
import MainRouter from './MainRouter';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <MainRouter/>
                </div>
            </div>
        );
    }
}

export default App;
