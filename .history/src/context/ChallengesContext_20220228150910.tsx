import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenge.json'

interface Challenges {
  type: 'body' | 'eye'
  description: string;
  amount: number;
}

interface ChallengesProviderProps{
  children: ReactNode;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengeCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  activeChallengen: Challenges;
  resetChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallegesProvider({children}:ChallengesProviderProps ) {
  const [level, setLevel] = useState(1);
  const [ currentExperience, setCurrentExperience ] = useState(0)
  const [ challengeCompleted, setChallengeCompleted ] = useState(0)

  const [ activeChallengen, setActiveChallenge ] = useState(null)

  const experienceNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }
  
  return (
    <ChallengesContext.Provider 
    value={{ level,
      currentExperience,
      challengeCompleted,
      levelUp,
      startNewChallenge,
      activeChallengen,
      resetChallenge
    }}>
      {children}
    </ChallengesContext.Provider>
  )
}

