json.array! @pins_boards do |pins_board|
  json.extract! pins_board, :id, :board_id, :pin_id
end