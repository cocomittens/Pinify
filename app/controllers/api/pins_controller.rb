class Api::PinsController < ApplicationController
    def create
        @pin = Pin.new(pin_params)
        if @pin.save
            render :show
        else
            render json: {errors: "Cannot create pin"}, status: :forbidden
        end
    end

     def new
        @pin = Pin.new
    end

    def show
        @pin = Pin.find(params[:id])
    end

    def update
        @pin = Pin.find(params[:id])
        if @pin.update(pin_params)
            render :show
        else
            render json: {errors: "Cannot update pin"}, status: :forbidden
        end
    end

    def destroy
        
    end

    private
    def pin_params
        params.fetch(:pin, {}).permit(:author_id, :title, :link_url, board_ids: [])
    end
end
