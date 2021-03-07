Rails.application.routes.draw do
  # resources :bets
  # resources :games
  # resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/api/v1/login", to: "sessions#create"
  namespace :api do
    namespace :v1 do
      resources :users
    end
  end
end
