class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: {errors: "Invalid credentials"}
        end
    end

    def destroy
        if current_user
            logout!
            render json: {}
        else
            render json: {}, status: :not_found
        end
    end
end
