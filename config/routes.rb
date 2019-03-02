Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :new, :update]
    resources :users, only: [:show] do
      resources :boards, only: [:index]
    end
    resources :boards, only: [:show] do
      resources :pins, only: [:index]
    end
    resources :boards, only: [:create, :update, :destroy]
    resources :pins, only: [:show, :create, :update, :destroy]
    resources :pins_boards, only: [:new, :create, :index, :destroy]
  end
 
end
