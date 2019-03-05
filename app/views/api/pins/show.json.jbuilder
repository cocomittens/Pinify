json.set! @pin.id do 
  json.extract! @pin, :id, :author_id, :title, :link_url, :board_id, :description
  json.photoUrl url_for(@pin.photo)
  json.boards @pin.boards
end