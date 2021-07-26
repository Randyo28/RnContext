import React, { useState, createContext } from 'react'

export const CharacterContext = createContext()

export function PeopleProvider(props) {
  const [people, setPeople] = useState([
    { name: 'Randy', age: 26, key: '18282922' },
    { name: 'Lucia', age: 25, key: '2393929' },
    { name: 'Nelly', age: 9, key: '3292992' },
    { name: 'Benji', age: 3, key: '4392983' },
  ])

  return (
    <CharacterContext.Provider value={people}>
      {props.children}
    </CharacterContext.Provider>
  )
}
