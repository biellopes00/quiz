import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../styles/Timer.module.css'

interface TimerProps {
    key: any
    duration: number
    timeOver: () => void
}

export default function Timer(props: TimerProps) {
    return (
        <div className={styles.timer}>
            <CountdownCircleTimer
            duration={props.duration}
                size={120}
                isPlaying
                onComplete={props.timeOver}
                colors={['#BCE596', '#F7B801', '#ED827A']}        
                colorsTime={[10,3,0]}
            >
                {({remainingTime}) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}