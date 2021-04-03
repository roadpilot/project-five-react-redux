import React from 'react'
import BetForm from './BetForm_c.js'

const GameCard = ({ game, game_id, buttonText, buttonHandler, bets }) => {
let gametime = ""
let spread = ""
let spreadVal = ""
let spreadFav = ""
// let spreadUdog = ""
let spreadOdds = ""
let spreadWin = ""
let spreadRes = ""
let spreadId = ""
let moneyline = ""
let moneylineId = ""
let moneyOdds = ""
let moneyWin = ""
let total = ""
let totalId = ""
let totalWin = ""
let scoreAway = ""
let scoreHome = ""
let gameTotal = ""
let totalOdds = ""
if (game){
  if (game.odds && game.odds[0].spread){
    if (game.odds[0].spread.current.away<0){
      spreadFav = "away"
      // spreadUdog = "home"
    } else {
      spreadFav = "home"
      // spreadUdog = "away"
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
    totalOdds = game.odds[0].total.current.overOdds
    gameTotal = game.odds[0].total.current.total
    // console.log(game.odds[0].total)
  }

  const winCalc = (amount, odds) => {
    console.log(amount,odds)
    let win=(amount*-((1/odds)*100)).toFixed(0)
    let win_disp = (win > 0) ? win : "";
    return win_disp
  }

  const spread_bet=bets.find(bet => bet.bet_type === "spread")
  console.log("SPREAD", spread_bet)
  if (spread_bet){
    spread=spread_bet.bet_amount
    spreadId = spread_bet.bet_id
    spreadOdds=spread_bet.bet_odds
    spreadWin = winCalc(spread,spreadOdds)
  }

  const moneyline_bet=bets.find(bet => bet.bet_type === "moneyline")
  if (moneyline_bet){
    moneyline=moneyline_bet.bet_amount
    moneylineId = moneyline_bet.bet_id
    moneyOdds=moneyline_bet.bet_odds
    moneyWin = winCalc(moneyline,moneyOdds)
    // console.log(moneyWin)
  }

  const total_bet=bets.find(bet => bet.bet_type === "total")
  if (total_bet){
    total=total_bet.bet_amount
    totalId = total_bet.bet_id
    totalOdds=total_bet.bet_odds
    totalWin = winCalc(total,totalOdds)
  }

}

let buttonStyle = {}
let cardColor = "black"
if (game){
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
}

return (
    game ?
      <div className="flex-container">
        <div className="wrapper">
          <header className={`bg-${cardColor}-500`}>{game.details.league}: {game.summary}</header>
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

            <div>
              <BetForm 
              game_id={game_id} 
              betId={moneylineId} 
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
              betId={spreadId}
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
              betId={totalId} 
              betName={`Total (${gameTotal})`} 
              betType="total" 
              betAmount={total} 
              betOdds={totalOdds} 
              betWin={totalWin} 
              />
            </div>
        </div>
        </div>
        :
        null
  )
}

export default GameCard