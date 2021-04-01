import React from 'react'
import AllGames from './AllGames_c.js'
import MyGames from './MyGames_c.js'

const MainContainer = (props) => {
  return (
    <div className="MainContainer pt-20">
      <MyGames/>
      <div className="ml-20 width-full centered">Click any game below to add to your games...</div>
      <AllGames leagueFilter={props.leagueFilter}/>
    </div>
  )
}

export default MainContainer
