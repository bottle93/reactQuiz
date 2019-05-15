import React, {Component} from 'react';
import './App.css';
import MainStore from './stores/MainStore'
import { Provider, observer } from 'mobx-react';
import QuizMain from './components/QuizMain'

class App extends Component {
    mainStore = new MainStore();
    render() {
        const mainStore = this.mainStore;
        return (
            <Provider mainStore={mainStore}>
                <div className="App">
                    <QuizMain/>
                </div>
            </Provider>

        );
    }

}

export default observer(App);
