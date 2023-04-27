import { useState } from "react"
import style from "../styles/components/Countdown.module.css"
export function Countdown() {
  const [time, setTime] = useState(25 * 60)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const minuteLeftRight = String(minutes).padStart(2, "0").split("")

  return (
    <div>
      <div className={style.countdownContainer}>
        <div>
          <span>2</span>
          <span>5</span>
        </div>
        <span>:</span>
        <div>
          <span>0</span>
          <span>0</span>
        </div>
      </div>
      <button type="button" className={style.countdownButton}>
        Iniciar um ciclo
      </button>
    </div>
  )
}
