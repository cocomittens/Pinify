class Api::PinsBoardsController < ApplicationController
    def new
        @pins_board = PinsBoard.new
    end
    
    def create
        @pins_board = PinsBoard.new(pins_board_params)
        if @pins_board.save
            render :show
        else
            render json: @pins_board.errors, status: :unprocessable_entity
        end
    end
    
    def index
        @pins_boards = PinsBoard.all
    end

    def destroy
        @pins_board = PinsBoard.find(params[:id])
        if @pins_board.destroy
            redirect_to '/'
        else
            render json: {errors: "Cannot delete pin"}, status: :unprocessable_entity
        end
    end

    private
    def pins_board_params
        params.fetch(:pins_board, {}).permit(:board_id, :pin_id)
    end
end
