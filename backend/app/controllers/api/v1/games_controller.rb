class Api::V1::GamesController < ApplicationController
  def index
    if current_user
      @games = current_user.games
      render json: GameSerializer.new(@games)
    else
      # render json: {
      #   error: "You must be logged in to see games"
      # }
    end
  end

  def create
    @game = current_user.games.build(game_params)
    if @game.save
      render json:  GameSerializer.new(@game), status: :created
    else
      error_resp = {
        error: @game.errors.full_messages.to_sentence
      }
      render json: error_resp, status: :unprocessable_entity
    end
  end

  def destroy
    @game = Game.find(params[:id])
    if @game.destroy
      @game.bets.destroy_all
      render json:  { data: "game successfully destroyed" }, status: :ok
    else
      error_resp = {
        error: "game not found and not destroyed"
      }
      render json: error_resp, status: :unprocessable_entity
    end
  end

  private
    # Only allow a trusted parameter "white list" through.
    def game_params
      params.require(:game).permit(:gameid)
    end
end
