import QuestionModel from "@/model/question";
import styles from '../styles/Question.module.css'
import Statement from "./Statement";
import Answer from "./Answer";

const letters = [
    { value: 'A', color: '#F2c866' },
    { value: 'B', color: '#F266BA' },
    { value: 'C', color: '#85D4F2' },
    { value: 'D', color: '#BCE596' },

]
interface QuestionProps {
    value: QuestionModel
    onResponse: (index: number) => void
}
export default function Question(props: QuestionProps) {
    const question = props.value;

    function renderingAnswer() {
        return question.answers.map((answer, i) => {

            return <Answer
                key={i}
                value={answer}
                index={i}
                letter={letters[i].value}
                backgroundLetterColor={letters[i].color}
                onResponse={props.onResponse}
            />
        })
    }
    return (
        <div className={styles.question}>
            <Statement text={question.statement} />
            {renderingAnswer()}
        </div>
    )
}