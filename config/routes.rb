Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults:{format: :json} do 
    resources :users, only: [:new, :create, :show, :index]
    resource :session, only:[:new, :create, :destroy]
    resources :deviations do
      # usually only index, create, show are the nested actions
      resources :favorites, only: [:create]
      resources :comments, only: [:index] 
    end
    resources :comments, only: [:show, :destroy, :create, :update]
    resources :favorites, only: [:destroy]
  end
end
