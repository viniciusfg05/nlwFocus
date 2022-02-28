import '../styles/global.css'
import { AppProps } from 'next/app'
import { ChallengesContext } from '../context/ChallengesContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChallengesContext.Provider>
        
      </ChallengesContext.Provider>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
