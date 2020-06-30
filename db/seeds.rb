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

user6 = User.create(username: 'kiki-doodle', email: 'kiki-doodle@NSDart.com', password: '123456', DOB: DateTime.new(1991, 10, 11))

user7 = User.create(username: 'KaijuSamurai', email: 'KaijuSamurai@NSDart.com', password: '123456', DOB: DateTime.new(1991, 10, 11))

user8 = User.create(username: 'CryptidCreations', email: 'CryptidCreations@NSDart.com', password: '123456', DOB: DateTime.new(1991, 10, 11))

user9 = User.create(username: 'Zeronis', email: 'Zeronis@NSDart.com', password: '123456', DOB: DateTime.new(1991, 10, 11))

user10 = User.create(username: 'AquaZircon', email: 'AquaZircon@NSDart.com', password: '123456', DOB: DateTime.new(1991, 10, 11))

user11 = User.create(username: 'AnatoFinnstark', email: 'AnatoFinnstark@NSDart.com', password: '123456', DOB: DateTime.new(1991, 10, 11))

user12 = User.create(username: 'Benlo', email: 'Benlo@NSDart.com', password: '123456', DOB: DateTime.new(1991, 10, 11))

user13 = User.create(username: 'Aenami', email: 'Aenami@NSDart.com', password: '123456', DOB: DateTime.new(1991, 10, 11))


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

dev11 = Deviation.create(
    title: "Nilvesthecia Project",
    description: "Concept art for personal project [Nilvesthecia the nowhere library]: Shattered star.",
    artist_id: User.find_by(username: 'Zeronis').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/_nilvesthecia_project____corterrissa_by_rezynsire_ddxnxha-fullview.jpg"), filename: 'nilvesthecia_project.jpg')

dev12 = Deviation.create(
    title: "Sekiro. Dragon's Blood",
    description: "One blade, one man, one dragon. Which will come out victorious? Based on the Sekiro game.",
    artist_id: User.find_by(username: 'AnatoFinnstark').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/sekiro__dragon_s_blood_by_anatofinnstark_dd6ng9p-fullview.jpg"), filename: 'sekiro_dragon.jpg')

dev13 = Deviation.create(
    title: "KDA Fan Art",
    description: "My take on the KDA Pop Stars from League of Legends",
    artist_id: User.find_by(username: 'AquaZircon').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/_fanart__kda__league_of_legends__by_rogishin_dcrmn1v-fullview.jpg"), filename: '.jpg')

dev14 = Deviation.create(
    title: "Bridge to Eternal",
    description: "A metaphor to the never ending cycle of how Chinese culture reincarnation.",
    artist_id: User.find_by(username: 'TheOne').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/bridge_of_eternal_by_breath_art_ddwgusd-fullview.jpg"), filename: 'bridge_of_eternal.jpg')

dev15 = Deviation.create(
    title: "Toph the boss!",
    description: "My favorite character of all from Avatar the Last Airbender.",
    artist_id: User.find_by(username: 'AnatoFinnstark').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/toph__the_last_airbender__by_10juu_ddzonzw-fullview.jpg"), filename: 'toph_the_boss.jpg')

dev16 = Deviation.create(
    title: "Zoe the Aspect of Twilight",
    description: "Joining the fray in a frizzling way! Zoe jumps in Summoners Rift to cure her case of temporary boredom.",
    artist_id: User.find_by(username: 'AquaZircon').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/zoe__the_aspect_of_twilight_by_jessibeans_dbsz48l-fullview.jpg"), filename: 'zoe_LOL.jpg')

dev17 = Deviation.create(
    title: "FF7 Crew Forever!",
    description: "In preparation for FF7 Remake, my favorite characters from FF7 fanart! Hope you all like it.",
    artist_id: User.find_by(username: 'Lucky978').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/d92fve0-5aad9ac5-89c0-47ee-8d13-e311e37e2a1d.jpg"), filename: 'FF7_crew.jpg')

dev18 = Deviation.create(
    title: "The Getaway League of Legends",
    description: "I started playing some LoL recently. It's actually a lot of fun learning and playing the game with my friend. Also a great way to release the stress from day to day work! I play a lot of Tahm Kench support (also gangplank!). Moment like this are my absolute favorite, running in and saving teammate out of danger. That is why I wanted to do this piece, to capture that fun epic moment. haha",
    artist_id: User.find_by(username: 'Benlo').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/d9ki3br-6e98d292-a0d3-492d-8777-2ae378e694d3.jpg"), filename: 'the_getaway_LOL.jpg')

dev19 = Deviation.create(
    title: "Forbidden Secret Love",
    description: "Forbidden love relationships always carry the heaviest and risky emotions, but also solidify the greatest amount of love for each other.",
    artist_id: User.find_by(username: 'KaijuSamurai').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/ddwby32-be812c1e-3566-43e7-88f2-743f8da4f5d4.png"), filename: 'forbidden_lovers.jpg')

dev20 = Deviation.create(
    title: "A Typical Parenting Day",
    description: "A personification of how I picture a typical day of responsibilities when parenting and working a full-time job at the same time.",
    artist_id: User.find_by(username: 'TheOnly').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/ddwehyl-8936e1a8-6f75-4cca-9a4e-a2b9d30b0de8.jpg"), filename: 'parenting_day.jpg')

dev21 = Deviation.create(
    title: "Homeward Bound",
    description: "A beautiful rendition of the epicness riding horses (especially on the way back home).",
    artist_id: User.find_by(username: 'TheOne').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/ddwps9n-f4732a13-c8bd-4392-958e-d5a3206a1ce5.jpg"), filename: 'homeward_bound.jpg')

dev22 = Deviation.create(
    title: "Civilization Transportation Fantasy",
    description: "I am always intrigued in the possibilites of how big a flying city based on the enormousness of a whale designed system.",
    artist_id: User.find_by(username: 'pjacubinas').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/ddx9757-540d270a-20c2-4ac9-960c-b9c01b2e536d.png"), filename: 'city_whale.jpg')

dev23 = Deviation.create(
    title: "Journey to Find the Lost civilization",
    description: "A boy and his companion on a quest to find a hidden civilization that may not be alive anymore. Hope will guide the way.",
    artist_id: User.find_by(username: 'KaijuSamurai').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/ddyxowt-88e24481-4c32-4676-9eb3-721faf47580d.jpg"), filename: 'onward_night.jpg')

dev24 = Deviation.create(
    title: "Sleeping Child of Light",
    description: "Keep those dreams huge and always embrace getting enough sleep everyday :)",
    artist_id: User.find_by(username: 'kiki-doodle').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/de0bgch-34c17a1f-9736-48ef-a53c-6f05feeed5f5.jpg"), filename: 'sleeping_CoL.jpg')

dev25 = Deviation.create(
    title: "Escape Pod",
    description: "The reason that escape pods are made. The new journey for humanity's second chance.",
    artist_id: User.find_by(username: 'Benlo').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/de0buc3-59c6459c-2cc8-4c96-933b-1f74483d1278.png"), filename: 'escape_pod.jpg')

dev26 = Deviation.create(
    title: "Someday",
    description: "Patreon - www.patreon.com/aenamiart
    Instagram - www.instagram.com/aenami.art 
    Print Shop - society6.com/aenami/prints",
    artist_id: User.find_by(username: 'Aenami').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/someday_by_aenami_dd9s1vh-fullview.png"), filename: 'someday.jpg')

dev27 = Deviation.create(
    title: "Sakuta Azusagawa Minimalistic",
    description: "A main protagonist of a surprisingly heartfelt and awesome anime with a misleading name, but still a harem. Rascal Does Not Dream of Bunny Girl Senpai.",
    artist_id: User.find_by(username: 'CrabDaddy').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/sakuta_azusagawa_minimalistic_wallpaper_by_fanofanime2_de0bk8x-fullview.png"), filename: 'sakuta_azusagawa.jpg')

dev28 = Deviation.create(
    title: "Vocaloid Crew Squad edition",
    description: "Vocaloid is life! My take on my favorite singers with taking inspiration from kpop style sense.",
    artist_id: User.find_by(username: 'Aenami').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/render__100_by_falla_y_ddwv1xl-fullview.png"), filename: 'vocaloid_crew.jpg')

dev29 = Deviation.create(
    title: "Ionia Teahouse",
    description: "Tea house

    Round one for League of Legends Oceanic artathon. Ionia theme I love the most~ヽ(´▽｀)/
    I've been wanting to paint a teahouse for so long! Ionian architechture is more organic, created in harmony with their woodweavers so I wanted to make it look more warm and natural :3
    It was a fun study for perspective, lots of help from my sis :iconelintan: !!! Lots to fix up but I will post a small process vid soon~ Back to painting FF commissions! * ^ * ) /",
    artist_id: User.find_by(username: 'AquaZircon').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/ionian_teahouse_by_fiveonthe_dcaoob1-fullview.jpg"), filename: 'ionian_teahouse.jpg')

dev30 = Deviation.create(
    title: "Fox Girl Class Selection",
    description: "Best girl customization. I want a game to make this look available for a demi-beast race. Please game developers!",
    artist_id: User.find_by(username: 'CrabDaddy').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/fox_girl_class_demo_by_zeronis_de0cotf-fullview.jpg"), filename: 'fox_girl_class.jpg')

dev31 = Deviation.create(
    title: "Shelty Basking in Sun",
    description: "A work done on my lazy and elegant Shelty. Give her all praise and respect she deserves!",
    artist_id: User.find_by(username: 'pjacubinas').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/de0de9v-79b6f21b-af4e-4206-957c-9ea5996ea52f.png"), filename: 'shelty.jpg')

dev32 = Deviation.create(
    title: "Sweet Treat Bat",
    description: "This little bat is a sweet tooth fiend! Be careful and don't leave your sweet treats out and about.",
    artist_id: User.find_by(username: 'CryptidCreations').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/de0dkg2-d1f92c44-ae77-43d3-8d63-17ba1172fd98.png"), filename: 'sweet_treat_bat.jpg')

dev33 = Deviation.create(
    title: "Epic 7 Luna",
    description: "Best dragon girl warrior character in Epic 7! Judge Keise a close 2nd.",
    artist_id: User.find_by(username: 'CrabDaddy').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/epic7_art_contest_by_midfinger_de0bj72-fullview.jpg"), filename: 'luna_e7.jpg')

dev34 = Deviation.create(
    title: "Gamera, KoM Contender",
    description: "Welcome a new King of Monsters contender to try his wack at being King. Godzilla reference.",
    artist_id: User.find_by(username: 'KaijuSamurai').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/de0czta-d7479632-a255-4045-bf80-16c74be58ed5.jpg"), filename: 'gamera.jpg')

dev35 = Deviation.create(
    title: "Touched by Starlight",
    description: "Testing concept art for an idea of the birth of a new heroine with star powers.",
    artist_id: User.find_by(username: 'Aenami').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/de0ckzh-14ca2d01-8a12-406c-b29e-9b87ceacb26f.png"), filename: 'starlight_touch.jpg')

dev36 = Deviation.create(
    title: "Avatar the Last AirBender!",
    description: "Made using digital painting. Yay Avatar!",
    artist_id: User.find_by(username: 'kiki-doodle').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/dsnlse-326ff710-a246-42f5-b312-b7589a96c688.jpg"), filename: 'avatar_tla.jpg')

dev37 = Deviation.create(
    title: "Pokemon Picnic",
    description: "my piece for a starter pokemon zine (routeonezine @ twitter and tumblr)
    this was the first zine i was ever a part of! so much fun!!
    
    tools: photoshop, wacom cintiq 16",
    artist_id: User.find_by(username: 'Zeronis').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/ddhqrki-5cb60edb-48e7-475a-afe7-5095af3bbab9.png"), filename: 'pokemon_picnic.jpg')

dev38 = Deviation.create(
    title: "LoL: Fear the Wild",
    description: "Request from ~HappyFaceStar : Nidalee and Udyr as a (love) couple together fighting for justice.

    Many thanks to=Chichirisan who lends me an helpful hand with concept work, research and sketching for this.",
    artist_id: User.find_by(username: 'AquaZircon').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/league_of_legends__fear_the_wild_by_nfouque_d4yy017-fullview.jpg"), filename: 'fear_the_wild.jpg')

dev39 = Deviation.create(
    title: "Midnight Watcher",
    description: "Midnight Watcher - My entry for the Character Design Challenge of this month (theme: Dino Racers)",
    artist_id: User.find_by(username: 'TheOne').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/midnight_watcher_by_infesth6_de0bvfm-fullview.jpg"), filename: 'midnight_watcher.jpg')

dev40 = Deviation.create(
    title: "LoL: Neeko",
    description: "I got the chance to paint the splash for this new champion in League of Legends. I was excited to work on it and I'm really grateful for all the support and help I got from the team on this one. Riot Games",
    artist_id: User.find_by(username: 'AquaZircon').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/neeko___league_of_legends_by_izaskun_dcuz5xr-fullview.jpg"), filename: 'neeko.jpg')

dev41 = Deviation.create(
    title: "LoL: KDA Splash Art",
    description: "Hello summoners this is splash art and i will win LoL World 2018.",
    artist_id: User.find_by(username: 'AquaZircon').id
).artwork.attach(io: open("https://not-so-deviant-art-dev.s3-us-west-1.amazonaws.com/kda_crew_by_sowhdesign_by_sowhdesign_dcvfd7z-pre.jpg"), filename: 'kda_splash.jpg')
