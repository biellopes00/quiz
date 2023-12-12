import styles from '../styles/Statement.module.css'
interface StatementProps {
    text: string
}

export default function Statement(props: StatementProps) {
    return (
        <div className={styles.statement}>
            <div className={styles.text}>
                {props.text}
            </div>
        </div>
    )
}