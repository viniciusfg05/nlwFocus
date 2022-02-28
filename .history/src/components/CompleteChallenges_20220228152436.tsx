import styles from '../styles/components/CompleteChallenges.module.css'


export function CompleteChallenges() {
    const {} = useContext(ChallengesContext)

    return(
        <div className={styles.CompleteChallenges}>
            <strong>Desafios Completos</strong>
            <span>5</span>
        </div>
    )
}