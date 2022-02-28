import { CompleteChallenges } from "../components/CompleteChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperinceBar";
import { Profile } from "../components/Profile";
import { ChallegesBox } from "../components/ChallegesBox";

import styles from "../styles/pages/Home.module.css"

import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Focus</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompleteChallenges />
          <CountDown />
        </div>
        <div>
          <ChallegesBox />
        </div>
      </section>

    </div>
  )
}
