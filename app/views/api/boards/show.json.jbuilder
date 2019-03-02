json.set! @board.id do 
  json.extract! @board, :id, :author_id, :title
  json.pins @board.pins
end