# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def seed_image(file_name)
  File.read(File.join(Rails.root, "public/#{file_name}.png"))
end

User.create!([{username: 'mittens', email: 'mittens@mittens.com', password: '123456', first_name: 'Mittens', last_name: 'Mittens'}])
Board.create!([{id: 1, author_id: 1, title: 'cats'}])
# pins = Pin.create!([{id: 1, author_id: 1, board_id: 1, board_ids: [1]}])
