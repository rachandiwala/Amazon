# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Product.create!(
  :name => "E-Zegna",
  :description => "Milan & Paris Men's Fashion Week",
  :price_in_cents => 99
  )

Product.create!(

  :name => "E-Zegna - Casual/Party wear",
  :description => "Ermenegildo Zegna Winter Collectoin",
  :price_in_cents => 89
  )

Product.create!(

  :name => "E-Zegna - Party wear",
  :description => "Ermenegildo Zegna Winter Collectoin",
  :price_in_cents => 79
  )

