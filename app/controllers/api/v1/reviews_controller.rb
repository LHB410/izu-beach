class Api::V1::ReviewsController < ApplicationController
  before_action :set_beach

  def create
    @review = Review.new(review_params)
    @review.beach = @beach
    @review.save
    render json: @review, location: api_v1_beach_reviews_path(@beach)
  end

  private

  def review_params
    params.require(:review).permit(:rating, :content, :screen_name, :title)
  end

  def set_beach
    @beach = Beach.find(params[:beach_id])
  end
end
