import style from "../styles/components/Profile.module.css"

export function Profile() {
  return (
    <div className={style.profileContainer}>
      <img src="https://github.com/EmanuelGSb.png" alt="Emanuel Gomes" />
      <div>
        <strong>Emanuel</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  )
}
