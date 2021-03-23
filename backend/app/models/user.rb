class User < ApplicationRecord
    has_secure_password
    has_many :games
    has_many :bets, through: :games
    validates :name, :username, presence: true
    validates :username, uniqueness: true
end
