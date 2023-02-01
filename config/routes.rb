Rails.application.routes.draw do
  resources :posts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
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
