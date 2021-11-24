import React from 'react'
import { useSelector } from 'react-redux'

import { EnterLabyrinth } from './EnterLabyrinth' 
import { InsideLabyrinth } from './InsideLabyrinth'
import { LoadingIndicator } from './LoadingIndicator'

export const Game = () => {
  const currentCoordinates = useSelector(store => store.game.currentCoordinates)

  return (
    <>
      <h1>The Labyrinth...</h1>
      {currentCoordinates ? <InsideLabyrinth /> : <EnterLabyrinth />}
      <LoadingIndicator />
    </>
  )
}