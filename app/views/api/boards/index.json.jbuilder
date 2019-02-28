json.array! @boards do |board|
  json.extract! board, :id, :author_id, :title
end