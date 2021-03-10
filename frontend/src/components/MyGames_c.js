import React from 'react'
import { connect } from 'react-redux'
import GameCard from './GameCard_c'
import { dropGame } from '../actions/myGames_a'

const MyGames = props => {
  const gameCards = props.myGames.length > 0 ?
    props.myGames.map(gc => {
      const game=props.allGames.find(game => game.gameId == gc.attributes.gameid)
      console.log(gc.attributes.gameid)
      console.log(game)
      // debugger
      return (
        <GameCard key={gc.id} game_id={gc.id} buttonText="Drop" buttonHandler={props.dropGame} game={game} bets={gc.attributes.bets}/>
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
