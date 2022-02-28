import { createContext, useState, ReactNode } from 'react';

export const ChallengesContext = createContext({})

interface ChallengesProviderProps{
  children: ReactNode;
}

interface ChallengesContextData {
  level: number;
  currentExperience,
  challengeCompleted,
  levelUp,
  startNewChallenge
}

export function ChallegesProvider({children}:ChallengesProviderProps ) {
  const [level, setLevel] = useState(1);
  const [ currentExperience, setCurrentExperience ] = useState(0)
  const [ challengeCompleted, setChallengeCompleted ] = useState(0)

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log('NewChallenge')
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

