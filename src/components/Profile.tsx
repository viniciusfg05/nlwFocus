import styles from '../styles/components/Profile.module.css'


export function Profile() {
    return(
        <div className={styles.profileContainer} >
            <img src="https://avatars.githubusercontent.com/u/68232658?s=400&u=003f61fe1fe4474daf9c3f5226d596c5f99dd759&v=4" alt="Vinicius Ferreira" />
            <div>
                <strong>Vinicius Ferreira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div> 
    )
}