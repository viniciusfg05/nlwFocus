import { createContext, useState } from 'react';

export const ChallengesContext = createContext({})



export function ChallegesProvider() {
  const [level, setLevel] = useState(1);
}

return (
  <ChallengesContext.Provider value={{}}>

  </ChallengesContext.Provider>
)