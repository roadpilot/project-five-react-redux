Rails.application.routes.draw do
  # resources :bets
  # resources :games
  # resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post "/api/v1/login", to: "api/v1/sessions#create"
  delete "/api/v1/logout", to: "api/v1/sessions#destroy"
  get "/api/v1/current_user", to: "api/v1/sessions#current_user"
  post "/api/v1/signup", to: "api/v1/users#create"
  namespace :api do
    namespace :v1 do
      resources :games do
        resources :bets
      end
    end
  end
end
