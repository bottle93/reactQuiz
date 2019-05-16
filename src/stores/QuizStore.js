import {observable, computed, action, extendObservable, runInAction} from 'mobx';
import axios from "axios";


export default class QuizStore {
    @observable loading = true;
    @observable categories = [];
    @observable selectedCategory = {};

    @action
    async loadCategories() {
        this.loading = true;
        try {
            const categories = await axios.get('https://opentdb.com/api_category.php');
            runInAction(() => {
                this.loading = false;
                this.categories = categories.data.trivia_categories;
            });
        }
        catch (error){
            runInAction(() => {
                return error
            })
        }
    }

    @action
    selectCategory(id) {

    }
}
