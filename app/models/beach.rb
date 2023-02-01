class Beach < ApplicationRecord
  has_many :reviews

  validates :name, :address, :description, presence: true
  validates :bbq_friendly, :parking, inclusion: [true, false]
end
