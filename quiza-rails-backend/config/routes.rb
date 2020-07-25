Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :courses do
    resources :lessons
  end

  post '/evaluate-answers', to: 'questions#evaluate'
  namespace :admin do
    resources :courses do
      resources :lessons do
        resources :questions
      end
    end
    get '/auth/login', to: 'authentications#login'

  end
end
