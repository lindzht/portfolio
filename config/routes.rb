Rails.application.routes.draw do
  resources :images, only: [:index, :show]
  resources :projects, only: [:index, :show]
  resources :skills, only: [:index, :show]
  

  # resources :descriptions
  # resources :projskills
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
