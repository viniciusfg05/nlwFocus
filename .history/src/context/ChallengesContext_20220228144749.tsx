import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenge.json'


interface ChallengesProviderProps{
  children: ReactNode;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengeCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallegesProvider({children}:ChallengesProviderProps ) {
  const [level, setLevel] = useState(1);
  const [ currentExperience, setCurrentExperience ] = useState(0)
  const [ challengeCompleted, setChallengeCompleted ] = useState(0)

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
  }
  
  return (
    <ChallengesContext.Provider 
    value={{ level,
      currentExperience,
      challengeCompleted,
      levelUp,
      startNewChallenge
    }}>
      {children}
    </ChallengesContext.Provider>
  )
}

