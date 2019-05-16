import React, {Component} from 'react';
import {observer} from "mobx-react";
import {observable} from "mobx";

@observer class QuizMain extends Component {
    @observer categories;

    componentWillMount() {
        this.props.store.loadCategories()
    }

    render() {
        let displayCategories;
        if(this.props.store.loading === false) {
            displayCategories = this.props.store.categories.map(category => {
                return(
                    <button key={category.id}>{category.name}</button>
                )
            });
        }
        return(
            <div>
                <p>Hello Sunshine!</p>
                <div>{displayCategories}</div>
            </div>
        )
    }
}

export default QuizMain
