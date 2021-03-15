class Api::V1::BetsController < ApplicationController
  def create
    # bet_props = bet_params
    # bet_props[:user_id] = current_user.id
    # byebug
    @bet = current_user.bets.build(bet_params)
    @bet = Bet.find_or_create_by(game_id: bet_params[:game_id], id: bet_params[:id], bet_type: bet_params[:bet_type])
    @bet.bet_amount = bet_params[:bet_amount]
    @bet.bet_odds = bet_params[:bet_odds]
    @bet.user_id = current_user.id
    # byebug

    if @bet.save
      @game = @bet.game
      render json:  GameSerializer.new(@game), status: :created
    else
      error_resp = {
        error: @bet.errors.full_messages.to_sentence
      }
      render json: error_resp, status: :unprocessable_entity
    end
  end

  def destroy
    @bet = Bet.find(params[:id])
    @game = Game.find(@bet.game_id)
    if @bet.destroy
      render json:  GameSerializer.new(@game), status: :created
      # render json:  { data: "bet successfully destroyed" }, status: :ok
    else
      error_resp = {
        error: "bet not found and not destroyed"
      }
      render json: error_resp, status: :unprocessable_entity
    end
  end

  private
    # Only allow a trusted parameter "white list" through.
    def bet_params
      params.require(:bet).permit(:id, :game_id, :bet_odds, :bet_amount, :bet_type)
    end
end
