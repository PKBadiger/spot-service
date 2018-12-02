Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => 'dashboard#index'

  get 'login', to: 'login#index'

  get 'terms_and_conditions', to: 'dashboard#index'

  get 'about_us', to: 'dashboard#index'

  get 'faqs', to: 'dashboard#index'

  get 'contact_us', to: 'dashboard#index'

  get 'policies', to: 'dashboard#index'

  get 'register', to: 'register#index'

  get 'register/register_customer' => 'register#register_customer'
end
