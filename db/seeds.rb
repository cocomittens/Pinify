# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([{username: 'mittens', email: 'mittens@mittens.com', password: '123456', first_name: 'Mittens', last_name: 'Mittens'}])
Board.create([{id: 1, author_id: 1, title: 'cats'}])
Pin.create([{id: 1, author_id: 'mittens', board_id: 1, photoUrl: ('/Users/cgripens/Desktop/AppAcademy/pinify/app/assets/images/cat1.png')}])
PinsBoard.create([{pin_id: 1, board_id: 1}])