import '../styles/global.css'
import { AppProps } from 'next/app'
import { ChallengesContext } from '../context/ChallengesContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChallengesContext.Provider>
      <Component {...pageProps} />
    </ChallengesContext.Provider>
  )
}

export default MyApp
