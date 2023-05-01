import { useState, useEffect } from "react"
import style from "../styles/components/Countdown.module.css"
import { clear } from "console"

let countDownTimeout: NodeJS.Timeout

export function Countdown() {
  const [time, setTime] = useState(0.25 * 60)
  const [isActive, setIsactive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("")
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("")

  function startCountdown() {
    setIsactive(true)
  }

  function resetCountdown() {
    clearTimeout(countDownTimeout)
    setIsactive(false)
    setTime(0.25 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsactive(false)
    }
  }, [isActive, time])

  return (
    <div>
      <div className={style.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={style.countdownButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${style.countdownButton} ${style.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={style.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  )
}
