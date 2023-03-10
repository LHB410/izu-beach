class Beach < ApplicationRecord
  has_many :reviews

  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?

  validates :name, :address, :description, presence: true
  validates :bbq_friendly, :parking, inclusion: [true, false]

  include PgSearch::Model
  pg_search_scope :search_by_term, against: [ :name, :address ],
  using: {
    tsearch: {
      prefix: true,
      any_word: true
    },
  }

end


