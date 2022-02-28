import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
    const { currentExperience, experienceNextLevel } = useContext(ChallengesContext)

    const porcentalNextLevel = Math.round((currentExperience * 100) / experienceNextLevel)

    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
                <div>
                    <div style={{ width: `${porcentalNextLevel}`,}}/> 
        
                    <span className={styles.currentExperience} style={{ left: 50%}}>
                        {currentExperience} xp
                    </span>
                </div>
            <span>{experienceNextLevel} xp</span>
        </header>
    )
}