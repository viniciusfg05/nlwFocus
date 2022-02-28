import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../styles/components/CompleteChallenges.module.css'


export function CompleteChallenges() {
    const { challengeCompleted } = useContext(ChallengesContext)

    return(
        <div className={styles.CompleteChallenges}>
            <strong>Desafios Completos</strong>
            <span>{challengeCompleted}</span>
        </div>
    )
}