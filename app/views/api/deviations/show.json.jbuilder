json.deviation do
    json.partial! 'api/deviations/deviation', deviation: @deviation
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
            json.partial! '/api/favorites/favorite', favorite: favorite
        end
    end
end

json.users do
    @comments.each do |comment|
        json.set! comment.author_id do
            json.extract! comment.author, :id, :username
        end
    end
end
