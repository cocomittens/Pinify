json.set! @pins_board.id do 
  json.extract! @pins_board, :board_id, :pin_id
end