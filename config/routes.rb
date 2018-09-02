Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => 'dashboard#index'

  get 'login', to: 'login#index'

  get 'register', to: 'register#index'

  get 'register/register_customer' => 'register#register_customer'
end
