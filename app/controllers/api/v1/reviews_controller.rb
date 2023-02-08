class Api::V1::ReviewsController < ApplicationController
  before_action :set_beach, only: [:create]

  def create
    @review = Review.new(review_params)
    @review.beach = @beach
    if @review.save
      render json: @review, status: :created, location: api_v1_beach_path(@beach)
    else
      render json: @beach, status: :unprocessable_entity, location: api_v1_beaches_path
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :content, :screen_name, :title)
  end

  def set_beach
    @beach = Beach.find(params[:beach_id])
  end
end
