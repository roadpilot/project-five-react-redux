import React from 'react'
import AllGames from './AllGames_c.js'
import MyGames from './MyGames_c.js'

const MainContainer = () => {
  return (
    <div className="MainContainer">
      <MyGames/>
      <AllGames/>
    </div>
  )
}

export default MainContainer
