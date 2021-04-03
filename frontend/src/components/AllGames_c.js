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
      // const gameTime = new Date(game.schedule.date).toLocaleString().replace(":00","").slice(11)
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
    //     <div key={game.gameId} className="flex-container-list">
    //       <div className="wrapper">
    //         <header className="header-list">
    //           {gameTime} {game.details.league}: {game.summary}
    //         </header>
    //         <aside className="aside aside-1">
    //           <button 
    //           style={buttonStyle}
    //           onClick={()=>props.addGame(game.gameId)}
    //           >Add</button>
    //         </aside>
    //       </div>
    //     </div>
    //     // <GameCard key={game.gameId} game_id={game.gameId} buttonText="Add" buttonHandler={props.addGame} game={props.allGames.find(game_find => game_find.gameId === game.gameId)} bets={[]}/>
            // <div className="grid grid-cols-3 gap-4">
            <div
              key={game.gameId}
              className={`px-5 py-3 rounded-lg transform transition bg-${cardColor}-500 hover:bg-${cardColor}-400 hover:-translate-y-0.5 focus:ring-${cardColor}-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-${cardColor}-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base`}
              href="#"
              onClick={()=>props.addGame(game.gameId)}
            >
            {game.gameTime} {game.details.league}: {game.summary}
            </div>
            // </div>
            


      )
    })
    // <div className="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
    //   <div
    //     className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2"
    //   >
    //     <div className="xl:max-w-xl">
    //       <img className="h-10" src="/img/logo.svg" alt="Workcation" />
    //       <img
    //         className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
    //         src="/img/beach-work.jpg"
    //         alt="Woman workcationing on the beach"
    //       />
    //       <h1
    //         className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl"
    //       >
    //         You can work from anywhere.
    //         <br className="hidden lg:inline" />
    //         <span className="text-indigo-500">Take advantage of it.</span>
    //       </h1>
    //       <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
    //         Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy
    //         some nice weather even when you're not on vacation.
    //       </p>
    //       <div className="mt-4 sm:mt-6">
    //         <a
    //           className="inline-block px-5 py-3 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
    //           href="#"
    //         >
    //           Book your escape
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="hidden relative lg:block 2xl:col-span-3">
    //     <img
    //       className="absolute inset-0 w-full h-full object-cover object-center"
    //       src="/img/beach-work.jpg"
    //       alt="Woman workcationing on the beach"
    //     />
    //   </div>
    // </div>
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