import {observable, computed, action, extendObservable, runInAction} from 'mobx';
import axios from "axios";


export default class QuizStore {
    @observable loading = true;
    @observable selectedCategory = {};

    @action
    loadCategories() {
        this.loading = true;
        const categories = axios.get('https://opentdb.com/api_category.php')
            .then(response => {console.log('response: ', response.data.trivia_categories); return response.data.trivia_categories});
        runInAction(() => {
            Object.assign(this, categories);
            this.loading = false;
        })
    }

    @action
    selectCategory(id) {

    }
}
