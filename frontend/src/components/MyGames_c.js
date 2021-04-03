import React from 'react'
import { connect } from 'react-redux'
import GameCard from './GameCard_c'
import { dropGame } from '../actions/myGames_a'

const MyGames = props => {
    let games = props.allGames

    const mygameIds = props.myGames.map(mygame => mygame.attributes.gameid)
    games = games.filter(function (el) {
      return (mygameIds.includes(el.gameId))
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
    
  const gameCards = games.length > 0 ?
    games.map(game => {
      const gc = props.myGames.find(g => game.gameId === g.attributes.gameid)
      const bets = gc.attributes.bets
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
