import { createContext, useState } from 'react';

export const ChallengesContext = createContext({})



export function ChallegesProvider() {
  const [level, setLevel] = useState(1);
}