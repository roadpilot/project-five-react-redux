class CreateBets < ActiveRecord::Migration[6.1]
  def change
    create_table :bets do |t|
      t.integer :user_id
      t.integer :game_id
      t.integer :bet_amount
      t.string :bet_type
      t.string :bet_status
      t.integer :bet_odds

      t.timestamps
    end
  end
end
