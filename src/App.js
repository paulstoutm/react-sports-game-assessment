import React from 'react'
import Game from './components/game/Game'
import raccoonImg from './assets/images/raccoon.png'
import squirrelImg from './assets/images/squirrel.png'
import bunnyImg from './assets/images/bunny.png'
import houndsImg from './assets/images/bunny.png'


function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: raccoonImg
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: squirrelImg
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: bunnyImg
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: houndsImg
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}


export default App