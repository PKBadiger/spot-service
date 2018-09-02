require 'register_customer'
class RegisterController < ApplicationController 
    def index
    end

    def register_customer
        @reponse = RegisterCustomer.register_customer(params[:firstName],params[:lastName], params[:mobNumber],params[:emailId],params[:password],params[:confirmPassword])
        render json: {success: 'success'}
    end
end