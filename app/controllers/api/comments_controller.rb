class Api::CommentsController < ApplicationController

    def new
        @comment = Comment.new
        render :new
    end

    def create
        @comment = Comment.create(comment_params)
        if @comment.save
            render :create
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def edit
        @comment = Comment.find(params[:id])
        render :edit
    end

    def update
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params)
            render :update
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
        params.require(:comment).permit(:body, :author_id, :deviation_id, :parent_id)
    end
end
