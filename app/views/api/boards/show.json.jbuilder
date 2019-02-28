json.set! @board.id do 
  json.extract! @board, :id, :author_id, :title
end