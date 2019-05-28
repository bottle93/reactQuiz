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
    @observable selected = false;
    @observable answer = {};
    @observable answersList = [];
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

    @action
    nextQuestion() {
        if(this.currentQuestion < this.questionsList.length-1) {
            this.selected = false;
            return this.currentQuestion++
        }
    }

    @action
    handleChange = (e, correctAnswer) => {
        this.selected = true;
        return this.changeAnswerData(e.target.name, e.target.value, correctAnswer)
    };

    @action
    changeAnswerData(question, answer, correct) {
        if(answer === correct) {
            this.correctCount++
        }
        return this.answer = {
            'question': question,
            'answer': answer,
            'correct': correct
        }
    }

    @action
    updateUserAnswersList() {
        const answer = this.answer;
        this.answersList.push(answer)
    }

    @action
    onUserClick() {
        this.updateUserAnswersList();
        this.nextQuestion();
        console.log(this.currentQuestion)
    }

    @action
    playAgain() {
        this.selectedCategory = {};
        //questions
        this.questionsList = [];
        this.currentQuestion = 0;
        //answers
        this.answer = {};
        this.answersList = [];
        this.correctCount = 0;
    }

}



