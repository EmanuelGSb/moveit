import Style from "../styles/components/ExperienceBar.module.css"

export function ExperinceBar() {
  return (
    <header className={Style.experinceBar}>
      {/* coloco chaves pq estou usando uma variavel javascript */}
      <span>0 xp</span>
      <div>
        <div style={{ width: "50%" }} />
        <span className={Style.currentExperience} style={{ left: "50%" }}>
          300 xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  )
}
