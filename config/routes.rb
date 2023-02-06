Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get "/api/v1/search", to: "api/v1/beaches#search"
  post "/api/v1/search", to: "api/v1/beaches#search"
  namespace :api do
    namespace :v1 do
      resources :beaches, only: [:index, :show] do
        resources :reviews, only: [:new, :create]
      end
    end
  end
  # Defines the root path route ("/")
  # root "articles#index"
end
