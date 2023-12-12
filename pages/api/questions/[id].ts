import questions from "../dataQuestions"


// eslint-disable-next-line import/no-anonymous-default-export
export default (req: any, res: any) => {
    const idSelected = +req.query.id

    const unicQuestion = questions.filter(question => question.id === idSelected)
    if (unicQuestion.length === 1) {
        const questionSelected = unicQuestion[0].shuffleAnswer()
        res.status(200).json(questionSelected.toObject())
    } else {
        res.status(204).send()
    }
}