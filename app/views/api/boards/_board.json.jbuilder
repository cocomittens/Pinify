json.set! board.id do 
  json.extract! board, :id, :author_id, :title, :pin_ids
  json.pins board.pins
end