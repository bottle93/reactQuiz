import React, {Component} from 'react';
import {observer} from "mobx-react";
import {observable} from "mobx";

@observer class QuizMain extends Component {
    componentWillMount() {
        this.props.store.loadCategories()
    }
    render() {
        return(
            <div>
                <p>Hello Sunshine!</p>
                <div>{console.log(this.props.store.categories)}</div>
            </div>
        )
    }
}

export default QuizMain
