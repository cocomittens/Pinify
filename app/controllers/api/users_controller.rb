class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: :not_found
        end
    end

    def new
        @user = User.new
    end

    def show
        if params[:id].to_i.to_s == params[:id]
            @user = User.find(params[:id])
        else
            @user = User.find_by(username: params[:id])
        end
    end

    def update
        @user = User.find(params[:id])
        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages
        end
    end

    private
    def user_params
        params.fetch(:user, {}).permit(:username, :email, :password, :first_name, :last_name, :photo)
    end
end
