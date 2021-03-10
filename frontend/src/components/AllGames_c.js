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

    const mygameIds = props.myGames.map(mygame => mygame.attributes.gameid)
    // console.log(mygameIds)
    games = games.filter(function (el) {
      return (!mygameIds.includes(el.gameId))
    });

    games.sort(function(a, b) {
      var nameA = a.schedule.date.toUpperCase(); // ignore upper and lowercase
      var nameB = b.schedule.date.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
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
    allGames: state.allGames,
    myGames: state.myGames
  }
}

export default connect(mapStateToProps,{addGame})(AllGames)