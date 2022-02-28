import styles from '../styles/components/ChallegesBox.module.css'

export function ChallegesBox() {
  const hasActiveChallengen = true

  return (
    <div className={styles.ChallegesBoxContainer}>
      {hasActiveChallengen ? (
        <div className={styles.ChallegesBoxActive}>
          <header>Ganhe 400xp</header>
          <main>
            <img src="icons/body.svg" alt="Ganhe 400xp" />
            <strong>Novo desafio</strong>
            <p>Levente e faça uma caminhada de 3 minutos</p>
          </main>

          <footer>
            <button 
            type="button"
            className={styles.ChallegesFailedButton}
            >
              Falhei
            </button>

            <button 
            type="button"
            className={styles.ChallegesCompleteButton}
            >
              Completei
            </button>
          </footer>
        </div>

        
      ) : (
        <div className={styles.ChallegesBoxNotActive}>
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level up" />
          Avance de level completando os desafios 
        </p>
      </div>
      )}
    </div>
  )
}