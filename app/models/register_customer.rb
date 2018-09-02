class RegisterCustomer < ApplicationRecord
    def self.register_customer (fistName, lastName, mobNumber, emailId, password, confirmPassword)
        puts fistName
        puts lastName
        puts mobNumber
        puts emailId
        puts password
        puts confirmPassword
    end
end