import style from "../styles/components/ChallengeBox.module.css"
export function ChallengeBox() {
  const hasActiveChallenge = true

  return (
    <div className={style.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={style.challengeActive}>
          <header>Ganhe 400xp</header>
          <main>
            <img src="icons/body.svg" />
            <strong>Novo desafio</strong>
            <p>levante e faça uma caminhada breve</p>
          </main>
          <footer>
            <button type="button" className={style.challengeFailButton}>
              Falhei
            </button>

            <button type="button" className={style.challengeSucceedButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={style.challengeNotActive}>
          <strong> Inicie um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" /> Avance de level
            completando desafios
          </p>
        </div>
      )}
    </div>
  )
}
