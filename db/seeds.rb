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
Deviation.destroy_all

guest = User.create(username: 'Guest', email: 'guest.com', password: 'password', DOB: DateTime.new(1925, 12, 25))

 
user1 = User.create(username: 'pjacubinas', email: 'pjacubinas@NSDart.com', password: '123456', DOB: DateTime.new(1991, 10, 11))

user2 = User.create(username: 'Lucky978', email: 'Lucky978@NSDart.com', password: '123456', DOB: DateTime.new(1991, 10, 11))

user3 = User.create(username: 'TheOne', email: 'TheOne@NSDart.com', password: '123456', DOB: DateTime.new(1991, 10, 11))

user4 = User.create(username: 'TheOnly', email: 'TheOnly@NSDart.com', password: '123456', DOB: DateTime.new(1991, 10, 11))

user5 = User.create(username: 'CrabDaddy', email: 'CrabDaddy@NSDart.com', password: '123456', DOB: DateTime.new(1991, 10, 11))


dev1 = Deviation.create(
    title: "Space Whales",
    description: "Playing around with an idea or two...something that isn't war or death...or rain....or wasteland....or depressing...or whatever....I've seen these over on some other artists portfolios and they're kinda fun and interesting! so, i thought i'd give it a try and see how it came out.

    rendered in iRay, and post done in PS CC.
    
    thoughts comments, questions are always welcome, wanted and needed! please sound off!!",
    artist_id: User.find_by(username: 'pjacubinas').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/YvJXdLcPoGLWSSMvyMRaWNT4"), filename: 'space_whale.jpg')

dev2 = Deviation.create(
    title: "Day 174: Pogo and Ronan",
    description: "It has been such a treat to get to draw so many furbabies recently! Today’s finished drawing features the adorable Pogo and Ronan!",
    artist_id: User.find_by(username: 'Lucky978').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/day_174__pogo_and_ronan_by_lucky978_ddzyw08-fullview.jpg"), filename: 'dogs_color_pencils.jpg')

dev3 = Deviation.create(
    title: "Floating",
    description: "That feeling you get when you don't know what to do and have soo much time to do things.",
    artist_id: User.find_by(username: 'TheOnly').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/Astronaut-Lost-In-Space-Background-Minimalistic-1920x1080-.jpg"), filename: 'floating.jpg')

dev4 = Deviation.create(
    title: "Center of Space Garden",
    description: "I wanted to try to capture the feeling I had when first was exposed to the concept of space. My love for the night sky and gardens combined!",
    artist_id: User.find_by(username: 'TheOne').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/astronaut-creative-artwork-deviantart-zq.jpg"), filename: 'secret_space_garden.jpg')

dev5 = Deviation.create(
    title: "The Night Sky as an Anime Chick",
    description: "My representation of what the beautiful night sky would look like as an anime waifu. Let me know your thoughts!",
    artist_id: User.find_by(username: 'CrabDaddy').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/space-dark-anime-girls-picture-in-picture-Ykino-1399207.jpg"), filename: 'night_sky_princess.jpg')

dev6 = Deviation.create(
    title: "Fireflies Paradise",
    description: "I like fireflies and I like Anime girls. Do the math and you get this! :)",
    artist_id: User.find_by(username: 'CrabDaddy').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/papers.co-au47-girl-anime-star-space-night-illustration-art-flare-3840x2400.jpg"), filename: 'fireflies_paradise.jpg')

dev7 = Deviation.create(
    title: "Ready for Space",
    description: "My fun doodle of how I imagined the people in the SpaceX launch were feeling.",
    artist_id: User.find_by(username: 'TheOnly').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/Astronaut-Ufo-Minimalism-HD-Artist-4k-Wallpapers-Images-.jpg"), filename: 'ready_for_space.jpg')

dev8 = Deviation.create(
    title: "Watering Plants in Space",
    description: "A creative depiction of how watering plants would be in space 1000 years from now.",
    artist_id: User.find_by(username: 'TheOnly').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/Minimalist-Wallpaper-21-1920x1200-.jpg"), filename: 'watering_plants_space.jpg')

dev9 = Deviation.create(
    title: "Finding The Bringhtest Star",
    description: "How I feel when I am exploring new land and new sights. Imagining how traveling to other solar systems would be.",
    artist_id: User.find_by(username: 'TheOne').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/astronaut-finding-the-brightest-star-4k-3q.jpg"), filename: 'finding_the_brightest_star.jpg')

dev10 = Deviation.create(
    title: "The Tip of The Galaxy",
    description: "The farthest most outskirts of the universe... Is where I will be.",
    artist_id: User.find_by(username: 'pjacubinas').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/astronaut-scifi-art-5k-8c.jpg"), filename: 'tip_of_the_galaxy.jpg')

