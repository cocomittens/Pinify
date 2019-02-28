json.array! @pins do |pin|
  json.extract! pin, :id, :author_id, :title, :link_url
end