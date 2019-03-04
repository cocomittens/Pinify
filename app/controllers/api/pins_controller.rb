class Api::PinsController < ApplicationController
    def index
        @pins = Pin.all
        
        
    end

    def create
        @pin = Pin.new(pin_params)
        if @pin.save
            @pb = PinsBoard.new({board_id: @pin.board_id, pin_id: @pin.id})
            @pb.save!
            render :show
        else
            render json: @pin.errors, status: :unprocessable_entity
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
        @pin = Pin.find(params[:id])
        if @pin.destroy
            redirect_to '/'
        else
            render json: {errors: "Cannot delete pin"}, status: :unprocessable_entity
        end
    end

    private
    def pin_params
        params.fetch(:pin, {}).permit(:author_id, :title, :link_url, :photo, :board_id)
    end
end
