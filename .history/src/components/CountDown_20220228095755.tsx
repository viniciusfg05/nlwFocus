import { useState, useEffect } from 'react'
import styles from '../styles/components/CountDown.module.css'

let countDownTimeOut: NodeJS.Timeout; //para cancelar o timeOut


export function CountDown() {
    const [ time, setTime ] = useState(25 * 60)
    const [ isActive, setIsActive ] = useState(false)// para iniciar com desabilitado o conometro

    const minutos = Math.floor(time / 60);
    const segundos = (time % 60); // '%' resto da divisão

    const [minuteLefts, minuteRight] = String(minutos).padStart(2, '0').split('')
    const [ segundosLefts, segundosRights ] = String(segundos).padStart(2, '0').split('')

    // padStart(2 '0') = para os numero a baixo de 10 ele vai add um '0' no inicio, ex. '05'
    // split('') = ele vai pera a string por exemplo '25' e repartir em dois '2' e '5'. split devolve um array com primeiro e segundo caractere

    function startCoutDown() {
        setIsActive(true);
    }

    function CancelCoutDown() {
        clearTimeout(countDownTimeOut)
        setIsActive(false);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countDownTimeOut = setTimeout(() => {setTime(time - 1);}, 1000)
        }
    }, [isActive, time]);

    // setTimeout(() => {setTime(time - 1);}, 1000) = setTimeout = depois de 1000ms execute uma função; setTime recebe o valor de time -1.ou seja ele mudar para -1 a cada 1s e se add o time no useEffect sempre que o time mudar ele tira mais 1 segundo
    return(
        <div>
            <div className={styles.CountDownContainer}>
            <div>
                <span>{minuteLefts}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{segundosLefts}</span>
                <span>{segundosRights}</span>
            </div>
        </div>

        { isActive ? (
            <button
            type="button"
            className={`${styles.CountdownButton} ${styles.CountdownButtonActive} `}
            onClick={CancelCoutDown}
            >
                Abondonar ciclo
            </button>
        ) : (
            <button
                type="button"
                className={styles.CountdownButton}
                onClick={startCoutDown}
             >
                Iniciar ciclo
        </button>
        )}

        

        
        </div>
    )
}