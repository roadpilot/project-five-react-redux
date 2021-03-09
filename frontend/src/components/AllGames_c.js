import React from 'react'
import GameCard from './GameCard_c'
import { connect } from 'react-redux'
import { addGame } from '../actions/allGames_a'

const AllGames = props => {
    let games = props.allGames
    let statuses = ['canceled']
    games = games.filter(function (el) {
      return (!statuses.includes(el.status))
    });

  const gameCards = props.allGames.length > 0 
  ?
    games.map(game => {
      // console.log(game.gameId)
      return (
        <GameCard key={game.gameId} game_id={game.gameId} buttonText="Add" buttonHandler={props.addGame} game={props.allGames.find(game_find => game_find.gameId === game.gameId)} bets={[]}/>
      )
    })
 :
    null
  return gameCards
}

const mapStateToProps = state => {
  return {
    allGames: state.allGames
  }
}

export default connect(mapStateToProps,{addGame})(AllGames)