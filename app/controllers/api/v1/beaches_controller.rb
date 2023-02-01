class Api::V1::BeachesController < ApplicationController
  before_action :set_beach, only: [:show]
  def index
    @beaches = Beach.all

    render json: @beaches, location: api_v1_beaches_path(@beaches)
  end

  def show
    @review = Review.new
    render json: @beach, location: api_v1_beach_path(@beach)
  end

  private

  def set_beach
    @beach = Beach.find(params[:id])
  end
end
