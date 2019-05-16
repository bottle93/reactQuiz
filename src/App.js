import React, {Component} from 'react';
import './App.css';
import QuizMain from './components/QuizMain';
import QuizStore from './stores/QuizStore'

class App extends Component {
    render() {
        return (
            <div className="App">
                <QuizMain store={new QuizStore()}/>
            </div>
        );
    }
}

export default App;
