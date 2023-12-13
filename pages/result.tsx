import { useRouter } from "next/router"
import styles from '../styles/Result.module.css'
import Statistic from "@/components/Statistic"
import Button from "@/components/Button"

export default function result() {

    const router = useRouter()

    const total = +router.query.total
    const right = +router.query.right
    const percentage = Math.round((right / total) * 100)

    return (
        <div className={styles.result}>
            <h1>Final Result</h1>
            <div style={{display: 'flex'}}>
                <Statistic text="Questions" value={total} />
                <Statistic text="Right Answers" value={right}  backgroundColor="#9CD2A4"/>
                <Statistic text="Percentage" value={`${percentage}%`}  backgroundColor="#DE6A33"/>
            </div>
            <Button href="/" text="Try Again"/>
        </div>
    )
}