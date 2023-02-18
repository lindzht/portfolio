Rails.application.routes.draw do
  
  resources :descriptions
  resources :projskills
  resources :skills
  resources :projects
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
