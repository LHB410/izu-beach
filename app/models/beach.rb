class Beach < ApplicationRecord
  has_many :reviews

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


