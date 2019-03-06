json.set! pin.id do 
  json.extract! pin, :id, :author_id, :title, :link_url, :board_ids, :description
  json.photoUrl url_for(pin.photo)
end