json.set! pin.id do 
  json.extract! pin, :id, :author_id, :title, :link_url
end