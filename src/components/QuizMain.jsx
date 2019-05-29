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
                        className={store.selectedCategory.id === category.id
                            ? 'main__category-item main__category-item--selected'
                            : 'main__category-item'
                        }
                        key={category.id}
                        onClick={() => store.selectCategory(category)}
                    >
                        {category.name.replace('Entertainment: ','')}
                    </div>
                )
            });
        }

        return(
            <div className='main__main'>
                <h1 className='main__title'>Awesssome Quiz</h1>
                <div className='main__categories-list'>
                    {displayCategories}
                </div>
                <div className='main__categories'>
                    {store.selectedCategory.name
                        ? (
                            <div className='main__category--selected'>
                                <Link to='/start' className='main__link'>Go!</Link>
                            </div>
                        )
                        : (<div className='main__choose'>Choose category!</div>)}
                </div>

            </div>
        )
    }
}

export default QuizMain
