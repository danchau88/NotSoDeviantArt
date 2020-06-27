# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
# t.date format:
#   date = DateTime.new(yyyy, mm, dd)
#   d1 = DateTime.new(2015, 6, 22)

User.destroy_all

guest = User.create(username: 'Guest', email: 'guest.com', password: 'password', DOB: DateTime.new(1925, 12, 25))