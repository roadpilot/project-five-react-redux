import React from 'react'
import { connect } from 'react-redux'
import GameCard from './GameCard_c'
import { dropGame } from '../actions/myGames_a'

const MyGames = props => {
  const gameCards = props.myGames.length > 0 ?
    props.myGames.map(gc => {
      const game = props.allGames.find(game => game.gameId === gc.attributes.gameid)
      const bets = gc.attributes.bets
      console.log("GAME", game)
      const gameTime = game ? new Date(game.schedule.date).toLocaleString().replace(":00","").slice(11) : null
      // console.log(gc.attributes.gameid)
      // console.log("BETS", bets)
      // debugger
      return (
        <GameCard 
        key={gc.id} 
        game_id={gc.id} 
        buttonText="Drop" 
        buttonHandler={props.dropGame} 
        game={game} 
        bets={bets}
        gameTime
        />
      )}
    ) :
    null
  return gameCards
}

const mapStateToProps = state => {
  return {
    allGames: state.allGames,
    myGames: state.myGames
  }
}

export default connect(mapStateToProps,{dropGame})(MyGames)
