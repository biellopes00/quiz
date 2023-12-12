import AnswerModel from "@/model/answer"
import styles from '../styles/Answer.module.css'

interface AnswerProps {
    value: AnswerModel
    index: number
    letter: string
    backgroundLetterColor: string
    onResponse: (index: number) => void
}

export default function Answer(props: AnswerProps) {
    const answer = props.value

    return (
        <div className={styles.answer}
            onClick={() => props.onResponse(props.index)}>
            <div className={styles.contentWithAnswer}>
                <div className={styles.front}>
                    <div className={styles.letter}
                        style={{ backgroundColor: props.backgroundLetterColor }}>
                        {props.letter}
                    </div>
                    <div className={styles.value}>
                        {answer.value}
                    </div>
                </div>
                <div className={styles.back}>

                </div>
            </div>
        </div>
    )
}