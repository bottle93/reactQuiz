import React, {Component} from 'react';
import {observer, inject} from "mobx-react";
import {Link} from 'react-router-dom'


@inject('store')
@observer class QuizMain extends Component {
    componentWillMount() {
        if(this.props.store.categoryList.length === 0){
            this.props.store.loadCategories()
        }
    }
    render() {
        const store= this.props.store;
        let displayCategories;
        if(store.loading === false) {
            displayCategories = store.categoryList.map(category => {
                return(
                    <div
                        className='quiz__category-item'
                        key={category.id}
                        onClick={() => store.selectCategory(category)}
                    >
                        {category.name.replace('Entertainment: ','')}
                    </div>
                )
            });
        }

        return(
            <div>
                <h1 className='quiz__title'>Awesssome Quiz</h1>
                <div className='quiz__categories'>
                    {store.selectedCategory.name
                        ? (
                            <div className='quiz__category--selected'>
                                <h1 className='quiz__category-name'>{store.selectedCategory.name}</h1>
                                <Link to='/start' className='quiz__link'>Go!</Link>
                            </div>
                        )
                        : (<div className='quiz__choose'>Choose category!</div>)}
                </div>
                <div className='quiz__categories-list'>
                    {displayCategories}
                </div>
            </div>
        )
    }
}

export default QuizMain
