class Api::FavoritesController < ApplicationController
  def create
    @favorite = Favorite.create(favorite_params)
    render :new
  end

  def destroy
    @favorite = Favorite.find_by(deviation_id: params[:deviation_id], user_id: params[:user_id]) #this is so for deleting in frontend
    @favorite.destroy

    # for custom delete message (passes to action as favoriteId)
    render json: {favoriteId: @favorite.id}
  end

  private
  def favorite_params
    params.require(:favorite).permit(:deviation_id, :user_id)
  end
end
