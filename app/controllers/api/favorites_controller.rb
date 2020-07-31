class Api::FavoritesController < ApplicationController
  def create
    @favorite = Favorite.create(favorite_params)
    render :new
  end

  def destroy
    @favorite = Favorite.find_by(favorite_params) #uses same params as create
    @favorite.destroy

    # for custom delete message (passes to action as favoriteId)
    render json: {favoriteId: @favorite.id}
  end

  private
  def favorite_params
    params.require(:favorite).permit(:deviation_id, :user_id)
  end
end
