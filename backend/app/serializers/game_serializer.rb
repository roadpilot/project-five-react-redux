class GameSerializer
  include FastJsonapi::ObjectSerializer
  # attributes :name, :start_date, :end_date, :bet_type
  attributes :gameid

  # byebug
  attribute :bets do |game|
    game.bets.map do |bet|
      {
        bet_id: bet.id,
        bet_type: bet.bet_type,
        bet_status: bet.bet_status,
        bet_amount: bet.bet_amount,
        bet_odds: bet.bet_odds
      }
    end
  end

  # has_many :locations, serializer: LocationSerializer
end
