class Api::UsersController < ApplicationController
    def create
        @user = Api::User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages
        end
    end

    def new
        @user = Api::User.new
    end

    def show
        
    end

    def update

    end

    def edit

    end

    private
    def user_params
        params.fetch(:user, {}).permit(:username, :email, :password)
    end
end
