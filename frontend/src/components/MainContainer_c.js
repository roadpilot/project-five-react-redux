import React from 'react'
import AllGames from './AllGames_c.js'
import MyGames from './MyGames_c.js'

const MainContainer = (props) => {
  return (
    <div className="MainContainer pt-20">
      <MyGames/>
        <div
        className={`ml-5 px-5 py-3 text-center rounded-lg bg-gray-500 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base`}
        >
        Click any game below to add to your games...
        </div>
      <AllGames leagueFilter={props.leagueFilter}/>
    </div>
  )
}

export default MainContainer
