import { Inter } from "next/font/google"
import { ExperinceBar } from "@/components/ExperienceBar"
import { Profile } from "@/components/Profile"
import style from "../styles/pages/Home.module.css"
import { CompletedChallenges } from "@/components/CompletedChallenges"
import { Countdown } from "@/components/Countdown"

import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Início move.it</title>
      </Head>
      <ExperinceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div></div>
      </section>
    </div>
  )
}
