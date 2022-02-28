import '../styles/global.css'
import { AppProps } from 'next/app'
import { ChallengesContext } from '../context/ChallengesContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChallegesProvider>
      <Component {...pageProps} />
    </ChallegesProvider>
  )
}

export default MyApp
