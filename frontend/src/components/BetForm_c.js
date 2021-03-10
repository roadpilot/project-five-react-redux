import React from 'react';
import { addBet } from '../actions/myGames_a'
import { connect } from 'react-redux'


const BetForm = ({ game_id, betId, betName, betType, betOdds, betAmount, betWin, addBet }) => {

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
      bet_type: form.bet_type.value,
      bet_amount: form.bet_amount.value,
      bet_odds: form.bet_odds.value,
      game_id: form.game_id.value
    }
    addBet(betData)
  }

    return(
            <form>
                <span style={{"width":"40%","textAlign":"right"}}>
                  <span>
                    {betName}:
                  </span>
                  <span>
                    Bet:
                  </span>
                  <span>
                      <input type="hidden" name="game_id" value={game_id}/>
                      <input type="hidden" name="bet_id" value={betId}/>
                      <input type="hidden" name="bet_type" value={betType}/>
                      <input type="hidden" name="bet_odds" value={betOdds}/>
                      <input 
                      size="5"
                      type="text"
                      name="bet_amount"
                      onChange={changeHandler}
                      defaultValue={betAmount}
                      />
                  </span>
                </span>
                <span style={{"width":"10%"}}>
                  @{betOdds}
                </span>
                <span style={{"width":"40%","textAlign":"left"}}>
                  <span>
                    To win:
                  </span>
                  <span>
                      <input 
                      disabled
                      size="5"
                      type="text"
                      name="win"
                      defaultValue={betWin}
                      />
                  </span>
                  <span>
                      <input 
                      type="submit"
                      value="Bet this"
                      onClick={submitHandler}
                      />
                  </span>
                </span>
              </form>

    )
}

// export default connect(mapStateToProps, { updateBetForm })(BetForm);
export default connect(null,{addBet})(BetForm)
//export default BetForm;
