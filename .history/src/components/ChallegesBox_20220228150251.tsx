import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../styles/components/ChallegesBox.module.css'

export function ChallegesBox() {
  const { activeChallengen, resetChallenge } = useContext(ChallengesContext)


  return (
    <div className={styles.ChallegesBoxContainer}>
      {activeChallengen ? (
        <div className={styles.ChallegesBoxActive}>
          <header>Ganhe {activeChallengen.amount}xp</header>
          <main>
            <img src={`icons/${activeChallengen.type}.svg`} alt="Ganhe 400xp" />
            <strong>Novo desafio</strong>
            <p>{activeChallengen.description}</p>
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