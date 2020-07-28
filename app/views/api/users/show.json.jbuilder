json.user do
    json.partial! 'api/users/user', user: @user
end

json.comments do
  @comments.each do |comment|
      json.set! comment.id do
          json.partial! '/api/comments/comment', comment: comment
      end
  end
end

json.favorites do
  @favorites.each do |favorite|
      json.set! favorite.id do
          json.partial! '/api/deviations/deviation', deviation: favorite
          #blue deviation represents what its called in the partial
      end
  end
end

# json.favorite_deviations do
#   @favorites.each do |favorite|
#     json.set! favorite.deviation_id do
#       json.partial! '/api/deviations/deviation', favorite_deviation: favorite_deviation
#     end
#   end
# end

json.deviations do
  @deviations.each do |deviation|
      json.set! deviation.id do
          json.partial! '/api/deviations/deviation', deviation: deviation
      end
  end
end