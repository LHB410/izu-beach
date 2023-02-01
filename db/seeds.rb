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


10.times do
  beach = Beach.create!(
    name: "test",
    address: "test",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ut sunt exercitationem quia officia est reiciendis, blanditiis incidunt tempore eos maxime necessitatibus voluptatem perspiciatis beatae voluptates eligendi vitae iste sint",
    parking: [true, false].sample,
    bbq_friendly: [true, false].sample
  )
  5.times do
    beach.reviews.create!(
      title: "test",
      content: "test",
      rating: [1,2,3,4,5].sample,
      screen_name: Faker::name
    )
  end
end
puts "db created!"
