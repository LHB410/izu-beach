class Review < ApplicationRecord
  belongs_to :beach

  validates :title, :content, :rating, presence: true
end
