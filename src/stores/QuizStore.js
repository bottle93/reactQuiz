import {observable, action, runInAction} from 'mobx'
import axios from "axios";


export default class QuizStore {
    @observable loading = true;

    //category selection
    @observable categoryList = [];
    @observable selectedCategory = {};
    @observable mockedCategory = {
        id: 25,
        name: "Art"
    };

    //questions
    @observable questionsList = [];
    @observable currentQuestion = 0;

    //answers
    @observable answers = [];
    @observable correctAnswers = {};
    @observable correctCount = 0;

    @action
    async loadCategories() {
        this.loading = true;
        try {
            const categories = await axios.get('https://opentdb.com/api_category.php');
            runInAction(() => {
                this.loading = false;
                this.categoryList = categories.data.trivia_categories;
            });
        }
        catch (error){
            runInAction(() => {
                return error
            })
        }
    }

    @action
    selectCategory(element) {
        this.selectedCategory = element;
    }

    @action
    async loadQuestions() {
        this.loading = true;
        const categoryId = this.selectedCategory.id ? this.selectedCategory.id : this.mockedCategory.id;
        try {
            const questions = await axios.get(`https://opentdb.com/api.php?amount=10&category=${categoryId}&type=multiple`);
            runInAction(() => {
                this.loading = false;
                this.questionsList = questions.data.results
            });
        }
        catch (error){
            runInAction(() => {
                return error
            })
        }
    }

    @action checkedAnswer() {

    }

    @action isCorrect(selected, correct) {

    }

    @action nexQuestion() {
        console.log(this.currentQuestion);
        if(this.currentQuestion < this.questionsList.length-1) {
            return this.currentQuestion++
        }

    }
    @action previousQuestion() {
        console.log(this.currentQuestion);
        if(this.currentQuestion > 0) {
            return this.currentQuestion--
        }
    }
}



