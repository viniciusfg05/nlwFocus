import { createContext, useState, ReactNode } from 'react';

export const ChallengesContext = createContext({})

interface ChallengesProviderProps{
  children: ReactNode;
}

export function ChallegesProvider({children}:ChallengesProviderProps ) {
  const [level, setLevel] = useState(1);
  const [ currentExperience, setCurrentExperience ]

  function levelUp() {
    setLevel(level + 1);
  }
  
  return (
    <ChallengesContext.Provider value={{ level, levelUp}}>
      {children}
    </ChallengesContext.Provider>
  )
}

