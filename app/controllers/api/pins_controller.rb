class Api::PinsController < ApplicationController
    def index
        @pins = Pin.all
    end

    def create
        @pin = Pin.new(pin_params)
        if @pin.save
            
            render :show
        else
            render json: @pin.errors.full_messages, status: :unprocessable_entity
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
            render json: @pin.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        
    end

    private
    def pin_params
        params.fetch(:pin, {}).permit(:author_id, :title, :link_url, :photo)
    end
end
