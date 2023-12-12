import { shuffle } from "@/functions/arrays";
import questions from "../dataQuestions"

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: any, res: any) => {
    const ids = questions.map(question => question.id)
    res.status(200).json(shuffle(ids));
}