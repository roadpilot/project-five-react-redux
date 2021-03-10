import React from 'react'
import BetForm from './BetForm_c.js'

const GameCard = ({ game, game_id, buttonText, buttonHandler }) => {
let gametime = ""
let spread = ""
let spreadVal = ""
let spreadFav = ""
let spreadOdds = ""
let spreadWin = ""
let spreadRes = ""
let moneyline = ""
let moneyOdds = ""
let moneyWin = ""
let total = ""
let totalWin = ""
let scoreAway = ""
let scoreHome = ""
let gameTotal = ""
let overOdds = ""
let buttonStyle = {}
return (
    game ?
      <div className="flex-container">
        <div className="wrapper">
          <header className="header">{game.details.league}: {game.summary}</header>
          <article className="main">
            <table width="100%">
              <tbody>
                <tr>
                  <td colSpan="2">Away</td>
                  <td colSpan="2">Home</td>
                </tr>
                <tr>
                  <td>Spread:</td>
                  <td>{spreadVal} ({spreadFav.substring(0,1)})</td>
                </tr>
              </tbody>
            </table>
          </article>
          <aside className="aside aside-1">{gametime}</aside>
          <aside className="aside aside-2"><button style={buttonStyle} onClick={()=>buttonHandler(game_id)}>{buttonText}</button></aside>
          <footer className="footer">
            Score: {scoreAway} - {scoreHome} ({game.status}) ({spreadRes})
            <div>
              <BetForm 
              game_id={game_id} 
              bet_id={game_id} 
              betName="Win (Favorite)" 
              betType="moneyline" 
              betAmount={moneyline} 
              betOdds={moneyOdds}
              betWin={moneyWin} 
              />
            </div>
            <div>
              <BetForm 
              game_id={game_id} 
              bet_id={game_id} 
              betName="Spread (Favorite)" 
              betType="spread" 
              betAmount={spread} 
              betOdds={spreadOdds} 
              betWin={spreadWin} 
              />
            </div>
            <div>
              <BetForm 
              game_id={game_id} 
              bet_id={game_id} 
              betName={`Total (${gameTotal})`} 
              betType="total" 
              betAmount={total} 
              betOdds={overOdds} 
              betWin={totalWin} 
              />
            </div>
          </footer>
        </div>
      </div>
      :
      null
  )
}

export default GameCard