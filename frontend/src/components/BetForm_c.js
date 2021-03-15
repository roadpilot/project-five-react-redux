import React from 'react';
import { addBet, deleteBet } from '../actions/myGames_a'
import { connect } from 'react-redux'


const BetForm = ({ game_id, betId, betName, betType, betOdds, betAmount, betWin, addBet, deleteBet }) => {

  const changeHandler = event => {
    // console.log(event.target.form)
    let win=(event.target.form.bet_amount.value*-((1/event.target.form.bet_odds.value)*100)).toFixed(0)
    let win_disp = (win > 0) ? win : "";
    // console.log(win)
    event.target.form.win.value = win_disp
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
        <div class="bet-container">
          <div class="bet-items">
            {betName} Bet:
            <input 
            size="5"
            type="text"
            name="bet_amount"
            onChange={changeHandler}
            defaultValue={betAmount}
            />
          </div>
          <div class="bet-items">
            @{betOdds}
          </div>
          <div class="bet-items">
            To win:
            <input 
            disabled
            size="5"
            type="text"
            name="win"
            defaultValue={betWin}
            />
            <input 
            type="submit"
            value={buttonLabel}
            onClick={submitHandler}
            />
            {
            (betId !== "")?
            <input 
            type="button"
            value="X"
            onClick={deleteBet}
            style={{"color":"red","font-weight":"bold"}}
            />
            :null
            }
          </div>
        </div>        
      </form>
    )
}

// export default connect(mapStateToProps, { updateBetForm })(BetForm);
export default connect(null,{addBet, deleteBet})(BetForm)
//export default BetForm;
