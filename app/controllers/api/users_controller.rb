class Api::UsersController < ApplicationController
    def index
        @users = User.all
        render :index
    end

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)   
        if @user.save
           login(@user)
           @comments = @user.comments
           @deviations = @user.deviations
           @favorites = @user.favorite_deviations
           render :show  
        else
           render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        if @user
            @comments = @user.comments
            @deviations = @user.deviations
            @favorites = @user.favorite_deviations
            render :show
        else
            render json: ["Unable to find user"], status: 404 
        end
    end
end
