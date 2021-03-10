import React from 'react'
import { connect } from 'react-redux'
import GameCard from './GameCard_c'
import { dropGame } from '../actions/myGames_a'

const MyGames = props => {
  const gameCards = props.myGames.length > 0 ?
    props.myGames.map(t => {
      return (
        <GameCard key={t.id} game_id={t.id} buttonText="Drop" buttonHandler={props.dropGame} game={props.allGames.find(game => game.gameId === t.attributes.gameid)} bets={t.attributes.bets}/>
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
