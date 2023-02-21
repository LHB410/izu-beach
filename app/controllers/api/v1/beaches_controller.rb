class Api::V1::BeachesController < ApplicationController
  before_action :set_beach, only: %i[show]

  def index
      @beaches = Beach.all
      render json: @beaches, include:
      [:reviews => {only: [:title, :content, :rating, :screen_name]} ],
      location: api_v1_beaches_path(@beaches)
  end

  def show
    @review = Review.new

    render json: @beach, include:
      [:reviews => {only: [:title, :content, :rating, :screen_name]} ],
      location: api_v1_beach_path(@beach)
  end

  def search
    @beaches = Beach.where("address like ? OR name like ?", "%#{params[:q]}%", "%#{params[:q]}%")
    render json: @beaches, location: api_v1_search_path(@beaches)
  end

  private

  def set_beach
    @beach = Beach.find(params[:id])
  end
end
