json.comments do
    @comments.each do |comment|
        json.set! comment.id do
            json.partial! '/api/comments/comment', comment: comment
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