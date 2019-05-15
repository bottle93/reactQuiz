import {observable, action} from 'mobx';
import Quiz from './quizCategory'

export default class MainStore {
    @observable quiz = null;

    @action getBoxFromMail() {
        this.quiz = new Quiz({
            selectedCategory: {},
            questions: [],
            categories: []
        })
    }
}
