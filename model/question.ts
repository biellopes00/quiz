import { shuffle } from "@/functions/arrays";
import AnswerModel from "./answer";

export default class QuestionModel {
    #id: number
    #statement: string
    #answers: AnswerModel[]
    #rightAnswer: boolean

    constructor(id: number, statement: string, answers: AnswerModel[], rightAnswer = false) {
        this.#id = id;
        this.#statement = statement;
        this.#answers = answers;
        this.#rightAnswer = rightAnswer;
    }

    get id() { return this.#id }
    get statement() { return this.#statement }
    get answers() { return this.#answers }
    get rightAnswer() { return this.#rightAnswer }
    get notAnswered() { return !this.answered }
    get answered() {
        for (let answer of this.#answers) {
            if (answer.revealed) return true
        }
        return false
    }
    answerWith(index: number): QuestionModel {
        const gotItRight = this.#answers[index]?.right
        const answers = this.#answers.map((answer, i) => {
            const selectedAnswer = index === i
            const shouldReveal = selectedAnswer || answer.right
            return shouldReveal ? answer.reveal() : answer
        })
        return new QuestionModel(this.#id, this.#statement, answers, gotItRight)
    }

    shuffleAnswer(): QuestionModel {
        let shuffledAnswers = shuffle(this.#answers)
        return new QuestionModel(this.#id, this.#statement, shuffledAnswers, this.#rightAnswer)
    }

    static createFromObject(obj: QuestionModel): QuestionModel {
        const answers = obj.answers.map(resp => AnswerModel.createFromObject(resp))
        return new QuestionModel(obj.id, obj.statement, answers, obj.rightAnswer)
    }

    toObject() {
        return {
            id: this.#id,
            statement: this.#statement,
            answered: this.answered,
            answers: this.#answers.map(resp => resp.toObject()),
            rightAnswer: this.#rightAnswer
        }
    }
}