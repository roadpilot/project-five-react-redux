import React, { useState } from 'react';
import { addBet, deleteBet } from '../actions/myGames_a'
import { connect } from 'react-redux'


const BetForm = ({ game_id, betId, betName, betType, betOdds, betAmount, betWin, addBet, deleteBet }) => {
  const [betAmountInput, setbetAmountInput] = useState(betAmount)
  const [errorMsg, setErrorMsg] = useState()
  const winCalc = (betAmountInput*-((1/betOdds)*100)).toFixed(0)
  betWin = (winCalc > 0) ? winCalc : ""
  // let errorMsg = "FOO"
 
  const changeHandler = event => {
    // console.log(event.target.value)
    const target = event.target
    // const form = target.form
    const regEx = /^[0-9\b]+$/
    if (target.value === '' || regEx.test(target.value)) {
      setbetAmountInput(event.target.value)
setErrorMsg("")
    }
    else {
      // alert('Numbers only')
setErrorMsg("Please enter numbers only")
    }
    // //   let win=(form.bet_amount.value*-((1/form.bet_odds.value)*100)).toFixed(0)

    // // let win_disp = (win > 0) ? win : "";
    // // // console.log(win)
    // // betWin = win
    // // form.win.value = win_disp
    // betWin = "FOO"//event.target.value
    // const itemFilter = (event) => setInputFilter(event.target.value.toLowerCase());
  }

  const submitHandler = event => {
    event.preventDefault()
    const form = event.target.form
    console.log("TEST",event.target.form)
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
    // event.preventDefault()
    const form = event.target.form
    console.log("TEST",event.target.form)
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
      <form>
        <input type="hidden" name="game_id" value={game_id}/>
        <input type="hidden" name="bet_id" value={betId}/>
        <input type="hidden" name="bet_type" value={betType}/>
        <input type="hidden" name="bet_odds" value={betOdds}/>
        <div className="bet-container">
          <div className="bet-items">
            {betName} Bet:
            <input 
            size="5"
            type="text"
            name="bet_amount"
            value={betAmountInput}
            onChange={changeHandler}
            // defaultValue={betAmount}
            />
          </div>
          <div className="bet-items">
            @{betOdds}
          </div>
          <div className="bet-items">
            To win:
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
            className='w-half text-center uppercase bg-green-300 cursor-pointer'
            value={buttonLabel}
            onClick={submitHandler}
            />
            {
            (betId !== "")?
              <input 
              type="button"
              className='w-half text-center uppercase bg-red-300 cursor-pointer p-20'
              value="X"
              onClick={deleteHandler}
              style={{"color":"red","fontWeight":"bold"}}
              />
            :
              null
            }
          </div>
        </div>        
        <p className="text-red-400">{errorMsg}</p>
      </form>
    )
}

// export default connect(mapStateToProps, { updateBetForm })(BetForm);
export default connect(null,{addBet, deleteBet})(BetForm)
//export default BetForm;
