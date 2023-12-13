import QuestionModel from "@/model/question"
import styles from '../styles/Quiz.module.css';
import Question from "./Question";
import Button from "./Button";

interface QuizProps {
    question: QuestionModel
    lastQuestion: boolean
    questionAnswered: (question: QuestionModel) => void
    nextStep: () => void
}

export default function Quiz(props: QuizProps) {

    function onResponse(index: number) {
        if (props.question.notAnswered) {
            props.questionAnswered(props.question.answerWith(index))
        }
    }
    return (
        <div className={styles.quiz}>
            {props.question ?

                <Question
                    value={props.question}
                    timeToAnswer={6}
                    onResponse={onResponse}
                    timeOver={props.nextStep}
                />
                : false}

            <Button
                onClick={props.nextStep}
                text={props.lastQuestion ? 'Finish' : 'Next'}
            />
        </div>
    )
}