import '../styles/global.css'
import { AppProps } from 'next/app'
import { ChallengesContext } from '../context/ChallengesContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
