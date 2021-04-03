import React, { useState } from 'react';
import { addBet, deleteBet } from '../actions/myGames_a'
import { connect } from 'react-redux'

const BetForm = ({ game_id, betId, betName, betType, betOdds, betAmount, betWin, addBet, deleteBet }) => {
  const [betAmountInput, setbetAmountInput] = useState(betAmount)
  const [errorMsg, setErrorMsg] = useState()
  const winCalc = betOdds<0 ? (betAmountInput*-((1/betOdds)*100)).toFixed(0) : ((betAmountInput/100) * betOdds)
  betWin = (winCalc > 0) ? winCalc : ""
 
  const changeHandler = event => {
    const target = event.target
    const regEx = /^[0-9\b]+$/
    if (target.value === '' || regEx.test(target.value)) {
      setbetAmountInput(event.target.value)
setErrorMsg("")
    }
    else {
setErrorMsg("Please enter numbers only")
    }
  }

  const submitHandler = event => {
    event.preventDefault()
    const form = event.target.form
    const betData ={
      id: form.bet_id.value,
      bet_type: form.bet_type.value,
      bet_amount: form.bet_amount.value,
      bet_odds: form.bet_odds.value,
      game_id: form.game_id.value
    }
    addBet(betData)
  }

  const deleteHandler = event => {
    const form = event.target.form
    const betData ={
      id: form.bet_id.value,
      game_id: form.game_id.value
    }
    deleteBet(betData)
  }
    let buttonLabel="Bet This"
    if (betId !== "") {
      buttonLabel = "Update"
    }

    return(
      betOdds ?
      <form>
        <input type="hidden" name="game_id" value={game_id}/>
        <input type="hidden" name="bet_id" value={betId}/>
        <input type="hidden" name="bet_type" value={betType}/>
        <input type="hidden" name="bet_odds" value={betOdds}/>
        <div className="bet-container">
          <div className="bet-items">
            {betName} Bet:&nbsp;
            <input 
            size="5"
            type="text"
            name="bet_amount"
            value={betAmountInput}
            onChange={changeHandler}
            // defaultValue={betAmount}
            className="border-2 focus:outline-none focus:ring-2 rounded-lg"
            autoComplete="off"
            />
          </div>
          <div className="bet-items">
            @{betOdds}
          </div>
          <div className="bet-items">
            To win:&nbsp;
            <input 
            disabled
            size="5"
            type="text"
            name="win"
            value={betWin}
            // defaultValue={betWin}
            />
            <input 
            type="submit"
            className='w-1/3 text-center uppercase bg-green-500 cursor-pointer rounded-lg transform transition hover:bg-green-300 hover:-translate-y-0.5 font-semibold text-sm text-white shadow-lg sm:text-base'
            value={buttonLabel}
            onClick={submitHandler}
            autoComplete="off"
            />
            {
            (betId !== "")?
              <input 
              type="button"
              className='w-1/4 text-center uppercase bg-gray-200 cursor-pointer rounded-lg transform transition hover:bg-gray-100 hover:-translate-y-0.5 font-semibold text-sm text-white shadow-lg sm:text-base'
              value="X"
              onClick={deleteHandler}
              style={{"color":"red","fontWeight":"bold"}}
              autoComplete="off"
              />
            :
              null
            }
          </div>
        </div>        
        <p className="text-red-400 w-full text-center">{errorMsg}</p>
      </form>
      :
      <div className="grid grid-cols-1">
      <div className="bg-gray-100">
        <div className="ml-60">
      No {betType} odds posted for this game
        </div>
      </div>
      </div>
    )
}

export default connect(null,{addBet, deleteBet})(BetForm)
