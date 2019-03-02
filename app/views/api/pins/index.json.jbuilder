json.array! @pins do |pin|
  json.extract! pin, :id, :author_id, :title, :link_url
  json.photoUrl url_for(pin.photo)
end