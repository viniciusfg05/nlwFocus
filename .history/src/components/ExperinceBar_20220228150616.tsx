import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
    const { currentExperience } = useContext(ChallengesContext)

    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
                <div>
                    <div style={{ width: '50%',}}/> 
        
                    <span className={styles.currentExperience} style={{ left: '50%'}}>{currentExperience} xp</span>
                </div>
            <span>600 xp</span>
        </header>
    )
}