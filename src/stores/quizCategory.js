import {observable, computed, action, extendObservable, runInAction} from 'mobx';
import axios from 'axios';


export default class QuizStore {
    @observable selectedCategory = {};
    @observable questions = [];
    @observable categories = [];

    constructor(store, initialState) {
        this.store = store;
        extendObservable(this, initialState);
    }

    @action async getCategories() {
        try {
            await axios.get('https://opentdb.com/api_category.php')
                .then(response => {
                    this.categories = response.data.trivia_categories;
                })
        }
        catch {
            runInAction(error => {throw error})
        }
    }

    @action selectCategory(categoryId, categoryName) {
        this.selectedCategory.id = categoryId;
        this.selectedCategory.name = categoryName
    }

}
