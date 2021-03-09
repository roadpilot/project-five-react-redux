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
      render json:  @game, status: :created
    else
      error_resp = {
        error: @game.errors.full_messages.to_sentence
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
