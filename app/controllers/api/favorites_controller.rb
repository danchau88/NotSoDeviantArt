class Api::FavoritesController < ApplicationController
  def create
    @favorite = Favorite.create(favorite_params)
    render :new
  end

  def destroy
    @favorite = Favorite.find_by(id: params[:id])
    @favorite.destroy
  end

  private
  def favorite_params
    params.require(:favorite).permit(:deviation_id, :user_id)
  end
end
