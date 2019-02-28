class Api::BoardsController < ApplicationController
    def create
        @board = Board.new(board_params)
        if @board.save
            render :show
        else
            render json: {errors: "Invalid entry"}, status: :not_found
        end
    end

    def new
        @board = Board.new
    end

    def show
        @board = Board.find(params[:id])
    end

    def update
        @board = Board.find(params[:id])
        if @board.update(board_params)
            render :show
        else
            render json: {errors: "Invalid entry"}, status: :not_found
        end
    end

    def destroy
        
    end

    private
    def board_params
        params.fetch(:board, {}).permit(:author_id, :title, pin_ids: [])
    end
end
