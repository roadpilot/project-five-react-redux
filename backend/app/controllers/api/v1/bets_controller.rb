class Api::V1::BetsController < ApplicationController
  def create
    # bet_props = bet_params
    # bet_props[:user_id] = current_user.id
    # byebug
    @bet = current_user.bets.build(bet_params)
    @bet.user_id = current_user.id

    if @bet.save
      render json:  @bet, status: :created
    else
      error_resp = {
        error: @bet.errors.full_messages.to_sentence
      }
      render json: error_resp, status: :unprocessable_entity
    end
  end

  private
    # Only allow a trusted parameter "white list" through.
    def bet_params
      params.require(:bet).permit(:game_id, :bet_odds, :bet_amount, :bet_type)
    end
end
