import { Inter } from "next/font/google"
import { ExperinceBar } from "@/components/ExperienceBar"
import { Profile } from "@/components/Profile"
import style from "../styles/pages/Home.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className={style.container}>
      <ExperinceBar />
      <section>
        <div>
          <Profile />
        </div>
        <div></div>
      </section>
    </div>
  )
}
