json.set! board.id do 
  json.extract! board, :id, :author_id, :title
  pins = board.pins.map do |pin|
    pin.photoUrl = url_for(pin.photo)

  end
  json.set! :pins, pins
end