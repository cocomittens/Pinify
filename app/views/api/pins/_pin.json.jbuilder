json.set! pin.id do 
  json.extract! pin, :id, :author_id, :title, :link_url, :board_id
  json.photoUrl url_for(pin.photo)
  json.boards pin.boards
end