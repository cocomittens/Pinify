pins =  @pins.select{|pin|
  pin.board_id == params[:board_id].to_i}

pins.each do |pin|
  json.partial! 'api/pins/pin', pin: pin
end