pins =  @pins.select{|pin|
  pin.board_id == params[:board_id].to_i}

json.array! pins do |pin|
  json.extract! pin, :id, :author_id, :title, :link_url, :board_id
  json.photoUrl url_for(pin.photo)
  json.boards pin.boards
end