import styles from '../styles/components/ChallegesBox.module.css'

export function ChallegesBox() {
  const hasActiveChallengen = true

  return (
    <div className={styles.ChallegesBoxContainer}>
      <div className={styles.ChallegesBoxNotActive}>
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level up" />
          Avance de level completando os desafios
        </p>
      </div>
    </div>
  )
}