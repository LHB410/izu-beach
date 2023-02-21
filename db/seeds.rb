import 'izu-beaches.json'
require 'json'

REVIEW_TITLES = [  "A perfect day at the beach",  "A relaxing getaway at the beach",  "Amazing beach with crystal clear water",  "The best beach in the Izu Peninsula",  "A beautiful escape to the beach",  "A lovely day at the shore",  "The perfect beach for a family day trip",  "Great beach for swimming and sunbathing",  "A hidden gem in the Izu Peninsula",  "A tranquil beach to unwind",  "The perfect place to soak up the sun",  "A stunning beach with breathtaking views",  "A peaceful paradise on the coast",  "A fantastic beach to enjoy with friends",  "A picturesque beach for a romantic getaway",  "A must-visit beach in the Izu Peninsula",  "A gorgeous beach for snorkeling and diving",  "A refreshing dip in the sea",  "A fun-filled day at the beach",  "A heavenly place to relax and recharge",  "A scenic beach for a picnic",  "The ultimate beach escape",  "A wonderful spot to watch the sunset",  "A serene beach to forget about the world",  "A sandy playground for the whole family",  "A beach with soft sand and calm water",  "A refreshing swim in the ocean",  "A quiet escape to the beach",  "A stunning view of the beach and sea",  "A perfect spot to read a book and relax",  "A romantic stroll on the beach",  "A fun beach for surfing and kayaking",  "A great place to build sandcastles with kids",  "A secluded beach for privacy and peace",  "A must-visit spot for nature lovers",  "A scenic beach for hiking and exploring",  "A peaceful place to meditate by the sea",  "A breathtaking view of the ocean and sky",  "A hidden cove with crystal-clear water",  "A perfect beach for a weekend getaway",  "A sandy beach with plenty of shade",  "A beautiful spot to take photos",  "A perfect spot for a beach bonfire",  "A secluded spot for a romantic picnic",  "A relaxing beach for yoga and meditation",  "A perfect place for a beach wedding",  "A fun beach for beach volleyball and frisbee",  "A great beach for fishing and crabbing",  "A scenic beach for birdwatching",  "A perfect beach for a game of beach soccer",  "A peaceful retreat from the city"]
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Cleaning db"
Review.destroy_all
Beach.destroy_all

json = File.read("./izu_beaches.json")
izu_beach_info = JSON.parse(json)

izu_beach_info.each do | izu_beach |
  beach = Beach.create!(
    name: izu_beach["name"],
    address: izu_beach["address"],
    description: izu_beach["address"],
    parking: izu_beach["parking"],
    bbq_friendly: izu_beach["bbq_friendly"],
    image_url: "http://source.unsplash.com/1600x900/?beach&format=webp"
  )
  i = 0
  5.times do
    p izu_beach["reviews"][i]["content"]
      beach.reviews.create!(
        title: REVIEW_TITLES.sample,
        content: izu_beach["reviews"][i]["content"],
        rating: [1,2,3,4,5].sample,
        screen_name: Faker::Name.name
      )
      i += 1
  end


end
puts "db created!"
