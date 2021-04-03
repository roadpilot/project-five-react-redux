import React from 'react'
// import GameCard from './GameCard_c'
import { connect } from 'react-redux'
import { addGame } from '../actions/allGames_a'

const AllGames = props => {
    let games = props.allGames

    let statuses = ['canceled']
    games = games.filter(function (el) {
      return (!statuses.includes(el.status))
    });

    if (props.leagueFilter!==""){
      const leagueFilter = props.leagueFilter.toUpperCase()
      games = games.filter(function (el) {
        return (el.details.league===leagueFilter)
      });
    }
    
    const mygameIds = props.myGames.map(mygame => mygame.attributes.gameid)
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
      let cardColor = "black"
      switch(game.details.league) {
        case "MLB":
          cardColor = "indigo"
          break;
        case "NCAAB":
          cardColor = "red"
          break;
        case "NBA":
          cardColor = "green"
          break;
        case "NHL":
          cardColor = "yellow"
          break;
        default:
          cardColor = "black"
      }
      
      return (
        <div
          key={game.gameId}
          className={`px-5 py-3 rounded-lg transform transition bg-${cardColor}-500 hover:bg-${cardColor}-400 hover:-translate-y-0.5 focus:ring-${cardColor}-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-${cardColor}-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base`}
          href="#"
          onClick={()=>props.addGame(game.gameId)}
        >
        {game.gameTime} {game.details.league}: {game.summary}
        </div>
      )
    })
 :
    null
  return <div className="m-5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">{gameCards}</div>
}

const mapStateToProps = state => {
  return {
    allGames: state.allGames,
    myGames: state.myGames
  }
}

export default connect(mapStateToProps,{addGame})(AllGames)