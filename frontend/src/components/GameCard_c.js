import React from 'react'
import BetForm from './BetForm_c.js'

const GameCard = ({ game, game_id, buttonText, buttonHandler, bets }) => {
let gametime = ""
let spread = ""
let spreadVal = ""
let spreadFav = ""
let spreadUdog = ""
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
if (game){
  if (game.odds && game.odds[0].spread){
    if (game.odds[0].spread.current.away<0){
      spreadFav = "away"
      spreadUdog = "home"
    } else {
      spreadFav = "home"
      spreadUdog = "away"
    }
    // console.log(t.gameId,t.odds[0].spread)
    // console.log(spreadFav)
    spreadVal = game.odds[0].spread.current[spreadFav]
    spreadOdds = game.odds[0].spread.current[spreadFav+'Odds']
  }
  if (game.odds && game.odds[0].moneyline){
    // moneyAway = game.odds[0].moneyline.current.awayOdds
    // moneyHome = game.odds[0].moneyline.current.homeOdds
    moneyOdds = game.odds[0].moneyline.current[spreadFav+'Odds']
  }
  if (typeof game.odds === 'object'){
    // console.log(game.odds[0])
    overOdds = game.odds[0].total.current.overOdds
    gameTotal = game.odds[0].total.current.total
    // console.log(game.odds[0].total)
  }

  const winCalc = (amount, odds) => {
    // console.log(amount,odds)
    let win=(amount*-((1/odds)*100)).toFixed(0)
    let win_disp = (win > 0) ? win : "";
    return win_disp
  }

  const spread_bet=bets.find(bet => bet.bet_type === "spread")
  console.log("SPREAD", spread_bet)
  if (spread_bet){
    spread=spread_bet.bet_amount
    spreadOdds=spread_bet.bet_odds
    spreadWin = winCalc(spread,spreadOdds)
  }
  // console.log(spread)
}

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