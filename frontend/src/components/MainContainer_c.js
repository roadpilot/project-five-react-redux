import React from 'react'
import AllGames from './AllGames_c.js'
import MyGames from './MyGames_c.js'

const MainContainer = (props) => {
  return (
    <div className="MainContainer pt-20">
      <MyGames/>
      <AllGames leagueFilter={props.leagueFilter}/>
    </div>
  )
}

export default MainContainer
