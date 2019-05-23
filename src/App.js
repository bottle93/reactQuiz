import React, {Component} from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import DevTools from 'mobx-react-devtools';
import './App.css';
import QuizMain from './components/QuizMain';
import QuizStart from './components/QuizStart'
import QuizStore from './stores/QuizStore';



const store = new QuizStore();

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <div className="App">
                        <DevTools />
                        <Switch>
                            <Route exact path="/" component={QuizMain} />
                            <Route exact path="/start" component={QuizStart}/>
                        </Switch>
                    </div>
                </Provider>
            </BrowserRouter>
        );
    }
}

export default App;
