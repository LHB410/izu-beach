class Beach < ApplicationRecord
  has_many :reviews

  validates :name, :address, :description, :bbq_friendly, :parking, presence: true
end
