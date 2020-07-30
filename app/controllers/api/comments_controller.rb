class Api::CommentsController < ApplicationController
    def index
        @comments = Comment.where(deviation_id: params[:deviation_id]).includes(:author)
        render :index
    end

    def show
        @comment = Comment.find_by(id: params[:id])
        render :show
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        if @comment.destroy
            render :destroy
        else
            render json: ["You can't destroy something that doesn't exist."]
        end
    end
    
    private
    def comment_params
        params.require(:comment).permit(:body, :deviation_id, :parent_id)
    end
end
