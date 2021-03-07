# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Game.destroy_all
Bet.destroy_all

a=User.create(name: "Martin", username: "mda", password: "password")
b=a.games.create(gameid: 25290)
c=b.bets.create(bet_type: "spread", amount:1000, bet_status: "placed")