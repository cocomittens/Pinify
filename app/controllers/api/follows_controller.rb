class Api::FollowsController < ApplicationController
    def new
        @follow = Follow.new
    end

    def create
        @follow = Follow.new(follow_params)
        if @follow.save
            render :show
        else
            render json: @follow.errors.full_messages, status: :not_found
        end  
    end

    def destroy
        @follow = Follow.find(params[:id])
        if @follow.destroy
            render :show
        else
            render json: {errors: "Cannot unfollow user"}, status: :unprocessable_entity
        end
    end

    private
    def follow_params
        params.fetch(:follow, {}).permit(:follower_id, :followed_id)
    end
end
