class Api::FavoritesController < ApplicationController
  def create
    @favorite = Favorite.create(favorite_params)
    render :new
  end

  def destroy
    @favorite = Favorite.find_by(favorite_params) #uses same params as create
    if @favorite.destroy
      # for custom delete message (passes to action as favoriteId)
      render :destroy
    else
      render @favorite.errors.full_messages, status: 422
    end
  end

  private
  def favorite_params
    params.require(:favorite).permit(:deviation_id, :user_id)
  end
end
