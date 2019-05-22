import React, {Component} from 'react';
import {observer, inject} from "mobx-react";
import {Link} from 'react-router-dom'


@inject('store')
@observer class QuizMain extends Component {
    componentWillMount() {
        this.props.store.loadCategories()
    }
    render() {
        const store= this.props.store;
        let displayCategories;
        if(store.loading === false) {
            displayCategories = store.categoryList.map(category => {
                return(
                    <button
                        key={category.id}
                        onClick={() => store.selectCategory(category)}
                    >
                        {category.name}
                    </button>
                )
            });
        }

        return(
            <div>
                <h1>Awesssome Quiz</h1>
                <div>
                    {store.selectedCategory.name
                        ? (
                            <div>
                                <h1>{store.selectedCategory.name}</h1>
                                <Link to='/start'>Go!</Link>
                            </div>
                        )
                        : (<div>Choose category!</div>)}
                </div>
                {displayCategories}
            </div>
        )
    }
}

export default QuizMain
